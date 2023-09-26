import axios from 'axios'
// import authHeader from '@/axios'
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
class UserService {
    getAllUsers() {
        return axios.get('http://localhost:8083/users/getall')
    }
    create(data) {
        return axios.post('http://localhost:8083/users/add', data);
    }

    deleteUser(id) {
        return axios.delete(`http://localhost:8083/users/delete/${id}`)
    }
    Update(id, status, role) {
        return axios.put(`http://localhost:8083/approvals/approveuser/${id}/${status}/${role}`)
    }
    authenticate(data) {
        return axios.post('http://localhost:8083/authenticate', data)
    }
    get(id) {
        return axios.get(`http://localhost:8083/users/get/${id}`)
    }
}

export default new UserService()