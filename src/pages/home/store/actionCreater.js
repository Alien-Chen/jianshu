import axios from 'axios';
import * as actionTypes from './actionType' ;
import { fromJS } from 'immutable';
const changeHomeAction = (result)=> ({ 
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList || [],
    recommendList: result.recommendList || [],
    articleList: result.articleList|| []
})
const addHomeAction = (result,page)=> ({ 
	type: actionTypes.ADD_ARTICLE_DATA,
	list: fromJS(result),
	page: page
})
export const changeHomeData = ()=>{
    return (dispatch)=>{
			axios.get('/api/home.json').then((res)=>{
				const result = res.data.data;
				const action = changeHomeAction(result);
				dispatch(action);
			})
    }
}

export const getMoreList = (page) => {
	return (dispatch)=>{
		axios.get('/api/homeList.json?page='+page).then((res)=>{
			const result = res.data.data;
			const action = addHomeAction(result,page + 1);
			dispatch(action);
		})
	}
}

export const toggleTopShow = (show) => ({
	type: actionTypes.TOGGLE_SCROLL_TOP,
	show
})