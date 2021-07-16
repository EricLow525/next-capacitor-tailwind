import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cog, flash, list } from 'ionicons/icons';

import Home from './Dashboard';
import Lists from './Lists';
import ListDetail from './ListDetail';
import Settings from './Settings';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/dashboard" component={Home} exact={true} />
        <Route path="/tabs/orders" component={Lists} exact={true} />
        <Route path="/tabs/orders/:listId" component={ListDetail} exact={true} />
        <Route path="/tabs/settings" component={Settings} exact={true} />
        <Route path="/tabs" render={() => <Redirect to="/tabs/dashboard" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton
          className="bg-gray-900"
          tab="dashboard"
          href="/tabs/dashboard"
        >
          <IonIcon icon={flash} />
          <IonLabel>Dashboard</IonLabel>
        </IonTabButton>
        <IonTabButton
          className="bg-gray-900"
          tab="orders"
          href="/tabs/orders"
        >
          <IonIcon icon={list} />
          <IonLabel>Orders</IonLabel>
        </IonTabButton>
        <IonTabButton
          className="bg-gray-900"
          tab="settings"
          href="/tabs/settings"
        >
          <IonIcon icon={cog} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
