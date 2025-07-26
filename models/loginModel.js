import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export const SignUpUser = async (username, password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const exsistingUser = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    if (exsistingUser) {
      throw new Error("Username already exists");
    }
    return await prisma.user.create({
      data: {
        username,
        password: passwordHash,
      },
      select: {
        id: true,
        username: true,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const loginUser = async (username, password) => {
  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      throw new Error("User not found");
    }

    // 2. Verifikasi password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    } 

    // 3. Return data user tanpa password
    return {
      id: user.id,
      username: user.username,
      role: user.role,
    };
  } catch (error) {
    console.error("Error during login:", error);
    throw error; // Lempar error ke controller
  }
};
