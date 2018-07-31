import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
	ListItem,
	ListInfo,
	LoadMore
} from '../style';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store'
class List extends PureComponent {
	render() {
		const { articleList, getMoreList, page } = this.props;
		return (
			<div>
				{
					articleList.map((item,index) => {
						return (
							<Link to={'/detail/' + item.get('id') } key={index}>	
								<ListItem >
										<img className="pic" src={item.get('src')} alt=""/>
									<ListInfo>
										<h3 className="item-title">{item.get('title')} </h3>
										<p className="item-desc">{item.get('desc')} </p>
									</ListInfo>
								</ListItem>
							</Link>
						)
					})
				}
				<LoadMore onClick={ ()=>{getMoreList(page)} }>阅读更多</LoadMore>
			</div>
			
		)
	}
}
const mapState = (state)=>{
	return {
		articleList: state.getIn(['home','articleList']),
		page: state.getIn(['home','articlePage'])
	}
}
const mapDispatch = (dispatch)=>({
	getMoreList(page){
		dispatch(actionCreators.getMoreList(page))
	}
});
export default connect(mapState,mapDispatch)(List);