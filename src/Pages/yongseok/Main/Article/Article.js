import React, { Component } from 'react';
import Comment from '../Components/Comment/Comment';
import './Article.scss';

let NUM = 10;

class Article extends Component {
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
          { id: Date.now(), text: value, like: false },
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
              src="/images/avatar.jpeg"
              alt="avatar"
              className="header__avatar"
            />
            <span>ys</span>
          </div>
          <img src="/images/more.png" alt="more" className="header__more" />
        </header>
        <img src="/images/the_cat.jpeg" alt="cat" className="feed__img" />
        <section>
          <div className="content__icons">
            <div className="content__icons__left">
              <img
                src="/images/heart.png"
                alt="heart"
                className="content__icon"
              />
              <img
                src="/images/speech-bubble.png"
                alt="speech-bubble"
                className="content__icon"
              />
              <img
                src="/images/export.png"
                alt="export"
                className="content__icon"
              />
            </div>
            <div className="content__icons__right">
              <img
                src="/images/bookmark.png"
                alt="bookmark"
                className="content__icon"
              />
            </div>
          </div>
          <div className="content__like-number">
            <img
              src="/images/avatar.jpeg"
              alt="avatar"
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

export default Article;
