import React from 'react';
import './Main.scss';
import Feeds from './Feeds';
import {storyDivContents, recomDivContents} from './DivContents';

class MainOh extends React.Component{
  
    render(){
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
                    <Feeds />
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
                                {storyDivContents.map((el) => 
                                        {return <li key={el}> 
                                                    <img src={el.imgUrl} />
                                                    <div className="nicktime">
                                                        <span className="nick">{el.nick}</span>
                                                        <span className="time">{el.time}</span>
                                                    </div>
                                                </li>}
                                 )}
                            </div>
                        </div>
                        <div className="recom">
                            <div className="recomtop">
                                <span style={{color:"lightgray"}}>회원님을 위한 추천</span>
                                <span>모두 보기</span>
                            </div>
                            {recomDivContents.map((el)=> {                               
                               return <div className="recomdiv">
                                        <img src={el.imgUrl} />
                                        <div className="recomfr">
                                            <span className="nick">{el.nick}</span>
                                            <span className="time">{el.time}</span>
                                        </div>
                                        <button>팔로우</button>
                                    </div>                        
                               })}
                        </div>
                    </div>
                </main>     
            </div>
        )
    }
}

export default MainOh;