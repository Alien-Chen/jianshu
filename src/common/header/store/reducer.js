import * as constants from './constants';
import { fromJS } from 'immutable'
// imutable.js可以生产immutable对象 只要某一变量变为 imutable对象 就不可被修改
const defaultState = fromJS({
		focused: false,
		mouseIn: false,
		list: [],
		page: 1,
		totalPage:1
});

export default (state = defaultState, action)=>{
	//immutable对象的set方法，会结合之前immutable对象的值和设置的值 返回一个新的对象
	switch(action.type) {
		case constants.SEARCH_FOCUS :
			return state.set('focused',true);
		case constants.SEARCH_BLUR :
			return state.set('focused',false);
		case constants.CHANGE_LIST :
			// return state.set('list',action.data).set('totalPage',action.totalPage);
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			})
		case constants.SEARCH_INFO_MOUSEIN:
			return state.set('mouseIn',true);
		case constants.SEARCH_INFO_MOUSEOUT:
			return state.set('mouseIn',false);
		case constants.CHANGE_SEARCHINFO_PAGE:
			return state.set('page',action.page);		
		default:
			return state;
	}
}