import axios from 'axios'
// import http from './http-common'

class AddAssetservice {


    create(data) {
        return axios.post('http://localhost:8083/addassetform/addasset', data)

    }
    getAll() {
        return axios.get('http://localhost:8083/addassetform/getall')
    }
    getByid(id) {
        return axios.get(`http://localhost:8083/addassetform/assetsbyid/${id}`)
    }
    update(data, id) {
        return axios.put(`http://localhost:8083/addassetform/update/${id}`, data)
    }
    getallByStatus(status) {
        return axios.get(`http://localhost:8083/addassetform/getallbystatus/${status}`)
    }
    getalldeletehistory() {
        return axios.get('http://localhost:8083/addassetform/getalldeletehistory')
    }
}
export default new AddAssetservice()