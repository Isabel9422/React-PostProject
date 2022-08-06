const api= "https://postproject-deploy.herokuapp.com/api/usuarios" // AHI VAN MIS APIS
const log= "https://postproject-deploy.herokuapp.com/api/log"

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