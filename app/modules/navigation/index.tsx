import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '../../views/splashScreen';
import { HomeScreen } from '../../views/homeScreen';
import { AboutDriverScreen } from '../../views/aboutDriverScreen';


const Stack = createNativeStackNavigator();

export const RootNavigator: FC = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="SplashScreen">
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AboutDriverScreen"
          component={AboutDriverScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
