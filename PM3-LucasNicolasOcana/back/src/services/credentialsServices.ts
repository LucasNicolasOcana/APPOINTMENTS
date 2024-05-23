import { ICredential } from "../interfaces/ICredential";

export let credentials: ICredential[] = [];
let currentCredentialId: number = 1;

export const createCredentials = (
  username: string,
  password: string
): number => {
  const id = currentCredentialId++;
  const credential: ICredential = { id, username, password };
  credentials.push(credential);
  return id;
};

export const checkCredentials = (
  username: string,
  password: string
): number | undefined => {
  const credential = credentials.find(
    (cred) => cred.username === username && cred.password === password
  );
  return credential ? credential.id : undefined;
};
