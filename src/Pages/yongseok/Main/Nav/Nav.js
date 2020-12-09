import React, { Component } from 'react';
import ProfileModal from '../Components/ProfileModal/ProfileModal';
import SearchModal from '../Components/SearchModal/SearchModal';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      filterData: [],
      searchModalShowing: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          dummyData: res.data,
        });
      });
  }

  handleFindSearchId = e => {
    const matchValue = this.state.dummyData.filter(x => {
      if (e.target.value === '') {
        this.setState({ searchModalShowing: false });
      } else {
        return x.id.indexOf(e.target.value) !== -1;
      }
    });
    this.setState({ filterData: matchValue });
    if (matchValue.length !== 0) {
      this.setState({ searchModalShowing: true });
    } else if (e.target.value === '') {
      this.setState({ searchModalShowing: false });
    } else {
      const notFound = [{ id: null, description: '값이 없습니다!' }];
      this.setState({ searchModalShowing: true });
      this.setState({ filterData: notFound });
    }
  };

  render() {
    return (
      <nav className="Nav">
        <div className="left">
          <div className="left__iconbox">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
              alt="icon"
              className="left__icon"
            />
          </div>
          <img
            src="/images/yongseok/logo.png"
            alt="logo"
            className="left__logo"
          />
        </div>
        <div className="search__img__nav__input__wrapping">
          <img
            src="/images/yongseok/search.png"
            alt="search"
            className="search__img"
          />
          <input
            type="text"
            placeholder="검색"
            className="nav__input"
            onChange={this.handleFindSearchId}
          />
          <ul
            className={
              this.state.searchModalShowing
                ? 'search__modal__box showing'
                : 'search__modal__box'
            }
          >
            {this.state.filterData.map(item => {
              return <SearchModal key={item.id} item={item} />;
            })}
          </ul>
        </div>
        <div className="right">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="explore"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="heart"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="profile"
            className="profile__icon"
            onClick={this.props.handleModalToggle}
          />
          <ProfileModal
            modalState={this.props.modalState}
            handleModalDelete={this.props.handleModalDelete}
          />
        </div>
      </nav>
    );
  }
}

export default Nav;
