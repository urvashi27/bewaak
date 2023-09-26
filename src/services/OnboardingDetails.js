import Axios from 'axios'
// import authHeader from '@/axios'
// Axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');
class OnboardingService {
    create(data) {
        return Axios.post('http://localhost:8083/onboarding/add', data)
    }
    getAll() {
        return Axios.get("http://localhost:8083/onboarding/getall")
    }
    get(id) {
        return Axios.get(`http://localhost:8083/onboarding/get/${id}`)
    }
    update(ggid, data) {
        return Axios.put(`http://localhost:8083/onboarding/update/${ggid}`, data)
    }
    delete(id) {
        return Axios.delete(`http://localhost:8083/onboarding/delete/${id}`)
    }

}

export default new OnboardingService()