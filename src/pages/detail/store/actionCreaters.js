import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';
const getDetailAction = (res)=>{
	return  {
		type: actionTypes.GET_DETAIL_INFO,
		title: fromJS(res.data.data.title),
		content: fromJS(res.data.data.content)
	}
}
export const getDetail = (id)=>{
    return (dispatch)=>{
			axios.get('/api/detail.json?id='+id).then(res=>{
				const action = getDetailAction(res);
				dispatch(action);
			}).catch(error=>{
					
			})
    }
}