import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CommonStyles from './themes/CommonStyles';
import Logo from './components/Logo';

import './config/StatusBarConfig';

import Home from './screens/Home';
import Billing from './screens/Billing';
import Expense from './screens/Expense';

const MainNavigator = createStackNavigator(
  {
    Home,
    Billing,
    Expense,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: CommonStyles.colors.success,
      },
      headerTitle: () => <Logo />,
      headerTintColor: CommonStyles.colors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24,
        fontFamily: CommonStyles.fontDefault,
      },
    },
  },
);

const Routes = createAppContainer(MainNavigator);
export default Routes;
