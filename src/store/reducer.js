import { combineReducers } from 'redux-immutable';//组合其他模块的reducer  用redux-immutable的方法返回的就是immutable对象
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';
const reducer = combineReducers({
    header:headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})

export default reducer;