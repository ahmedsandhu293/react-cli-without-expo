/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

function App(): React.JSX.Element {
  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (pos) => {
        setPosition(JSON.stringify(pos));
      },
      (error) => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      { enableHighAccuracy: true }
    );
  };
  const [position, setPosition] = useState<string | null>(null);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Hello World: {position}</Text>
      <Pressable onPress={getCurrentPosition} style={({pressed})=>[styles.button, pressed && styles.pressed]}>
        <Text style={styles.buttonText}>Get Location</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#1B1B1D'
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color:'white'
  },
  button: {
    backgroundColor: '#61D9FB',
    paddingHorizontal: 10,
    paddingVertical:6,
    borderRadius:16,
    marginTop:12
  },
  buttonText:{
    fontSize:18,
    fontWeight:'600',
    color:'white'
  },
  pressed:{
    opacity:0.7
  }
});

export default App;
