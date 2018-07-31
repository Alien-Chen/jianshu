import React, { PureComponent } from 'react';//component 和 pureComponent的区别是pureComponent 底层实现了shouldComponentUpdate（）
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store'
import { connect } from 'react-redux';
import { 
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop 
} from './style'
class Home extends PureComponent {

	handleScrollTop() {
		window.scrollTo(0,0)
	}
	render(){
		return(
			<HomeWrapper>
				<HomeLeft>
					<img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4348/7c6c4340ce1eb2aa20bba2c5542a2113d33f63c5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"/>
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				{this.props.showScroll? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null}
				
			</HomeWrapper>
		)
	}

	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}

	bindEvents(){
		window.addEventListener('scroll',this.props.changeScrollTopShow)
	}
}
const mapState = (state) => {
	return {
		showScroll: state.getIn(['home','showScroll'])
	}
}
const mapDispatch = (dispatch)=>{
	return{
		changeHomeData(){
			dispatch(actionCreators.changeHomeData())
		},
		changeScrollTopShow(){
			if(document.documentElement.scrollTop > 400) {
				dispatch(actionCreators.toggleTopShow(true))
			}else{
				dispatch(actionCreators.toggleTopShow(false))
			}
		}
	}
}
export default connect(mapState,mapDispatch)(Home);