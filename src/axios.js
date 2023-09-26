// // import axios from 'axios'
// // axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
// // 
export default function authHeader(){
    let token = localStorage.getItem('jwtToken');
     if(token){
return{
    Authorization : 'Bearer ' + localStorage.getItem('jwtToken')
}
// //     //  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
// //     //  axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'Bearer ' + localStorage.getItem('jwtToken');
     }else{
        return{}
     }
}
// // }