import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeLIst = (data)=>{
    return {
        type: constants.CHANGE_LIST,
        data: fromJS(data),
        totalPage: Math.ceil(data.length/10)
    }
} 

export const searchFocus = ()=>{
    return {
        type: constants.SEARCH_FOCUS
    }
}

export const searchBlur = ()=>{
    return {
        type: constants.SEARCH_BLUR
    }
}
  
export const getList = ()=> {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res=>{
            const data = res.data;
            dispatch(changeLIst(data.data));
        }).catch(()=>{
            console.log('error');
        })
    }
}

export const searchInfoMouseIn = () => {
    return {
        type:constants.SEARCH_INFO_MOUSEIN
    }
}

export const searchInfoMouseOut = () => {
    return {
        type:constants.SEARCH_INFO_MOUSEOUT
    }
}

export const ChangeSearchInfoPage = (page) => {
    return {
        type:constants.CHANGE_SEARCHINFO_PAGE,
        page
    }
}