import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
	RecommendWrapper,
	RecommendItem
} from '../style'
class Recommend extends PureComponent {
	render() {
		const { recommendList } = this.props;
		return (
			<RecommendWrapper>
				{
					recommendList.map((item)=>{
						return (
							<RecommendItem key={item.get('id')}>
								<img className="recommend-pic" src={item.get('src')} alt=""/>
							</RecommendItem>
						)
					})
				}
			</RecommendWrapper>
		)
	}
}
const mapState = (state) => {
	return {
		recommendList: state.getIn(['home','recommendList'])
	}
}
export default connect(mapState,null)(Recommend);