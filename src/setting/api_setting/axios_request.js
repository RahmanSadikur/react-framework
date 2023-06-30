import axios from 'axios';
export async function AxiosRequest(url,method,data){
    const  token = JSON.parse(sessionStorage.getItem('token'));

  const header={
    "Authorization" : `Bearer ${token}`,
}

     try{ 
      return data?axios({
       url:'http://192.168.0.102:8080/api/'+url,
       method:method,
       headers:header,        
       data:data,
      timeout:1000,
       
   }):axios({
      url:'http://192.168.0.102:8080/api/'+url,
       method:method,
       headers:header,
       params:{},
        timeout:1000,
       
   });}
   catch(error){
      console.log(error.response.data); 
   }
    
 }

 export const errorUtils = {
    getError: (error) => {
      let e = error;
      if (error.response) {
        e = error.response.data;                   // data, status, headers
        if (error.response.data && error.response.data.error) {
          e = error.response.data.error;           // my app specific keys override
        }
      } else if (error.message) {
        e = error.message;
      } else {
        e = "Unknown error occured";
      }
      return e;
    },
  };