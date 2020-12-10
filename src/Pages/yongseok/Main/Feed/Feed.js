import React, { Component } from 'react';
import Comment from '../Components/Comment/Comment';
import './Feed.scss';

let NUM = 10;

class Feed extends Component {
  constructor() {
    super();
    this.state = { comments: [] };
    this.inputRef = React.createRef();
  }

  handleAddComment = e => {
    const value = this.inputRef.current.value;
    if (value !== '') {
      if (e.key === 'Enter' || e.target.className === 'comment__button') {
        const comments = [
          ...this.state.comments,
          { id: `${Date.now()}${value}`, text: value, like: false },
        ];
        this.setState({ comments });
        this.inputRef.current.value = '';
      }
    }
  };

  handleDeleteComment = comment => {
    const comments = this.state.comments.filter(item => comment.id !== item.id);
    this.setState({ comments });
  };

  handleLikeBtn = comment => {
    const comments = this.state.comments.map(item => {
      if (comment.id === item.id) {
        return { ...comment, like: !comment.like };
      }
      return item;
    });
    this.setState({ comments });
  };

  likeCount = () => {
    const like = this.state.comments.filter(item => {
      return item.like === true;
    });
    return NUM + like.length;
  };

  render() {
    return (
      <article className="Article">
        <header className="header">
          <div className="header__wrapping">
            <img
              alt="avatar"
              src="/images/yongseok/avatar.jpeg"
              className="header__avatar"
            />
            <span>ys</span>
          </div>
          <img
            alt="more"
            src="/images/yongseok/more.png"
            className="header__more"
          />
        </header>
        <img
          alt="cat"
          src="/images/yongseok/the_cat.jpeg"
          className="feed__img"
        />
        <section>
          <div className="content__icons">
            <div className="left">
              <img alt="heart" src="/images/yongseok/heart.png" />
              <img
                alt="speech-bubble"
                src="/images/yongseok/speech-bubble.png"
              />
              <img alt="export" src="/images/yongseok/export.png" />
            </div>
            <div className="right">
              <img alt="bookmark" src="/images/yongseok/bookmark.png" />
            </div>
          </div>
          <div className="content__like-number">
            <img
              alt="avatar"
              src="/images/yongseok/avatar.jpeg"
              className="content__like-number__avatar"
            />
            <p className="content__like-number__text">
              ys 님 외 {this.likeCount()}명이 좋아합니다
            </p>
          </div>
        </section>
        <ul className="comments">
          <li className="comment__row">
            <div className="comment">
              <div className="comment__left">
                <strong className="comment__id">zoo0190 </strong>
                cute
              </div>
            </div>
          </li>
          {this.state.comments.map(comment => {
            return (
              <Comment
                key={comment.id}
                comment={comment}
                onDeleteComment={this.handleDeleteComment}
                onLikeBtn={this.handleLikeBtn}
              />
            );
          })}
        </ul>
        <div className="comment__wrapping">
          <input
            type="text"
            placeholder="댓글달기..."
            className="comment__input"
            onKeyPress={this.handleAddComment}
            ref={this.inputRef}
          />
          <button className="comment__button" onClick={this.handleAddComment}>
            게시
          </button>
        </div>
      </article>
    );
  }
}

export default Feed;
