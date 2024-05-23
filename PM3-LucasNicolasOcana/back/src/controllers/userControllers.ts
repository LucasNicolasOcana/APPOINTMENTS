import { Request, Response } from "express";
import * as UserService from "../services/usersServices";
import { UserDTO } from "../dto/usersDto";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsers();
    const formattedUsers = users.map((user) => ({
      name: user.name,
      email: user.email,
      birthdate: user.birthdate,
      nDni: user.nDni,
      username: user.username,
      password: user.password,
      id: user.id,
    }));

    res.json(formattedUsers);
  } catch (error: any) {
    res.status(500).send(`Error al obtener usuarios: ${error.message}`);
  }
};

export const getUserById = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const user = UserService.getUserById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("Usuario no encontrado");
  }
};

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, birthdate, nDni, username, password } = req.body;
  if (!name || !email || !birthdate || !nDni || !username || !password) {
    return res
      .status(400)
      .send("Falta información requerida para registrar un usuario.");
  }

  try {
    const userDTO: UserDTO = {
      name,
      email,
      birthdate,
      nDni,
      username,
      password,
    };
    await UserService.createUser(userDTO);
    res.status(201).send("Usuario Registrado!");
  } catch (error: any) {
    res.status(500).send(`Error al registrar usuario: ${error.message}`);
  }
};
export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const credentials = await UserService.checkCredentials(username, password);
    if (credentials) {
      res.status(200).send("Ingreso éxitoso!");
    } else {
      res.status(401).send("Datos inválidos!");
    }
  } catch (error: any) {
    res.status(500).send(`Error al autenticar usuario: ${error.message}`);
  }
};
