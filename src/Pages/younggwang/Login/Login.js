import "./Login.scss";
import React, { Component } from "react";

class Login extends Component {
  state = {
    userId: "",
    userPw: "",
    idCheck: false,
    pwCheck: false,
    btnColor: "#ccdefc",
    setId: "rladudrhkd@naver.com",
    setPw: "123456789",
  };

  getIdValue = (e) => {
    this.setState({ userId: e.target.value });
    if (e.target.value.includes("@")) {
      this.setState({ idCheck: true }, () => {
        this.btnChange();
      });
    } else {
      this.setState({ idCheck: false }, () => {
        this.btnChange();
      });
    }
  };

  getPwValue = (e) => {
    this.setState({ userPw: e.target.value });
    if (e.target.value.length >= 5) {
      this.setState({ pwCheck: true }, () => this.btnChange());
    } else {
      this.setState({ pwCheck: false }, () => this.btnChange());
    }
  };

  btnChange = () => {
    const {pwCheck,idCheck} = this.state;
    this.setState({btnColor : pwCheck && idCheck ? "#2d58da" :"#ccdefc" })
  };

  goToMain = () => {
    const {userId, userPw, setId, setPw} = this.state;
    if (
      userId === setId &&
      userPw === setPw
    ) {
      this.props.history.push("/main"); // 내가 이동하고 싶은 path의 경로
    } else if (this.state.userId !== this.state.setId) {
      alert("아이디가 틀렸습니다.");
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };  

  render() {
    return (
      <>
        <header className="LoginHeader">
          <h1>Westagram</h1>
        </header>
        <section>
          <input
            name="idInput"
            type="text"
            className="loginEmail"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.getIdValue}
          ></input>
          <input
            name="pwInput"
            type="password"
            className="loginPw"
            placeholder="비밀번호"
            onChange={this.getPwValue}
          ></input>
          <button
            className="logBtn"
            onClick={this.goToMain}
            style={{ backgroundColor: this.state.btnColor }}
          >
            로그인
          </button>
        </section>
        <footer>
          <a className="LoginPwSearch" href="/">
            비밀번호를 잊으셨나요?
          </a>
        </footer>
      </>
    );
  }
}

export default Login;
