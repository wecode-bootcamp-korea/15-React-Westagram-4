import "./Main.scss";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      comments : ""
    };
  }
  
  getComment = (e) => {
    this.setState({ comments: e.target.value });
  };

  addComment = (e) => {
    e.preventDefault();
    const { commentList, comments} = this.state;
    this.setState({ 
      commentList:[
        ...commentList,
        {
          id: commentList.length+1,
          userName : 'user',
          comments : comments,
          isLike: false
        }
      ] , comments: "" });
  };
  
  onRemove = (id) => {
    this.setState({
      commentList : 
      this.state.commentList.filter
      ((comment)=> comment.id !== id)
    })
  };


  render() {
    console.log(this.state.commentList.id)

    return (
      <>
        <header className="navHeader">
          <nav className="nav_bar">
            <div className="nav_container">
              <div className="nav_left">
                <div className="nav_icon">
                  <img
                    src="../images/younggwang/logo.png"
                    alt="main_logo"
                    className="nav_logo"
                  />
                </div>
                <div className="nav_titile">Westagram</div>
              </div>
              <div className="nav_center">
                <img src="../images/younggwang/search.png" alt="search" id="search" />
                <input type="text" placeholder="검색" className="search_bar" />
              </div>
              <div className="nav_right">
                <div className="nav_right_imgs">
                  <img
                    src="../images/younggwang/explore.png"
                    alt="explore"
                    className="nav_right_img"
                  />
                  <img
                    src="../images/younggwang/heart.png"
                    alt="like"
                    className="nav_right_img"
                  />
                  <img
                    src="../images/younggwang/profile.png"
                    alt="myprofile"
                    className="nav_right_img"
                  />
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <div className="main_left">
            <div className="story_container">
              <div className="story">
                <div className="story_picture">
                  <img
                    src="../images/younggwang/pangsu.jpg"
                    alt="story-img"
                    className="story_img"
                  />
                </div>
                <div className="story_name">pengsoo</div>
              </div>
              <div className="story">
                <div className="story_picture">
                  <img
                    src="../images/younggwang/pangsu.jpg"
                    alt="story-img"
                    className="story_img"
                  />
                </div>
                <div className="story_name">pengsoo</div>
              </div>
            </div>
            <article>
              <div className="header_container">
                <div className="feed_header">
                  <div className="header_left">
                    <div className="feed_header_imgs">
                      <img
                        src="../images/younggwang/face.jpeg"
                        alt="my-img"
                        className="feed_header_img"
                      />
                    </div>
                    <p className="feed_header_name">pengsoo</p>
                  </div>
                  <div className="header_right">
                    <div className="addIcon">
                      <FontAwesomeIcon className="far" icon={faEllipsisV} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="feed_fictures">
                <img
                  src="../images/younggwang/pang.jpeg"
                  alt="feed-ficture"
                  className="feed_ficture"
                />
              </div>
              <div className="feed_icons">
                <div className="feed_ions_left">
                  <div>
                    <img src="../images/younggwang/heart.png" alt="likeBtn" className="like" />
                  </div>
                  <div>
                    <img
                      src="../images/younggwang/speechbubble.png"
                      alt="comment-btn"
                      className="content"
                    />
                  </div>
                  <div>
                    <img
                      src="../images/younggwang/direct.png"
                      alt="direct-btn"
                      className="comment"
                    />
                  </div>
                </div>
                <div className="feed_icons_right">
                  <FontAwesomeIcon className="far" icon={faBookmark} />
                </div>
              </div>
              <dlv className="likeNum">
                <button className="likeNum_btn">좋아요 111,111개</button>
              </dlv>
              <div className="feed_comments">
                <ul className="feed_contents">
                
                  {this.state.commentList.map((el) => {
                    return(
                    <li>
                      {el.comments}
                      <span onClick={()=>this.onRemove(el.id)}>x</span>
                    </li>
                    )})}
                </ul>
              </div>
              <div className="add_comment">
                <form className="add-form" onSubmit={this.addComment}>
                  <input
                    type="text"
                    placeholder="댓글 달기..."
                    className="add_input"
                    onChange={this.getComment}
                    value={this.state.comments}
                  />
                  <div className="add-btn">
                    <button className="add">게시</button>
                  </div>
                </form>
              </div>
            </article>
          </div>
          <div className="main_right">
            <div className="main_right_avator_container">
              <div className="main_right_avator_imgs">
                <img
                  src="../images/younggwang/face.jpeg"
                  alt="face-img"
                  className="avator_img"
                />
              </div>
              <div className="avator_info">
                <div className="main_right_avator_ids">yongjl11</div>
                <div className="main_right_avator_names">펭수</div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Main;