import axios from 'axios'
class FeedbackService {
    create(data) {
        return axios.post('http://localhost:8083/feedbacks/add', data)
    }
    getFeedback() {
        return axios.get('http://localhost:8083/feedbacks/getall')
    }
}
export default new FeedbackService()