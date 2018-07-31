import { fromJS } from 'immutable';
import * as actionTypes from './actionType' 
// imutable.js可以生产immutable对象 只要某一变量变为 imutable对象 就不可被修改
const defaultState = fromJS({
	topicList:[],
	articleList: [],
	recommendList:[],
	articlePage: 1,
	showScroll: false
});

export default (state = defaultState, action)=>{
	switch (action.type){
		case actionTypes.CHANGE_HOME_DATA:
			return state.merge(
				{'topicList':fromJS(action.topicList)},
				{'articleList':fromJS(action.articleList)},
				{'recommendList':fromJS(action.recommendList)},
			)
		case actionTypes.ADD_ARTICLE_DATA:
			return state.merge({
				'articleList': state.get('articleList').concat(action.list),
				'articlePage':action.page
			})
		case actionTypes.TOGGLE_SCROLL_TOP:
			return state.set('showScroll',action.show)
		default:
		 return state
	}
}