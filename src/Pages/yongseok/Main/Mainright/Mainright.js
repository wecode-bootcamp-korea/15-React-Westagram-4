import React, { Component } from 'react';
import StoryCard from '../Components/StoryCard/StoryCard';
import './Mainright.scss';

class Mainright extends Component {
  constructor() {
    super();
    this.state = {
      storyCard: [
        { user: 'sheep', time: '2분 전', src: '/images/yongseok/sheep.jpg' },
        { user: 'tiger', time: '16분 전', src: '/images/yongseok/tiger.jpg' },
        { user: 'deer', time: '4분 전', src: '/images/yongseok/deer.jpg' },
        { user: 'bird', time: '2분 전', src: '/images/yongseok/bird.jpg' },
      ],
    };
  }

  render() {
    const storyCard = this.state.storyCard;
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
            {storyCard.map(item => {
              return <StoryCard key={item.user} storyCard={item} />;
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default Mainright;
