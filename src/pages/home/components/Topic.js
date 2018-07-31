import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
	TopicWrapper,
	TopicItem,
	MoreTopicItem
 } from '../style';
class Topic extends PureComponent {
	render() {
		const { topicList } = this.props;
		return (
			<TopicWrapper>
				{
					topicList.map((item)=>{
						return (
							<TopicItem key={item.get('id')}>
								<img 
									className="topic-pic"
									alt={item.get('id')}
									src={item.get('src')}
								/>
								<span key={item.get('id')} className="topic-name">{item.get('title')}</span>
							</TopicItem>
						)
					})
				}
				<MoreTopicItem> 更多热门专题 ></MoreTopicItem>
			</TopicWrapper>
		)
	}
}
const mapStateToProps = (state)=>{
	return {
		topicList: state.getIn(['home','topicList'])
	}
}
// const mapDisPathToProps = (dispatch)=>{

// }
export default connect(mapStateToProps,null)(Topic);
// export default Topic;