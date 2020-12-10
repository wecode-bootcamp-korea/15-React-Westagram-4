import React, { Component } from 'react';
import './StoryCard.scss';

class StoryCard extends Component {
  render() {
    const { user, time, src } = this.props.storyCard;
    return (
      <li className="story__user-card">
        <img alt={user} src={src} className="story__user-card__img" />
        <div>
          <div className="story__user">{user}</div>
          <div className="story__user-time">{time}</div>
        </div>
      </li>
    );
  }
}

export default StoryCard;
