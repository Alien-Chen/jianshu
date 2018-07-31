import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`

export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
    .banner-img {
        width: 626px;
        height: 270px;
    }
`
export const HomeRight = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 280px;
    float: right;
`

export const TopicWrapper = styled.div`
    overflow:hidden;
		padding: 20px 0 10px 0;
		margin-left: -17px;
		border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
		float: left;
		height: 32px;
		line-height: 32px;
		margin-left: 18px;
		margin-top: 10px;
		background: #f7f7f7;
		font-size: 14px;
		border: 1px solid #dcdcdc;
		border-radius: 4px;
    .topic-pic {
			float: left;
			width: 32px;
			height: 32px;
		}
		.topic-name {
			padding: 0 10px 0 10px;
		}
`
export const MoreTopicItem = styled.a`
		float: left;
		height: 32px;
		margin-top: 10px;
		margin-left: 18px;
		line-height: 32px;
		font-size: 14px;
    color: #787878;
`

export const ListItem = styled.div`
		padding: 20px 0;
		overflow: hidden;
		border-bottom: 1px solid #dcdcdc;
		.pic {
			display: block;
			width: 125px;
			height: 100px;
			float: right;
		}
`

export const ListInfo = styled.div`
		width: 500px;
		float: left;
		.item-title {
			line-height: 27px;
			font-size : 18px;
			font-weight: bold;
			color: #333;
		}
		.item-desc {
			font-size: 13px;
			line-height: 24px;
			color: #999;
		}
`

export const RecommendWrapper = styled.div`
	margin-top: -4px;
	padding-bottom: 4px;
	min-height: 228px;
`
export const RecommendItem = styled.a`
	display: inline-block;
	cursor: pointer;
	.recommend-pic {
		width: 280px;
	}
`
export const WriterWrapper = styled.div`
	width: 280px;
	overflow: hidden;
	margin-bottom: 20px;
	margin-top: 30px;
	padding-top: 0;
	font-size: 13px;
`
export const WriterHeader = styled.div`
	overflow: hidden;
	font-size: 14px;
	color: #969696;
	h3 {
		float: left;
	}
`
export const WriterSwitch = styled.a`
	float: right;
`
export const WriterItem = styled.div`
	overflow: hidden;
	margin-top: 15px;
	line-height: 20px;
	.writer-item-pic {
		float: left;
		margin-right: 10px;
		width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 50%;
	}
	.writer-item-title {
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
	}
	.writer-item-desc{
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
	}
	.follow {
		float: right;
		margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
	}
`

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	margin: 30px 0px
	line-height: 40px;
	background: #a5a5a5;
	text-align: center;
	border-radius: 20px;
	color: #fff;
` 

export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	font-size: 14px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;

`