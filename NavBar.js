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
      <Image style={styles.profile} source={require('./assets/profileicon.png')} resizeMode='contain' />
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomePage')}>
          <Image style={styles.image} source={require('./assets/group.png')} resizeMode='contain' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('HomePage')}>
          <Image style={styles.image} source={require('./assets/send.png')} resizeMode='contain' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomePage')}>
          <Image style={styles.image} source={require('./assets/receive.png')} resizeMode='contain' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomePage')}>
          <Image style={styles.image} source={require('./assets/wallet.png')} resizeMode='contain' />
        </TouchableOpacity>
        </View>
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
    button: {
        borderRadius: 50,
        margin: 5,
        width:'23%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button2: {
      backgroundColor: 'rgb(254,7,200)',
      borderRadius: 50,
      margin: 5,
      width:'23%',
      alignItems: 'center',
      justifyContent: 'center',
  },
    navBar: {
      backgroundColor: 'rgb(160,16,163)',
      borderRadius: 50,
      width: '95%',
      padding: 0,
      position:'absolute',
      bottom: 10,
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    profile: {
      position:'absolute',
      top: 10,
      right:10,
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
  