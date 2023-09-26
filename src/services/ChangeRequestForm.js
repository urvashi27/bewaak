import axios from 'axios'

class ChangeRequestForm {
    create(data) {
        return axios.post('http://localhost:8083/requestchange/add', data)
    }
    getAll() {
            return axios.get('http://localhost:8083/requestchange/getall')
        }
        /*   get(name) {
               return axios.get(`http://localhost:8083/requestchange/getbyname/{name}`,name)
           } */
    update(id, data) {
        return axios.put(`http://localhost:8083/requestchange/update/${id}`, data)
    }
    delete(id, data) {
        return axios.delete(`http://localhost:8083/requestchange/delete/${id}`, data)
    }
}
export default new ChangeRequestForm()