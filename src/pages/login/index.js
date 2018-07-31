import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { actionCreaters } from './store';
import { 
		LoginWrapper,
		LoginBox,
		Input,
		Button,
		LoginTitle
} from './style';
import { actionCreaters } from './store'
class Login extends PureComponent {
	render() {
		const { login, loginValue } = this.props;
		if(!loginValue) {
			return (
				<LoginWrapper>
					<LoginBox>
						<LoginTitle>
							<a className="link" href="###">登录</a>
							<b>.</b>
							<a href="###">注册</a>
						</LoginTitle>
						<Input placeholder="账号" 
							className="restyle-input" 
							innerRef={(input) => {this.account = input}} />
						<Input placeholder="密码" 
							type="password" 
							innerRef={(input) => {this.password = input}}/>
						<Button onClick={()=>login(this.account,this.password)}>登录</Button>
					</LoginBox>
				</LoginWrapper>
			)
		}else {
			return <Redirect to="/"/>
		}
		
	}
}
//在样式组件中使用ref 回去到的是 stylecomponent  这时候是没办法和使用正常dom一样的，所以这个时候使用innerRef
const mapState = (state)=>({
	loginValue: state.getIn(['login','login'])
})
const mapDispatch = (dispatch) => ({
	login(account,password){
		dispatch(actionCreaters.login(account,password));
	}
})
export default connect(mapState,mapDispatch)(Login);