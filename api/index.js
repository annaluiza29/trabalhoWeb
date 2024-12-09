import express from "express";
import cors from "cors";
import tasksRoutes from "../routes/tasks";


const app = express();

app.use(express.json());
app.use(cors());
app.use("/", tasksRoutes); //retorna informacoes




app.listen(3000);
