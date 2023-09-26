import axios from 'axios'

class RaiseissueService {

    create(data) {
        return axios.post('http://localhost:8083/raiseIssueForm/addraiseissueform', data)
    }
    getRaiseIssueForm() {
        return axios.get('http://localhost:8083/raiseIssueForm/getallraiseissueform')
    }

}

export default new RaiseissueService()