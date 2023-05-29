/** @format */

import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Card from "./src/layouts/Card/Index";
// import Auth from './src/layouts/Auth/Index';
import { AppRoutes as AuthStack } from "@navigations";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { NavigationContainer } from "@react-navigation/native";
// import { AuthStack } from './src/navigations';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsMedium: require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
    FuturaBookBT: require("./assets/font/fonts/FuturaBookBT.ttf"),
    FuturaMediumBT: require("./assets/font/fonts/FuturaMediumBT.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      onLayout={onLayoutRootView}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <StatusBar translucent style="light" />
      {/* <Auth bottomTitle='Already Have An Account ?' bottomTitlepressablePart='Login'>
    <View style={{marginVertical:5}}>

     <FloatingLabelInput
     label='User Name'
     
     labelStyles={{backgroundColor:'white'}}
     style={{borderWidth:2,borderColor:'#407BE2'}}
     />
    </View>
    <View style={{marginVertical:5}}>

     <FloatingLabelInput
     label='Email'
     
     labelStyles={{backgroundColor:'white'}}
     style={{borderWidth:2,borderColor:'#407BE2'}}
     />
    </View>
    <View style={{marginVertical:5}}>

     <FloatingLabelInput
     label='Password'
     
     labelStyles={{backgroundColor:'white'}}
     style={{borderWidth:2,borderColor:'#407BE2'}}
     />
    </View>
    <View style={{marginVertical:5}}>

     <FloatingLabelInput
     label='Confirm Password'
     
     labelStyles={{backgroundColor:'white'}}
     style={{borderWidth:2,borderColor:'#407BE2'}}
     />
    </View>
    <View style={{marginVertical:5}}>

    <TouchableOpacity
    style={{width:265,backgroundColor:'#407BE2',justifyContent:'center',alignItems:'center', height:55,borderRadius:12}}
    >
      <Text style={{color:'white'}}>Create Account</Text>
    </TouchableOpacity>
    </View>
   
    
    
  
      
      
      
      
      
      </Auth> */}
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
