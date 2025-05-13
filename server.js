import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
// routing
import questionRouter from "./routes/questionRoute.js";
import formRouter from "./routes/formRoute.js";
import dashboardRouter from "./routes/dashboardRoute.js";
import answersRouter from "./routes/asnwersRoute.js";
import loginRouter from "./routes/loginRoute.js";

const app = express();
const port = 4000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view engine
app.use(expressEjsLayouts);
app.set("view engine", "ejs");

//use public folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Dashboard",
    layout: "layouts/main",
  });
});

app.use("/question", questionRouter);
app.use("/form", formRouter);
app.use("/dashboard", dashboardRouter);
//import batch answer
app.use('/', answersRouter)
app.use("/login", loginRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
