import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerRouter, NavigationContainer } from '@react-navigation/native';

import { useTheme } from '@kovacsikdev/lib/themeContext/themeContext';
import { HomePage } from './src/pages/HomePage/HomePage';
import { GamePage } from './src/pages/GamePage/GamePage';
import { Settings } from './src/components/Settings/Settings';

const Drawer = createDrawerNavigator();

const App = () => {
  const { theme } = useTheme();
  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <Settings {...props} />}>
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="Game" component={GamePage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
