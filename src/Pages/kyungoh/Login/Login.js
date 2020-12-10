import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';



class LoginOh extends React.Component{

    constructor(){
        super();
        this.state = {
            id: "", //어떤 타입의 값을 받을지 명시
            password: "",
            hidePw: true,
        };
    }

   handleChange = (e) => {
        const {id, value} = e.target;
        this.setState({
            [id]: value,
        })
   }

   showPw = (e) =>{
        this.setState({
            hidePw: !this.state.hidePw,
        });
   }

   goToMain = ()=>{
       const {id, password} = this.state;
       const checkId = id.includes("@");
       const checkPw = password.length>=4;
       if(checkId&&checkPw){
        this.props.history.push('/main');
       }
       if(!checkId){
           alert("아이디에 @를 포함해주세요");
       }
       if(!checkPw){
           alert("비밀번호는 4자리 이상으로")
       }
   }
    render(){
        const {id, password, hidePw} = this.state;
        const activateBtn=(id.length&&password.length>0);
        return(
            <div className="Login">
                <header><strong>Westagram</strong></header>
                    <div className="boxes">
                    <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" className="id" value={id} onChange={this.handleChange}/>
                    <input type={this.state.hidePw ? "password":"text"} placeholder="비밀번호" id="password" value={password} onChange={this.handleChange}/>
                    <span className="hidePw" onClick={this.showPw}>{hidePw ? "show" : "hide"}</span>
                    <button className={activateBtn ? "activate" : ""} onClick={this.goToMain} >로그인</button>
                </div>
                <span className="forgotpw">비밀번호를 잊으셨나요?</span>
             </div>
        )
    }
}

export default withRouter(Login);