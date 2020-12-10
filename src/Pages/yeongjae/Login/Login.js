/* eslint-disable */
import React, { Component } from 'react';
import {Link} from "react-router-dom"
import './Login.scss';

class Login extends React.Component{
	constructor(){
		super();
		this.state = {
			id:"",
			password:"",
			hiddenPW:true,
		};
	}

	handleIdChange = (e) => {
		this.setState({ id:e.target.value });
	};

	handlePasswordChange=(e) => {
		this.setState({ password: e.target.value });
	};
	
	checkValidation = (e) => {
		e.preventDefault();
		const { id, password } = this.state;
		if(id.includes ("@") && password.length >= 4){
			this.props.history.push("/main");
		}
		if(!id.includes("@")){
			alert("id는 @ 필요합니다");
		}
		if(!password.length >= 4){
			alert("비밀번호는 4자리 이상");
		}
	}

  render(){
		const isButtonActive = (this.state.id.length && this.state.password.length)
		return(
				<div className="super_log_main">
					<div className="header_log">westagram</div>
					<div className="main_log_page">
						<div className="log_te_id">
							<input 
								id="id" 
								type="text" 
								placeholder="&nbsp;&nbsp;&nbsp;전화번호,사용자 이름 또는 이메일" 
								onChange={this.handleIdChange}
							/>				  
						</div>
						<div className="log_te_pw">
							<input 
								id="password" 
								type="password"
								placeholder="&nbsp;&nbsp;&nbsp;비밀번호" 
								onChange={this.handlePasswordChange}
							/>  
						</div>
					
						<div className="log_page_main_btn">
							<Link to="/main">	
								<button 
									className="main_page_btn"  
									type="button" 
									id="btn"
									style={{
										backgroundColor: isButtonActive ? "#045cb5" : "#9ebbe6"
									}}
									onClick={this.checkValidation}
									>로그인</button>
							</Link>
						</div>
						</div>
						<div className="log_page_footer">비밀번호를 잊으셨나요?</div>
			</div>
	)
}
}
export default Login;