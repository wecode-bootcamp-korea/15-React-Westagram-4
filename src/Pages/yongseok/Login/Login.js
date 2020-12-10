import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';
import '../Common.scss';
import '../reset.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailValidateText: '',
      passwordValidateText: '',
      activate: false,
      buttonActive: true,
    };

    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  componentDidMount() {
    document.title = 'Ys Login';
  }

  handleEmailValidate = () => {
    const email = this.emailRef.current.value;
    const regExp = /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{2,5}$/;
    if (regExp.test(email)) {
      this.setState({ email, emailValidateText: '' });
      this.state.password &&
        this.setState({ activate: true, buttonActive: false });
    } else if (!email) {
      return this.setState({
        email,
        emailValidateText: 'email을 입력해주세요😊',
        activate: false,
        buttonActive: true,
      });
    } else {
      return this.setState({
        email,
        emailValidateText: '유효하지 않은 email 입니다😭',
        activate: false,
        buttonActive: true,
      });
    }
  };

  handlePasswordValidate = () => {
    const password = this.passwordRef.current.value;
    const regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    if (regExp.test(password)) {
      this.setState({ password, passwordValidateText: '' });
      this.state.email &&
        this.setState({ activate: true, buttonActive: false });
    } else if (password.length === 0) {
      return this.setState({
        password,
        passwordValidateText: 'password를 입력해주세요😊',
        activate: false,
        buttonActive: true,
      });
    } else {
      return this.setState({
        password,
        passwordValidateText:
          '숫자, 영문, 특수문자 각 1자리 이상이면서 8자에서 16자 사이여야 합니다😭',
        activate: false,
        buttonActive: true,
      });
    }
  };

  render() {
    const {
      emailValidateText,
      passwordValidateText,
      activate,
      buttonActive,
    } = this.state;

    return (
      <div className="Login">
        <img src="/images/yongseok/logo.png" alt="logo" className="logo" />
        <input
          type="text"
          placeholder="이메일"
          ref={this.emailRef}
          onKeyUp={this.handleEmailValidate}
        />
        <input
          type="password"
          placeholder="비밀번호"
          ref={this.passwordRef}
          onKeyUp={this.handlePasswordValidate}
        />
        <button
          disabled={buttonActive}
          className={activate ? 'active' : ''}
          onClick={() => {
            this.props.history.push('/mainYong');
          }}
        >
          로그인
        </button>
        <span>{emailValidateText}</span>
        <span>{passwordValidateText}</span>
        <span className="find__password">비밀번호를 잊으셨나요?</span>
      </div>
    );
  }
}

export default withRouter(Login);
