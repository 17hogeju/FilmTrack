import {createStackNavigator} from 'react-navigation-stack';
import { RegistrationScreen, LoginScreen } from '../screens';


const AuthNavConfig = {
  initialRouteName: 'Login',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Login: {
    screen: LoginScreen,
  },
  Registration: {
    screen: RegistrationScreen
  }
};

const AuthNav = createStackNavigator(RouteConfigs, AuthNavConfig);

export default AuthNav;