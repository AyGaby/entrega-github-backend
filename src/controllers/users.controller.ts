import { Request, Response } from "express";

export const getAllUsers = (req: Request, res: Response) => {
  res.json({
    message: "Aqui estan los usuarios",
    users: [
      {
        name: "Gaby",
        year: 1900,
      },
    ],
  });
};

export const getUser = (req: Request, res: Response) => {
  res.json({
    message: "Success",
    users: [
      {
        name: "Gaby",
        year: 1900,
      },
    ],
  });
};

export const createUser = (req: Request, res: Response) => {
  const data = req.body;

  res.json({
    message: "Created",
  });
};

export const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    message: "Updated",
  });
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    message: "Deleted",
  });
};
