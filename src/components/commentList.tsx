import React,{useState} from 'react';
import { IonList, IonItem, IonModal, IonGrid, IonRow } from '@ionic/react';
import githubImg from './images/github-logo.png';
import './card.css';
import likeGif from './images/like.gif';
const CommentList: React.FC = props => {
    const [showModal, setShowModal] = useState(false);
    return(<>
        {/*-- List of Text Items --*/}
        
        <IonModal isOpen={showModal} >
            
    <IonList className="list" >
        <IonRow><button onClick={() => setShowModal(false)} className="close-model">Close</button></IonRow>
        <IonItem>
            <IonGrid>
                <IonRow>
                <img src={githubImg} width="80px"  alt="" height="40px"/>
                <p>Github</p>
                </IonRow>
                <p className="comment">Comment</p>
                <div className="like1  text-color">
                    <button><img src={likeGif} width="30px" alt="" height="20px"/></button>
                    <button>Comment</button>
                </div>
            </IonGrid>
        </IonItem>
      <IonItem>
        <img src={githubImg} alt="" width="60px"/>
        <p>Mega Man X</p>
      </IonItem>
      <IonItem>
        <img src={githubImg}  alt="" width="60px"/>
        <p>The Legend of Zelda</p>
      </IonItem>
      <IonItem>
        <img src={githubImg}  alt="" width="60px"/>
        <p>Pac-Man</p>
      </IonItem>
      <IonItem>
        <img src={githubImg}  alt=""width="60px"/>
        <p>Super Mario World</p>
      </IonItem>
    </IonList>
    </IonModal>
    <button onClick={() => setShowModal(true)} className="myButton">{props.children}<i className="fa fa-edit"></i></button>
    </>);
}

export default CommentList;