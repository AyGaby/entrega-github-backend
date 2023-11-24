import { Router } from "express";
import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controller";

const RouterGit = Router();

// Operaciones CRUD

RouterGit.get("/user", getAllUsers); //Read
RouterGit.get("/user/:id", getUser); //Read
RouterGit.post("/user", createUser); //Create
RouterGit.put("/user/:id", updateUser); //Update (actualizacion parcial)
RouterGit.delete("/user/:id", deleteUser); //Delete

export default RouterGit;
