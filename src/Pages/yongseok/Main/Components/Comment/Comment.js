import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  constructor() {
    super();
    this.liRef = React.createRef();
  }

  componentDidMount() {
    this.liRef.current.scrollIntoView();
  }

  handleDeleteComment = () => {
    this.props.onDeleteComment(this.props.comment);
  };

  handleLikeBtn = () => {
    this.props.onLikeBtn(this.props.comment);
  };

  render() {
    const { like, text } = this.props.comment;
    const commentLikeBtn = 'comment__likeBtn';
    return (
      <li className="comment__row" ref={this.liRef}>
        <div className="comment">
          <div className="comment__left">
            <strong className="comment__id">ys </strong>
            {text}
          </div>
          <div className="comment__right">
            <button
              className={like ? `${commentLikeBtn} like__icon` : commentLikeBtn}
              onClick={this.handleLikeBtn}
            >
              <i className="fas fa-heart icon"></i>
            </button>
            <button
              className="comment__deleteBtn"
              onClick={this.handleDeleteComment}
            >
              <i className="far fa-trash-alt icon delete__icon"></i>
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default Comment;
