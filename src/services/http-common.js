import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost:8083/addassetform",
    headers: {
        'content-Type': 'application/json'
    }

})