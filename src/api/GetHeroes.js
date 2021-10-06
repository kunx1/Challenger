import axios from "axios";

const GetHeroes = async(id) => {
    const url = `https://www.superheroapi.com/api.php/6464659150226063/${id}`
    const res = await axios.get(url)
    const respuesta =await res.data
    return respuesta
}

export default GetHeroes;