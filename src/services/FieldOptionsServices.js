import axios from 'axios'

var token = localStorage.getItem('jwtToken');
if (token !== null) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
}

class FieldOptionsServices {

    create(name, data) {
        return axios.put(`http://localhost:8083/fields/add/${name}/${data}`);
    }
    get(name) {
        return axios.get(`http://localhost:8083/fields/get/${name}`);
    }
    getAll() {
        return axios.get('http://localhost:8083/fields/getallfields');
    }
    getAllKeys() {
        return axios.get('http://localhost:8083/fields/getallkeys');
    }
}

export default new FieldOptionsServices()