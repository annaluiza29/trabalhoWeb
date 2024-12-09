import express from "express";
import {getTasks, addTasks, updateTasks, deleteTasks} from "../controllers/tasks"

const router = express.Router()
router.get("/", getTasks); //Retorna informações
router.post("/", addTasks); //Insere informações
router.put("/", updateTasks); //Atualiza informações
router.delete("/", deleteTasks); //Deleta informações


export default router; 