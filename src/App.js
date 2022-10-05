import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { HomeScreen, WatchedListScreen } from './components/screens';
import {decode, encode} from 'base-64';
import 'react-native-gesture-handler';
// import { LogBox } from 'react-native';

// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications

if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad'}}
      >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="WatchedList" component={WatchedListScreen}/>
      </Tab.Navigator>
    </NavigationContainer>   
  );
};