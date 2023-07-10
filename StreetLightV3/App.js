import * as React from 'react';
import {NavigationContainer, CommonActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoadingScreen from './src/pages/loadingPage';
import MainNavigator from './src/routes/mainNavigator';
import AuthNavigator from './src/routes/authNavigator';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="MainNavigator" component={MainNavigator}/>
        <Stack.Screen name="AuthNavigator" component={AuthNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

