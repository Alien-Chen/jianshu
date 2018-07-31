import styled from 'styled-components';

export const LoginWrapper = styled.div`
	z-index: 0;
	position: absolute;
	left: 0;
	right: 0;
	top: 56px;
	bottom: 0px;
	background: #eee;
`

export const LoginBox = styled.div`
	width: 400px;
	margin: 60px auto 0;
	padding: 50px 50px 30px;
	box-sizing: border-box;
	margin: 80px auto;
	background: #fff;
	box-shadow: 0 0 8px rgba(0,0,0,.1);
`
export const LoginTitle = styled.h3`
	margin: 0 auto 50px;
	padding: 10px;
	font-weight: 400;
	color: #969696;
	text-align: center;
	a {
		text-decoration : none ;
    padding: 10px;
		color: #969696;
		&.link {
			font-weight: 700;
    	color: #ea6f5a;
    	border-bottom: 2px solid #ea6f5a;
		}
	}
	b {
		padding: 10px;
		font-weight: 700;
	}
`
export const Input = styled.input`
	display: block;
	width: 100%;
	height: 50px;
	margin-bottom: 0;
	padding: 4px 12px 4px 35px;
	border: 1px solid #c8c8c8;
	border-radius: 0 0 4px 4px;
	box-sizing: border-box;
	background-color: hsla(0,0%,71%,.1);
	vertical-align: middle;
	&.restyle-input {
    border-bottom: none;
    border-radius: 4px 4px 0 0;
	}
`

export const Button = styled.div`
	margin-top: 100px;
	width: 100%;
	padding: 12px 18px;
	font-size: 18px;
	border: none;
	border-radius: 25px;
	color: #fff;
	background: #3194d0;
	cursor: pointer;
	outline: none;
	display: block;
	clear: both;
	box-sizing: border-box;
	text-align: center;
`