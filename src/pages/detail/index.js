import React, { Component } from 'react';
import {
	DetailWrapper,
	Header,
	Content
} from './style';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreaters } from './store'
class Detail extends Component {

	render() {
		const { title, content } = this.props;
		return (
			<DetailWrapper>
				<Header>{title}</Header>
				<Content dangerouslySetInnerHTML={{__html:content}}/>
			</DetailWrapper>
		)
	}

	componentDidMount(){
		//由于使用了异步组件 this.props.match.params.id 指向的是loadable组件的match 所以这样使用页面会报错，所以换成 react-router-dom中的withRouter
		this.props.getDetail(this.props.match.params.id);
	}
}
const mapState = (state)=>({
	title: state.getIn(['detail','title']),
	content: state.getIn(['detail','content'])
});
const mapDispatch = (dispatch) => ({
	getDetail(id){
		dispatch(actionCreaters.getDetail(id))
	}
});
export default connect(mapState,mapDispatch)(withRouter(Detail));