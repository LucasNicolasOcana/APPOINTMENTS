import { IUser } from "../interfaces/IUser";
import { ICredential } from "../interfaces/ICredential";
import { credentials } from "./credentialsServices";
import { createCredentials } from "./credentialsServices";
import { UserDTO } from "../dto/usersDto";

let users: IUser[] = [];

export const getAllUsers = (): IUser[] => {
  return users.map((user) => {
    const { credentialsId, ...userData } = user;
    return { ...userData, credentialsId: 0 };
  });
};

export const getUserById = (id: number): IUser | undefined =>
  users.find((user) => user.id === id);

export const createUser = async (userDTO: UserDTO): Promise<void> => {
  try {
    const credentialsId = createCredentials(userDTO.username, userDTO.password);
    const id = users.length + 1;
    const newUser: IUser = { ...userDTO, id, credentialsId };
    users.push(newUser);
  } catch (error) {
    throw new Error(`Error creating user: ${error}`);
  }
};

export const checkCredentials = (
  username: string,
  password: string
): ICredential | undefined => {
  const credential = credentials.find(
    (cred: ICredential) =>
      cred.username === username && cred.password === password
  );
  return credential;
};
