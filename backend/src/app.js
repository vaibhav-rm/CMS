import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    optionsSuccessStatus: 200,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// Serve files from the "public" directory
app.use("/public/temp", express.static("public/temp"));

// routes imports
import studentRouter from "./routes/student.routes.js";
import branchRouter from "./routes/branch.routes.js";
import facultyRouter from "./routes/admin.routes.js";

// routes declaration
app.use("/api/v1/student", studentRouter);
app.use("/api/v1/branch", branchRouter);
app.use("/api/v1/admin", facultyRouter);

export { app } 