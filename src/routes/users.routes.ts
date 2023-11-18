import { Router } from "express";
import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controller";

const RouterGit = Router();

RouterGit.get("/user", getAllUsers);
RouterGit.get("/user/:id,", getUser);
RouterGit.post("/user", createUser);
RouterGit.put("/user/:id", updateUser);
RouterGit.delete("/user/:id", deleteUser);

export default RouterGit;
