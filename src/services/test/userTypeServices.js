import { AxiosRequest } from "../../setting/api_setting/axios_request";
export class UserTypeService {
 GetAll=()=>{
return AxiosRequest("usertype/","GET",{})
}
Save=(data)=>{
    return AxiosRequest("usertype/","POST",data)
    }
}