import React from 'react';
import 'react-native-gesture-handler';

import {StyleSheet,} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';

import AttractionDetails from './src/screens/AttractionDetails';
import Gallery from './src/screens/Gallery';
import Home from './src/screens/Home';

const Stack = createStackNavigator(); 
enableScreens();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='AttractionDetails' component={AttractionDetails}/>
        <Stack.Screen name='Gallery' component={Gallery}/>
        
      </Stack.Navigator>
      
    </NavigationContainer>
    
   
  );
}

const styles = StyleSheet.create({

});

export default App;
