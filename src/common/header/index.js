import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreater }  from './store';
import { actionCreaters as loginActionCreators }  from '../../pages/login/store'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList
} from './style';
import { Link } from 'react-router-dom';
class Header extends Component {
	getListArea = (show)=>{
		const { list, page, handleSearchInfoMouseIn, handleSearchInfoMouseOut, mouseIn, handleChangePage, totalPage } = this.props;
		const jsList = list.toJS();
		const pageList = [];
		if(jsList.length){
			for(let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>
				)
			}
		}
		if(show || mouseIn){
			return(
				<SearchInfo 
					onMouseEnter={handleSearchInfoMouseIn}
					onMouseLeave={handleSearchInfoMouseOut}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={()=>{handleChangePage(page,totalPage,this.spinIcon)}}>
							<i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
								换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		}else {
			return null
		}
	}
	render(){
		const { focused, handleInputBlur, handleInputFocus, list, login, logOut } = this.props;
		return(
			<HeaderWrapper>
				<Link to="/"><Logo ></Logo></Link>
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					<NavItem className = 'right'>
						<i className="iconfont zoom">&#xe636;</i>
					</NavItem>
					{ login ? 
						<NavItem onClick={logOut} className = 'right'>退出</NavItem>: 
						<Link to="/login"><NavItem className = 'right'>登录</NavItem></Link> 
					}
					
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'focused': '' }
								onFocus={()=>{handleInputFocus(list)}}
								onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i
							className={focused ? 'focused iconfont zoom': 'iconfont zoom' }
						>&#xe614;</i>
						{this.getListArea(focused)}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to="/write">
						<Button className="writting">
							<i className="iconfont zoom">&#xe670;</i>
							写文章
						</Button>
					</Link>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}

}

const mapStateToProps = (state)=> {
	return {
		focused:state.getIn(['header','focused']),//当装换成immutable对象后需要要get方法取值
		list:state.getIn(['header','list']),
		page:state.getIn(['header','page']),
		totalPage:state.getIn(['header','totalPage']),
		mouseIn:state.getIn(['header','mouseIn']),
		login: state.getIn(['login','login'])
	}
}
const mapDisPathToProps = (dispatch) =>{
	return {
		handleInputFocus(list){
			const action = actionCreater.searchFocus();
			dispatch(action);
			if(!list.size){
				dispatch(actionCreater.getList());
			}
		},
		handleInputBlur(){
			const action = actionCreater.searchBlur();
			dispatch(action);
		},
		handleSearchInfoMouseIn(){
			dispatch(actionCreater.searchInfoMouseIn());
		},
		handleSearchInfoMouseOut(){
			dispatch(actionCreater.searchInfoMouseOut());
		},
		handleChangePage(page,total,spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if(originAngle){
				originAngle = parseInt(originAngle, 10)
			}else{
				originAngle = 0;
			}
			spin.style.transform = `rotate(${originAngle+360}deg)`;
			if(page < total) {
				dispatch(actionCreater.ChangeSearchInfoPage(page+1))
			}else{
				dispatch(actionCreater.ChangeSearchInfoPage(1))
			}
		},
		logOut(){
			dispatch(loginActionCreators.loginOut())
		}
	}
}
export default connect(mapStateToProps,mapDisPathToProps)(Header);