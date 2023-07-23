import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import Profile from './Profile';
import NavBar from './NavBar';

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Comfortaa': require('./assets/fonts/Comfortaa-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="NavBar" component={NavBar} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
      backgroundColor: 'rgb(254,7,200)',
      padding: 10,
      borderRadius: 50,
      margin: 5,
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center',
  },
  button2: {
    backgroundColor: 'rgb(160,16,163)',
    padding: 10,
    borderRadius: 50,
    margin: 5,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
},
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'Comfortaa',
  },
  buttonsContainer: {
    width: '90%',
    padding: 0,
    position:'absolute',
    bottom: 5,
  },
  logoContainer: {
    position: 'absolute',
    top: 170,
    alignItems: 'center',
    width:'100%',
  },
  logo: {
    width: '95%',
  },
});
