import client, { removeAuthorizationHeader } from "../../API/client.js";
import storage from "../../utils/storage.js";
import { setAuthorizationHeader } from "../../API/client.js";

const login = async ({ remember, ...credentials }) => {
  const { accessToken } = await client.post("api/auth/login", credentials);
  setAuthorizationHeader(accessToken);
  storage.set("auth", accessToken);
};

export const logout = async () => {
  await Promise.resolve();
  removeAuthorizationHeader();
  storage.remove("auth");
};

export default login;