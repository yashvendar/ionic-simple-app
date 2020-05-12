import React, { useState } from 'react';
import { IonPopover, IonButton } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonIcon } from '@ionic/react';
import {shareSocialOutline} from 'ionicons/icons';
import githubImg from './images/github-logo.png';
import Img1 from './images/img1.jpeg';
import likeGif from './images/like.gif';
import './card.css';
const Popover: React.FC=()=>{
    const [showPopover,setShowPopover] = useState(false);
    return(<>
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
                </IonCardHeader>
                <IonCardContent className="card-content">
                    <img src={Img1} width="100%" alt="" height="100%"/>
                    <h2 className="text-deco text-color">Your Short Film of the Day</h2>
                    <div>👍️ 0 👎️ 0 ❤️ 0</div>
                    <hr/>
                    <div className="like  text-color">
                        <IonText><img src={likeGif} alt="" width="30px" height="20px"/></IonText>
                        <IonText>Comment</IonText>
                        <IonText>Share <IonIcon icon={shareSocialOutline} slot="end"></IonIcon></IonText>
                    </div>
                </IonCardContent>
            </IonCard>

        </IonPopover>
        <IonButton onClick={()=>setShowPopover(true) }>Show Popover</IonButton>
        </>
    );
}
export default Popover;