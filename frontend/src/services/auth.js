import { readUsers } from "../API/axiosUsers";


export async function loginUser(email, senha) {
  const response = await readUsers();
  const users = response.data;

  const user = users.find(
    (u) => u.email === email && u.password === senha
  );

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }


  return null;
}

export function getLoggedUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export function logoutUser() {
  localStorage.removeItem("user");
}