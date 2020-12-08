import "./Login.scss";
import React, { Component } from "react";

class Login extends Component {
  state = {
    userId: "",
    userPw: "",
    idValue: false,
    pwValue: false,
    btnColor: "#ccdefc",
    setId: "rladudrhkd@naver.com",
    setPw: "123456789",
  };

  getIdValue = (e) => {
    this.setState({ userId: e.target.value });
    if (e.target.value.includes("@")) {
      this.setState({ idValue: true }, () => {
        this.btnChange();
      });
    } else {
      this.setState({ idValue: false }, () => {
        this.btnChange();
      });
    }
  };

  getPwValue = (e) => {
    this.setState({ userPw: e.target.value });
    if (e.target.value.length >= 5) {
      this.setState({ pwValue: true }, () => this.btnChange());
    } else {
      this.setState({ pwValue: false }, () => this.btnChange());
    }
  };

  btnChange = () => {
    if (this.state.pwValue && this.state.idValue) {
      this.setState({ btnColor: "#2d58da" });
    } else {
      this.setState({ btnColor: "#ccdefc" });
    }
  };

  goToMain = () => {
    if (
      this.state.userId === this.state.setId &&
      this.state.userPw === this.state.setPw
    ) {
      this.props.history.push("/main"); // 내가 이동하고 싶은 path의 경로
    } else if (this.state.userId !== this.state.setId) {
      alert("아이디가 틀렸습니다.");
    } else {
      alert("비밀번호가 틀렸습니다.");
      console.log(this.state.userId, this.state.userPw);
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
            id="loginEmail"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.getIdValue}
          ></input>
          <input
            name="pwInput"
            type="password"
            id="loginPw"
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
