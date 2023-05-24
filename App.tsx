import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Card from './src/layouts/Card/Index';
import Auth from './src/layouts/Auth/Index';


export default function App() {
  return (

      <Auth bottomTitle='Not Registered' bottomTitlepressablePart='Login'>
        <View style={{height: 200}}>

      <Text>Hey Hamza </Text>
      <Text>How Are You </Text>
      <Text>Hy </Text>
        </View>
      </Auth>
   
     
   
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
