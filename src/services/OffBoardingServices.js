import axios from 'axios'


class OffBoardingService {
    getOffBoardingStatus() {
        return axios.get('http://localhost:8083/offboarding/getall');
    }
    delete(offboardingId, data) {
        return axios.delete(`http://localhost:8083/offboarding/delete/${offboardingId}`, data)
    }
    create(data) {
        return axios.post(`http://localhost:8083/offboarding/add`, data)
    }
    update(offboardingId, data) {
        return axios.put(`http://localhost:8083/offboarding/update/${offboardingId}`, data)
    }
}
export default new OffBoardingService()