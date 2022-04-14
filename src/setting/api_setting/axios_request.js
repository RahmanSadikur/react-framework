import axios from 'axios';
export async function AxiosRequest(url,method,params){
    const  token = JSON.parse(sessionStorage.getItem('token'));
    const header={
        "Authorization" : `Bearer ${token}`,
    }
     return params?axios({
        url:'http://localhost:8080/api/'+url,
         method:method,
         headers:header,
         params:params,
         timeout:1000,
         
     }):axios({
        url:'http://localhost:8080/api/'+url,
         method:method,
         headers:header,
         params:{},
         timeout:1000,
         
     });
 }