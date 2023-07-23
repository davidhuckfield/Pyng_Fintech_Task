import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function NavBar({ navigation }) {

    const [fontsLoaded] = useFonts({
      'Comfortaa': require('./assets/fonts/Comfortaa-VariableFont_wght.ttf'),
    });
  
    if (!fontsLoaded) {
      return <Text>Loading...</Text>;
    }
  
    return (
      <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('HomePage')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('HomePage')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('HomePage')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('HomePage')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        /</View>
        <StatusBar style="auto" />
      </View>
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
  