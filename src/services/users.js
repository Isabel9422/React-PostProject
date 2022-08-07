const api= "https://postproject-deploy.herokuapp.com/api/users" // AHI VAN MIS APIS
const log= "https://postproject-deploy.herokuapp.com/api/log"
const fetchAPI = await fetch(api)

export async function getUsuarios() {
    try {
        const response = await fetch(api)
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}
export async function login() {
    try {
        const response = await fetch(api)
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function Register() {
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

export function handleSubmit(){(async (data) => await fetchAPI(data))};