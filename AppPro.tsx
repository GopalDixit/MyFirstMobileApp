import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

function AppPro() {
    const isDarkMode = useColorScheme()==='dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode?styles.whiteMode:styles.darkMode}>Hello Hi!</Text>
    </View>
  );
}
    const styles = StyleSheet.create({
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        },
        darkMode:{
            color:'#000000'
        },
        whiteMode:{
            color:'#ffffff'
        }
    })

export default AppPro;