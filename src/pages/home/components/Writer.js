import React, { PureComponent } from 'react';
import {
	WriterWrapper,
	WriterHeader,
	WriterSwitch,
	WriterItem
 } from '../style'
class Writer extends PureComponent {
	render() {
		return (
			<WriterWrapper>
				<WriterHeader>
					<h3>作者推荐</h3>
					<WriterSwitch>
						<i className="iconfont">&#xe851;</i>
						换一批
					</WriterSwitch>
				</WriterHeader>
				<WriterItem>
					<img className="writer-item-pic" alt="" src="//upload.jianshu.io/users/upload_avatars/1835526/9bc600ce-7672-42b8-b03b-1a779593dd45.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" />
					<a className="follow">+关注</a>
					<a className="writer-item-title">简书版权</a>
					<p className="writer-item-desc">写了457.7k字 · 34.3k喜欢</p>
				</WriterItem>
			</WriterWrapper>
		)
	}
}

export default Writer;