import React from 'react';
import { menuController } from '@ionic/core';
import Card from '../components/NewsCard';
import Img1 from '../components/images/Portofolio/01-full.jpg';
import Img2 from '../components/images/Portofolio/02-full.jpg';
import Img3 from '../components/images/Portofolio/03-full.jpg';
import Img4 from '../components/images/Portofolio/04-full.jpg';
import  "./Home.css";
import { IonHeader, IonMenuButton, IonTitle } from '@ionic/react';
const Home: React.FC=props=>{
    const data=[{ heading:'Parasite (2019) ', details:'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan. ', image:Img1},
    { heading:'Raiders of the Lost Ark (1981) ', details:"In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers. ", image:Img2},
    { heading:'Once Upon a Time... in Hollywood (2019) ', details:"A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.", image:Img3},
    { heading:'The Platform (2019) ', details:'A vertical prison with one cell per level. Two people per cell. One only food platform and two minutes per day to feed from up to down. An endless nightmare trapped in The Hole. ', image:Img4}
                ];
    return(<div >
            <IonHeader className="header" color="#2dd36f">
                <button onClick={()=>menuController.open()}>
                    <IonMenuButton>Menu</IonMenuButton>
                </button>
                <IonTitle ><div className="navbar-brand">Innoframs</div></IonTitle>
            </IonHeader>
        { <div className='scrolly'>
            {data.map((data,index)=>{
                return(
                    <Card key={index} {...data}/>
                )
            })}
       </div> }
    </div>);
}
export default Home;