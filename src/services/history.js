import axios from 'axios'
class history {
    getAll() {
        return axios.get('http://localhost:8083/addassetform/getcount')
    }
}
export default new history();