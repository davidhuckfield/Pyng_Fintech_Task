import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function Send({ navigation }) {

    const [balanceToSend, setBalanceToSend] = useState(0);

    const handleButtonPress = (value) => {
      
    }

    const [fontsLoaded] = useFonts({
      'Comfortaa-Regular': require('./assets/fonts/Comfortaa-Regular.ttf'),
      'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf'),
    });
  
    if (!fontsLoaded) {
      return <Text>Loading...</Text>;
    }
  
    return (
      <View style={styles.container}>
          <Text style={styles.headerText}>Send</Text>

          <TouchableOpacity style={styles.profilehelp} onPress={() => navigation.navigate('Profile')}>
            <Image source={require('./assets/help_and_profile_icon.png')} resizeMode='contain' />
          </TouchableOpacity>

        <View style={styles.balanceContainer}>
          <Image source={require('./assets/Pyng_Arrow_Icon_Component.png')} resizeMode='contain' />
          <View style={styles.balanceSubContainer}>
            <Text style={styles.balanceText}>£15.00</Text>
            <Text style={styles.balanceText}>Pyng Balance</Text>
          </View>
        </View>

        <View style={styles.sendBalanceContainer}>
          <Text style={styles.sendBalanceText}>£{balanceToSend.toFixed(2)}</Text>
        </View>

        <View style={styles.keypadContainer}>
          <View style={styles.keypadRow}>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadButtonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadButtonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadButtonText}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.keypadRow}>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadButtonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadButtonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadButtonText}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.keypadRow}>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadButtonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadButtonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadButtonText}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.keypadRow}>
            <TouchableOpacity style={styles.keypadButton}>
              <Image source={require('./assets/Delete_Key.png')} resizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Text style={styles.keypadButtonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton}>
              <Image source={require('./assets/Send_Button_Vector.png')} resizeMode='contain' />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.navBar}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomePage')}>
            <Image style={styles.image} source={require('./assets/group.png')} resizeMode='contain' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
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
      justifyContent: 'flex-start',
    },
    balanceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-start',
      marginLeft: 50,
      marginTop: 20,
    },
    balanceSubContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginLeft: 10,
      alignSelf: 'stretch',
    },
    sendBalanceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    keypadContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      width: '70%',
    },
    keypadRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '100%',
    },
    sendButton: {
      backgroundColor: 'rgb(254,7,200)',
      borderRadius: 50,
      margin: 5,
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      padding: 10,
    },
    sendButtonText: {
      color: 'black',
      fontSize: 20,
      fontFamily: 'Comfortaa-Regular',
    },
    keypadButton: {
      margin: 5,
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    keypadButtonText: {
      color: 'black',
      fontSize: 30,
      fontFamily: 'Comfortaa-Regular',
    },
    sendBalanceText: {
      color: 'black',
      fontSize: 50,
      fontFamily: 'Comfortaa-Bold',
    },
    balanceText: {
      color: 'black',
      fontSize: 20,
      fontFamily: 'Comfortaa-Regular',
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
    profilehelp: {
      position:'absolute',
      top: 10,
      right:10,
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    headerText: {
      color: 'black',
      fontSize: 35,
      fontFamily: 'Comfortaa-Bold',
      
    },
  });
  