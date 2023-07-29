import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function Send({ navigation }) {

    const [amount, setAmount] = useState(0);

    const handleChangeAmount = (inputValue) => {
      console.log("Button pressed:", inputValue)

      if (amount === 0) {
        setAmount(inputValue);
        console.log("Amount is ", amount);
      }
      else {
        const newAmount = (amount * 10) + inputValue;
        setAmount(newAmount);
        console.log("Amount is ", amount);
      }
    };

    const handleDelete = () => {
      console.log("Delete pressed");
      if (amount !== 0) {

        const newAmount = Math.floor(amount / 10);
        setAmount(newAmount);
        // const amountString = amount.toString();
        // console.log("amountString is ", amountString);
        // const slicedString = amountString.slice(0, -1);
        // console.log("slicedString is ", slicedString);
        // const newAmount = parseFloat(slicedString / 10);
        // console.log("newAmount is ", newAmount);

        // if (newAmount.length !== 0) {
        // setAmount(newAmount);
        // }
      }
    };

    const formatAmount = (amount) => {
      const amountString = amount.toString();
      const integerPart = amountString.slice(0, -2);
      const decimalPart = amountString.slice(-2).padStart(2, '0');
      const formattedIntegerPart = integerPart.length === 0 ? '0' : integerPart;
      return `£${formattedIntegerPart}.${decimalPart}`;
    };

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
          <Text style={styles.sendBalanceText}>{formatAmount(amount)}</Text>
        </View>

        <View style={styles.keypadContainer}>
          <View style={styles.keypadRow}>
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleChangeAmount(1)}>
              <Text style={styles.keypadButtonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleChangeAmount(2)}>
              <Text style={styles.keypadButtonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleChangeAmount(3)}>
              <Text style={styles.keypadButtonText}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.keypadRow}>
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleChangeAmount(4)}>
              <Text style={styles.keypadButtonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleChangeAmount(5)}>
              <Text style={styles.keypadButtonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleChangeAmount(6)}>
              <Text style={styles.keypadButtonText}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.keypadRow}>
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleChangeAmount(7)}>
              <Text style={styles.keypadButtonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleChangeAmount(8)}>
              <Text style={styles.keypadButtonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleChangeAmount(9)}>
              <Text style={styles.keypadButtonText}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.keypadRow}>
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleDelete()}>
              <Image source={require('./assets/Delete_Key.png')} resizeMode='contain' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.keypadButton} onPress={() => handleChangeAmount(0)}>
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
  