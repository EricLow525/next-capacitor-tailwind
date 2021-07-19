import { useEffect, useState } from 'react';
import Image from 'next/image';
import Card from '../ui/Card';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonMenuButton,
  IonSpinner
} from '@ionic/react';
import Notifications from './Notifications';
import { notificationsOutline } from 'ionicons/icons';
import { fetchDashboard } from '../../apis/dashboard';

const Dashboard = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [dashboardItems, setDashboardItems] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    async function loadData() {
      const data = await fetchDashboard();
      setDashboardItems(data)
      setLoading(false)
    }
    loadData();
  }, []);

  const DashboardCard = ({ name, value, trendDirection, trendValue }) => (
    <Card
      subTitle={name}
      title={value}
      status={trendDirection}
      statusValue={trendValue}
    />
  );

  const renderDashboardItems = () => {
    if (loading) {
      return <div className="flex h-full w-full	justify-center items-start mt-5">
        <IonSpinner name="bubbles" color="primary" />
      </div>
    }

    return dashboardItems.map((item, index) => (
      <DashboardCard {...item} key={index} />
    ))
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowNotifications(true)}>
              <IonIcon icon={notificationsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />
        {renderDashboardItems()}
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
