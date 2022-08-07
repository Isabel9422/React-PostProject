const api= "https://postproject-deploy.herokuapp.com/api/users" // AHI VAN MIS APIS
const log= "https://postproject-deploy.herokuapp.com/api/log"
const fetchAPI = await fetch(api)

//con watch crear funcion para comprobar si el username/email ya se encuentra en la DB

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

export async function registro(data) {
    const response = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    await fetch(api, response).then(response => response.json());
    }