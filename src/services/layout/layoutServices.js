import axios from 'axios';
export class LayoutService {
    //  token = JSON.parse(sessionStorage.getItem('token'));
    //  options = {
    //     headers: {
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //       'Accept': 'application/json',
    //       'Access-Control-Allow-Origin': '*',
    //       "Authorization" : `Bearer ${token}`,
  //  /getbyitemid/: 
    //   }
    //   };
    getItemListForSearch(){
      const  token = JSON.parse(sessionStorage.getItem('token'));
     
       const options = {
            headers: {
              "Authorization" : `Bearer ${token}`,
              
          }
          };
        try{
            return axios.get('http://192.168.0.188:80/api/item/searchlist',options).then(data  =>data.data)
        
          }  catch (error) {
                //const err = error as AxiosError
                if (error.response) {
                   console.log(error.response.status)
                   console.log(error.response.data)
                }
                else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error);
                  console.log('Error', error.message);
                }
                console.log(error.config);
               // this.handleAxiosError(error)
             }

    }

    getItemDetailsListForSearch(id) {
        const  token = JSON.parse(sessionStorage.getItem('token'));
      
       const options = {
            headers: {
              "Authorization" : `Bearer ${token}`,
              
          }
          };
        try{
            return axios.get('http://192.168.0.188:80/api/item/details/getbyitemid/'+id,options).then(data  =>data.data.data);
        
          }  catch (error) {
                //const err = error as AxiosError
                if (error.response) {
                   console.log(error.response.status)
                   console.log(error.response.data)
                }
                else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error);
                  console.log('Error', error.message);
                }
                console.log(error.config);
               // this.handleAxiosError(error)
             }
    }
}