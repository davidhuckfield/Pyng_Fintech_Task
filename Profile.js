import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';

export default function Profile() {

    const [fontsLoaded] = useFonts({
      'Comfortaa': require('./assets/fonts/Comfortaa-VariableFont_wght.ttf'),
    });
  
    if (!fontsLoaded) {
      return <Text>Loading...</Text>;
    }
  
    return (
      <View style={styles.container}>
      <Text style={styles.headerText}>Profile</Text>
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
    
    headerText: {
      color: 'black',
      fontSize: 35,
      fontFamily: 'Comfortaa',
    },
    
  });
  