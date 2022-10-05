import {createBottomTabNavigator} from 'react-navigation-tabs';
import { HomeScreen } from '../screens';

const TabNavConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Home:{
    screen: HomeScreen,
  }
};

const AppNav = createBottomTabNavigator(RouteConfigs, TabNavConfig);

export default AppNav;