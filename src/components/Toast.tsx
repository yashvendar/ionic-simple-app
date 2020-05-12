import React, { useState } from 'react';
import { IonToast, IonContent } from '@ionic/react';

const ToastNav: React.FC<{message:string,ShowToast:true | false}> = props => {
  const [showToast1, setShowToast1] = useState(false);
  const [showToast2, setShowToast2] = useState(false);
  console.log('Delete clicked');
  return (
    <IonContent>
      {props.ShowToast && setShowToast1(props.ShowToast)&& console.log('Delete clicked')}
      <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message={props.message}
        duration={200}
      />

      <IonToast
        isOpen={showToast2}
        onDidDismiss={() => setShowToast2(false)}
        message="Click to Close"
        position="top"
        buttons={[
          {
            side: 'start',
            icon: 'star',
            text: 'Favorite',
            handler: () => {
              console.log('Favorite clicked');
            }
          },
          {
            text: 'Done',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]}
      />
    </IonContent>
  );
};
export default  ToastNav;
