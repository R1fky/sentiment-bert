import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authenticateJWT = (req, res, next) => {
  let token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token && req.cookies?.token) {
    token = req.cookies.token;
  }

  if (!token) {
    console.log("Token tidak ditemukan");
    const acceptsHTML = req.headers.accept && req.headers.accept.includes("text/html");
    if (acceptsHTML) {
      return res.status(401).render("errors/404", {
        layout: "layouts/main",
        title: "Akses Di Tolak",
      });
    }
    return res.status(401).json({ message: "Token tidak ditemukan." });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      console.log("Token tidak valid");
      const acceptsHTML = req.headers.accept && req.headers.accept.includes("text/html");
      if (acceptsHTML) {
        return res.status(403).render("errors/404", {
          layout: "layouts/main",
          title: "Token Tidak Valid",
        });
      }
      return res.status(403).json({ message: "Token tidak valid." });
    }

    console.log("Authenticated User:", user);
    req.user = user;
    next();
  });
};

//
export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const user = req.user;

    if (!user || !allowedRoles.includes(user.role)) {
      // Cek apakah request dari browser biasa (Accept HTML)
      const acceptsHTML = req.headers.accept && req.headers.accept.includes("text/html");

      if (acceptsHTML) {
        return res.status(403).render("errors/404", {
          layout: "layouts/main",
          title: "Akses Ditolak",
        });
      }

      return res.status(403).json({ message: "Akses ditolak" });
    }

    next();
  };
};
