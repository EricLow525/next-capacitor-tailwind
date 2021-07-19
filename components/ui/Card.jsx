import React from 'react';
import {
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonRouterLink
} from '@ionic/react';
import { arrowUpOutline, bagOutline, arrowDownOutline } from 'ionicons/icons';

const Card = ({
  subTitle,
  title,
  status,
  statusValue
}) => {
  return (
    <IonCard>
      <div className="card-top flex items-center px-4 py-5 sm:p-6">
        <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3 text-white">
          <IonIcon
            className="view-widget"
            icon={bagOutline}
            slot="start"
          />
        </div>
        <IonCardHeader className="py-0">
          <IonCardSubtitle>{subTitle}</IonCardSubtitle>
          <IonCardTitle className="flex text-gray-900">
            {title}
            <div className="flex items-end ml-4 text-sm font-semibold text-green-600">
              {status === 'up'
                ? <IonIcon className="mb-0.5" icon={arrowUpOutline} />
                : <IonIcon className="mb-0.5" icon={arrowDownOutline} />
              }
              <span className="sr-only">
                {statusValue}
              </span>
              {statusValue}%
            </div>
          </IonCardTitle>
        </IonCardHeader>
      </div>

      <IonCardContent className="card-content bg-black-50 px-4 py-4 sm:px-6">
        <IonRouterLink href="/orders">
          View Order
        </IonRouterLink>
      </IonCardContent>
    </IonCard>
  );
};

export default Card