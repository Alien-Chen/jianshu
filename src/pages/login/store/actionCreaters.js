import axios from "axios";
import { CHANGE_LOGIN } from './actionTypes';
const changeLogin =  (isLogin)=>({
    type: CHANGE_LOGIN,
    login: isLogin
})
export const login = (account,password)=>{
    return (dispatch)=>{
        axios.get(`/api/login.json?action=${account}&password=${password}`)
            .then(res=>{
                const result = res.data.data;
                if(result){
                    dispatch(changeLogin(true));
                }else{
                    alert('登入失败')
                }
            }).catch(error=>{

            })
    }
}

export const loginOut = ()=>{
    return (dispatch)=>{
       dispatch(changeLogin(false));
    }
}