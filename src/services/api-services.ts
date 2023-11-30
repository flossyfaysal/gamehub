import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '55399b300a7b428d891d870a61d85908'
    }
});