import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// export const authenticateJWT = (req, res, next) => {
//   const token = req.header('Authorization')?.replace('Bearer ', '');

//   if (!token) {
//     return res.status(401).json({ message: "Token not found" });
//   }

//   jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
//     if (err) {
//       return res.status(403).json({ message: "Invalid token" });
//     }
//     req.user = user; // Menyimpan data user yang terverifikasi ke request
//     next();
//   });
// };

export const authenticateJWT = (req, res, next) => {
  let token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token && req.cookies?.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return res.status(401).json({ message: "Token tidak ditemukan." });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Token tidak valid." });
    req.user = user;
    next();
  });
};

// ✅ Tambahkan ini
export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Akses ditolak." });
    }
    next();
  };
};
