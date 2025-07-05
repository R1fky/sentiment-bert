import express from "express";
import expressEjsLayouts from "express-ejs-layouts";

//cokie parser
import cookieParser from "cookie-parser";
// routing
import formMhsRouter from "./routes/formMhsRoute.js";
import dashboardRouter from "./routes/dashboardRoute.js";
// import answersRouter from "./routes/asnwersRoute.js";
import loginRouter from "./routes/loginRoute.js";
// precess addForm
import formsRouter from "./routes/formsRoute.js";

// auth middleware
import { authenticateJWT, authorizeRoles } from "./middleware/auth.js";

const app = express();
const port = 4000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//view engine
app.use(expressEjsLayouts);
app.set("view engine", "ejs");

//use public folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    layout: "layouts/main",
  });
});

app.use("/form-mhs", formMhsRouter);
app.use("/dashboard", authenticateJWT, authorizeRoles("ADMIN", "SUPERADMIN"), dashboardRouter);
//import batch answer
// app.use("/", answersRouter);
app.use("/auth", loginRouter);
// app.use("/report", adminReportRouter);
app.use("/forms", authenticateJWT, authorizeRoles("ADMIN", "SUPERADMIN"), formsRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
