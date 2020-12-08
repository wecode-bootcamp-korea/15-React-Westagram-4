import React from 'react';
import './Main.scss';
import Comments from './Comments';

class MainOh extends React.Component{

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

        console.log(this.state.comment);
        console.log(this.state.commentsArr);
        console.log(this.state.commentsData);

        return(
            <div className="Main">
                <nav>
                    <div className="top-left">
                        <img src="https://cdn2.iconfinder.com/data/icons/social-networks-18/100/Instagram_logo-512.png" className="camera"></img>
                        <span className="westa">Westagram</span>
                    </div>
                    <div className="top-center">
                        <input type="text" placeholder="검색"></input>
                    </div>
                    <div className="top-right">
                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" ></img>
                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"></img>
                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"></img>
                    </div>
                </nav>

                <main>
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
                    <div className="main-right">
                        <div className="righttop">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCBTUgEoLoLYbXH57_krEfSD21Vg2dALhqQ&usqp=CAU" className="kidpepe"/>
                            <ul className="descriptions">
                                <li>Frog_PePe</li>
                                <li style={{color: "lightgray"}}> Frog | PePe</li>
                            </ul>
                        </div>
                        <div className="story">
                            <div className="storytop">
                                <span style={{color:"lightgray"}}>스토리</span>
                                <span>모두 보기</span>
                            </div>
                            <div className="storydiv">            
                                <img src="https://pbs.twimg.com/profile_images/607684943993397248/90QNQdDL.jpg"></img>
                                <div className="nicktime">
                                    <span className="nick">kermit</span>         
                                    <span className="time">16분 전</span>             
                                </div> 
                            </div>
                            <div className="storydiv">                      
                                <img src="https://i.ytimg.com/vi/f6wm5WYDkGE/maxresdefault.jpg"></img>
                                <div className="nicktime">
                                    <span className="nick">sergent_keroro</span>         
                                    <span className="time"> 3시간 전</span>             
                                </div>
                            </div>
                            <div className="storydiv">                     
                                <img src="https://i.ytimg.com/vi/O6dPPVFAtI8/hqdefault.jpg"></img>
                                <div className="nicktime">
                                    <span className="nick">Big_Eyes</span>         
                                    <span className="time"> 20시간 전</span>             
                                </div>
                            </div>
                        </div>
                        <div className="recom">
                            <div className="recomtop">
                                <span style={{color:"lightgray"}}>회원님을 위한 추천</span>
                                <span>모두 보기</span>
                            </div>
                            <div className="recomdiv">      
                                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.cafe.daum.net%2FzzangguandPokemon%2FPAGn%2F61%3Fsvc%3Dcafeapi&psig=AOvVaw0V8h_UY7AcBlAdvXph1R3P&ust=1607513251492000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCNmdWjvu0CFQAAAAAdAAAAABAD"></img>
                                <div className="recomfr">
                                    <span className="nick">aromi</span>         
                                    <span className="time">Big_Eyes님 외 2명이 ...</span>            
                                </div>
                                <button>팔로우</button> 
                            </div>
                            <div className="recomdiv">      
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPzLeqNDnyXc21fiJonlsSt8ntlhm8wIbNQ&usqp=CAU"/>
                                <div className="recomfr">
                                    <span className="nick">dororo</span>         
                                    <span className="time">sergent_keroro님 외 12명이 ...</span>            
                                </div>
                                <button>팔로우</button> 
                            </div>
                        </div>
                    </div>
                </main>     
            </div>
        )
    }
}

export default Main;