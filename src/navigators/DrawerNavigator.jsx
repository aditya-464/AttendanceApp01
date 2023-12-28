import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStackNavigator from './HomeStackNavigator';
import NoteStackNavigator from './NoteStackNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import LogoutScreen from '../screens/LogoutScreen';
import AboutScreen from '../screens/AboutScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeStackNavigator"
        screenOptions={{drawerPosition: 'right'}}>
        <Drawer.Screen
          name="HomeStackNavigator"
          component={HomeStackNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="NoteStackNavigator"
          component={NoteStackNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="LogoutScreen"
          component={LogoutScreen}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
