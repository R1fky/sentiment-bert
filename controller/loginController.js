import * as loginModel from "../models/loginModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const SignUp = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }
    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters long" });
    }
    const newUser = await loginModel.SignUpUser(username, password);

    res.json({
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const user = await loginModel.loginUser(username, password);
    // get token jwt
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    // jika berhasil
    res.status(200).json({
      success: true,
      message: "Login successful",
      token: token,
      data:user
    });
  } catch (error) {
    console.error("Error login:", error);

    // Handle error spesifik
    if (error.message === "User not found") {
      return res.status(404).json({ message: "User not found" });
    }

    if (error.message === "Invalid password") {
      return res.status(401).json({ message: "Invalid credentials" }); // Gunakan pesan umum untuk keamanan
    }
  }
};
