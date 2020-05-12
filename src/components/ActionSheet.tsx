import React, { useState } from 'react'
import { IonActionSheet, IonContent } from '@ionic/react';
import { trash, share, playCircleOutline, heart, close } from 'ionicons/icons';
import ToastNav from './Toast';
const ActionSheet: React.FC = props => {

  const [showActionSheet, setShowActionSheet] = useState(false);

  return (
    <IonContent>
      <button onClick={() => setShowActionSheet(true)} className="action-button">{props.children}</button>
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={[{
          text: 'Delete',
          role: 'destructive',
          icon: trash,
          handler: () => {
              console.log('Delete clicked');
                return(
                    <ToastNav message='Post Deleted' ShowToast={true} />
                );
          }
        }, {
          text: 'Share',
          icon: share,
          handler:()=>{return(<ToastNav message='Post Shared' ShowToast={true} />)}
            
        }, {
          text: 'Play (open modal)',
          icon: playCircleOutline,
          handler: () => {
            console.log('Play clicked');
            return(
                <ToastNav message='Playing video' ShowToast={true} />
            );
          }
        }, {
          text: 'Favorite',
          icon: heart,
          handler: () => {
            console.log('Favorite clicked');
            
          }
        }, {
          text: 'Cancel',
          icon: close,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]}
      >
      </IonActionSheet>
    </IonContent>

  );

}
export default ActionSheet;
