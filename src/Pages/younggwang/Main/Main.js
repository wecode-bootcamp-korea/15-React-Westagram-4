import "./Main.scss";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      commentList: [{
        comments : "",
      }],
      
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

    return (
      <>
        <header className="navHeader">
          <nav className="navBar">
            <div className="container">
              <div className="left">
                <div className="nav_icon">
                  <img
                    alt="main_logo"
                    src="../images/younggwang/logo.png"
                    className="nav_logo"
                  />
                </div>
                <div className="nav_titile">Westagram</div>
              </div>
              <div className="center">
                <img alt="search" src="../images/younggwang/search.png" id="search" />
                <input type="text" placeholder="검색" className="search_bar" />
              </div>
              <div className="right">
                <div className="nav_right_imgs">
                  <img
                    alt="explore"
                    src="../images/younggwang/explore.png"
                    className="nav_right_img"
                  />
                  <img
                    alt="like"
                    src="../images/younggwang/heart.png"               
                    className="nav_right_img"
                  />
                  <img
                    alt="myprofile"
                    src="../images/younggwang/profile.png"
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
                    alt="story-img"
                    src="../images/younggwang/pangsu.jpg"
                    className="story_img"
                  />
                </div>
                <div className="story_name">pengsoo</div>
              </div>
              <div className="story">
                <div className="story_picture">
                  <img
                    alt="story-img"
                    src="../images/younggwang/pangsu.jpg"
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
                        alt="my-img"
                        src="../images/younggwang/face.jpeg"                      
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
                  alt="feed-ficture"
                  src="../images/younggwang/pang.jpeg"
                  className="feed_ficture"
                />
              </div>
              <div className="feed_icons">
                <div className="feed_ions_left">
                  <div>
                    <img alt="likeBtn" src="../images/younggwang/heart.png"  className="like" />
                  </div>
                  <div>
                    <img
                      alt="comment-btn"
                      src="../images/younggwang/speechbubble.png"                    
                      className="content"
                    />
                  </div>
                  <div>
                    <img
                      alt="direct-btn"
                      src="../images/younggwang/direct.png"
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
                  alt="face-img"
                  src="../images/younggwang/face.jpeg"                 
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