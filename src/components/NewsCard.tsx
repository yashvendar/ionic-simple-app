import React, { useState } from'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon,IonPopover, IonRippleEffect } from '@ionic/react';
import ActionSheet from './ActionSheet';
import {shareSocialOutline, ellipsisHorizontalCircle} from 'ionicons/icons';
import githubImg from './images/github-logo.png';
import Img1 from './images/services.jpg';
import likeGif from './images/like.gif';
import './card.css';
import CommentList from './commentList';
const Card: React.FC<{heading:String,image:String,details:String}>=props=>{
    const [showPopover,setShowPopover] = useState(false);
    return(
        <div >
            <IonCard>
                <IonCardHeader className="card-header">
                    <img src={githubImg} alt="" width="60px"/>
                    <IonCardTitle>Github</IonCardTitle>
                    <div className='actionkey'> <ActionSheet><IonIcon icon={ellipsisHorizontalCircle} ></IonIcon></ActionSheet></div>
                </IonCardHeader>
                <IonCardContent className="card-content">
                    <img src={Img1} width="100%"  alt="" height="100%"/>
                    <button className="text-deco text-color text-button" onClick={()=>setShowPopover(true) }>{props.heading}</button>
                        {/* ---starting of popOver-- */}
                        <IonPopover
                        isOpen={showPopover}
                        onDidDismiss={e=>setShowPopover(false)}
                        animated={true}
                        cssClass="popover"
                        keyboard-close={true}
                        >
                        <IonCard>
                            <IonCardHeader className="card-header">
                                <img src={githubImg} alt="" width="60px"/>
                                <IonCardTitle>Github</IonCardTitle>
                                <div className='actionkey'> <ActionSheet>...</ActionSheet></div>
                            </IonCardHeader>
                            <IonCardContent className="card-content">
                                <h2 className="text-deco text-color">{props.heading}</h2>
                                <p>{props.details}</p>
                                <span role="img">👍️ 0 👎️ 0 ❤️ 0</span>
                                <hr/>
                                <div className="like  text-color">
                                    <button className="text-button"><img src={likeGif} alt="" width="30px" height="20px"/><IonRippleEffect type="unbounded"></IonRippleEffect></button>
                                    <CommentList>Comment</CommentList>
                                    <button className="text-button"> <IonIcon icon={shareSocialOutline} slot="start"></IonIcon> Share</button>
                                </div>
                            </IonCardContent>
                        </IonCard>
                        </IonPopover>
                        {/* ----Ending of popOver---- */}

                        <span role="img">👍️ 0 👎️ 0 ❤️ 0</span>
                    <hr/>
                    <div className="like  text-color">
                        <button className="myButton"><img src={likeGif} width="30px" height="20px" alt=""/></button>
                        <CommentList>Comment</CommentList>
                        <button className="myButton"> <IonIcon icon={shareSocialOutline} slot="start"></IonIcon> Share</button>
                    </div>
                </IonCardContent>
            </IonCard>
        </div>
    );
}
export default Card; 