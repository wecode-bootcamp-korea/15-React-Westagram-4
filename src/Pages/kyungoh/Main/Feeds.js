import React from 'react';
import Comments from './Comments';

class Feeds extends React.Component{
    constructor(){
        super();
        this.state = {
            comment: "",
            commentsArr:[],
            commentsData: [],
        };
    }

    saveComments = (e) =>{
        this.setState({
            comment: e.target.value,
        });
    }

   addComments=(e)=>{
        this.setState({
            commentsArr: this.state.commentsArr.concat([this.state.comment]),
            comment: "",
            });
    }

   addCommentsEnter=(e)=>{
       if(e.key==='Enter'){
            this.addComments();
        };
   }

   componentDidMount() {
    fetch('http://localhost:3000/data/data.json', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          commentsData: res.data,     
        });
      });
  }

    render(){
        return(
            <div className="feeds">
                        <article>
                            <div className="feedstop">
                                <img src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile10.uf.tistory.com%2Fimage%2F270F6B3A567D7EA706FD7B" className="smilepepe"></img>
                                <span>FrogPepe</span>
                            </div>
                            <img src="https://ncache.ilbe.com/files/attach/new/20200820/377678/11272768367/11281464815/0b8073b8832e4ae8660ca512aaf63b13_11281464857.jpg" className="maskpepe"/>
                            <div className="feedsbot">
                                <div className="left">
                                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" className="feedheart"></img>
                                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" className="balloon"></img>
                                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" className="share"></img>
                                </div>
                                <div className="right">
                                    <img src ="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" className="bookmark"></img>
                                </div> 
                            </div>
                            <div className="content">
                                <div className="feedsandheart">
                                    <p><strong>FrogPepe</strong> 코로나...</p>
                                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" className="smallheart"/>
                                </div>                 
                            </div>
                            <div className="reply">                     
                                <div className="inputbtncontainer">
                                    <Comments commentsData={this.state.commentsData} commentsList={this.state.commentsArr}/>
                                    <div className="inputandbtn">
                                        <input type="text" className="comment" placeholder="댓글 달기..." value={this.state.comment} onChange={this.saveComments} onKeyPress={this.addCommentsEnter}/>
                                        <button className="post" onClick={this.addComments}>게시</button>
                                    </div>                                        
                                </div>
                            </div>
                        </article>               
                    </div>
        )
    }
}

export default Feeds;