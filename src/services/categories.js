const api= "https://postproject-deploy.herokuapp.com/api/categories" // AHI VAN MIS APIS

export async function getCategories() {
    try {
        const response = await fetch(api)
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}