import { createSwitchNavigator } from '@react-navigation/compat';
import AuthStack from './AuthStack';
import MainTabNavigator from './MainTabNavigator';

const AppNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
    Main: MainTabNavigator,
  },
  {
    initialRouteName: 'Auth', // or 'Main' depending on your logic
  }
);

export default AppNavigator;
