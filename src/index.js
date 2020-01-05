import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './screens/Home';
import Billing from './screens/Billing';

const MainNavigator = createStackNavigator(
  {
    Home: Home,
    Billing: Billing,
  },
  {
    initialRouteName: 'Home',
  },
);

const Routes = createAppContainer(MainNavigator);
export default Routes;
