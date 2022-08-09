const api = "https://post-project-dep.herokuapp.com/api/users";
const log = "https://post-project-dep.herokuapp.com/api/log";

//con watch crear funcion para comprobar si el username/email ya se encuentra en la DB

export async function getUsuarios() {
  try {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function login() {
  try {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function registro(data) {
  const response = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  await fetch(api, response).then((response) => response.json());
}

export async function logi(data) {
  const response = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return await fetch(log, response).then((response) => response.json());
}
