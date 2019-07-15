import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import Car from '../screens/Car';
import Exterior from '../screens/Exterior';
import Interior from '../screens/Interior';
import Autopilot from '../screens/Autopilot';
import Summary from '../screens/Summary';

import { theme } from '../constants';

const screens = createStackNavigator({
  Welcome,
  Car,
  Exterior,
  Interior,
  Autopilot,
  Summary,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      height: theme.sizes.base * 4,
      backgroundColor: theme.colors.white, // or 'white
      borderBottomColor: "transparent",
      elevation: 0, // for android
    },
    headerBackImage: <Image source={require('../assets/icons/back.png')} />,
    headerBackTitle: null,
    headerTitle: <Image source={require('../assets/icons/logo.png')}/>,
    headerLeftContainerStyle: {
      alignItems: 'center',
      marginLeft: theme.sizes.base * 2,
      paddingRight: theme.sizes.base,
    },
    headerRightContainerStyle: {
      alignItems: 'center',
      paddingRight: theme.sizes.base,
    },
  }
});

export default createAppContainer(screens);