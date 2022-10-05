import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthNav from './authNav';
import AppNav from './appNav';

const RootNavigator = createSwitchNavigator(
  {
    Auth: AuthNav,
    App: AppNav,
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(RootNavigator);