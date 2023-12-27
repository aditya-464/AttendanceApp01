import {Easing, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CreateClassScreen from '../screens/CreateClassScreen';
import ViewClassScreen from '../screens/ViewClassScreen';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 500,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

const HomeStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateClassScreen"
          component={CreateClassScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ViewClassScreen"
          component={ViewClassScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
