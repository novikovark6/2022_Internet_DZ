import {domain} from "../constants";
import axios from "axios";

export default class FirstService {
    static async GetFirstList() {
        const response = await axios.get(`${domain}/first`)
        return response.data
    }

    static async create(name, price) {
        const response = await axios.post(`${domain}/first`, {
            full_name: name,
            price: price
        })
        return response.data
    }

    static async del(id) {
        const response = await axios.delete(`${domain}/first/${id}`)
        return response.data
    }

    static async edit(id, data) {
        const response = await axios.patch(`${domain}/first/${id}`, data)
        return response.data
    }

}
