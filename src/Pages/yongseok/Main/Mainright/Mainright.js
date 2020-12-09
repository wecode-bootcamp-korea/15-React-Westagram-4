import React, { Component } from 'react';
import './Mainright.scss';

class Mainright extends Component {
  render() {
    return (
      <div className="Mainright">
        <header className="header-card">
          <img
            src="/images/yongseok/store.png"
            alt="store"
            className="header-card__img"
          />
          <div>
            <div className="header-card__title">WePet</div>
            <div className="header-card__title-detail">WePet | 위펫</div>
          </div>
        </header>
        <section className="story">
          <header className="story__header">
            <div className="story__header__title">스토리</div>
            <div className="story__header__menu">모두 보기</div>
          </header>
          <ul className="story__user-cards">
            <li className="story__user-card">
              <img
                src="/images/yongseok/sheep.jpg"
                alt="avatar"
                className="story__user-card__img"
              />
              <div>
                <div className="story__user">sheep</div>
                <div className="story__user-time">2분 전</div>
              </div>
            </li>
            <li className="story__user-card">
              <img
                src="/images/yongseok/tiger.jpg"
                alt="avatar"
                className="story__user-card__img"
              />
              <div>
                <div className="story__user">tiger</div>
                <div className="story__user-time">16분 전</div>
              </div>
            </li>
            <li className="story__user-card">
              <img
                src="/images/yongseok/deer.jpg"
                alt="avatar"
                className="story__user-card__img"
              />
              <div>
                <div className="story__user">deer</div>
                <div className="story__user-time">4분 전</div>
              </div>
            </li>
            <li className="story__user-card">
              <img
                src="/images/yongseok/bird.jpg"
                alt="avatar"
                className="story__user-card__img"
              />
              <div>
                <div className="story__user">bird</div>
                <div className="story__user-time">2분 전</div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Mainright;
