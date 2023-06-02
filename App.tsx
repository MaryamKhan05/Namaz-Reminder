/** @format */

import { useCallback, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert
} from "react-native";
import * as Notifications from 'expo-notifications';
import { AppRoutes } from "@navigations";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { NavigationContainer } from "@react-navigation/native";
// import { registerForPushNotificationsAsync } from "./src/firebase/firebaseNotifications";
// import { AuthStack } from './src/navigations';
// import messaging from 'firebase/messaging'
// import messaging from '@react-native-firebase/messaging';

import * as firebase from 'firebase/app'
import { Notification} from "expo-notifications";
// import { PermissionStatus } from "expo-permissions";

// import {Notification} from 'expo'
import { Permission } from "react-native";
import { registerForPushNotificationsAsync } from "./src/firebase/firebaseNotifications";
SplashScreen.preventAutoHideAsync();
export default function App() {




  useEffect(() => {
    const registerForPushNotifications = async () => {
      await registerForPushNotificationsAsync();
      // Additional logic after registering for push notifications
    };
  
    registerForPushNotifications();
  }, []);

  // const requestUserPermission = async () => {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }
  // }

  // useEffect(() => {
  //   const getToken = async () => {
  //     await requestUserPermission();
  //     const token = await messaging().getToken();
  //     console.log(token);
  //   }
  
  //   getToken();
  // }, []);




  // useEffect(()=>{
  //   if( requestUserPermission()){
  //     messaging().getToken().then(token=>{
  //       console.log(token)
  //     })
  //   }
  // },[])


  // useEffect(() => {
  //   const getToken = async () => {
  //     await requestUserPermission(); // Wait for permission before getting token
  //     messaging().getToken().then(token => {
  //       console.log(token);
  //     });
  //   }
  //   // Check whether an initial notification is available
  //   messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           remoteMessage.notification,
  //         );
  //       }
  //     });


  //   // Assume a message-notification contains a "type" property in the data payload of the screen to open

  //   messaging().onNotificationOpenedApp(async remoteMessage => {
  //     console.log(
  //       'Notification caused app to open from background state:',
  //       remoteMessage.notification,
  //     );
  //   });

  //   // Register background handler
  //   messaging().setBackgroundMessageHandler(async remoteMessage => {
  //     console.log('Message handled in the background!', remoteMessage);
  //   });


  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;
  //   getToken();
  // }, []);



  // useEffect(() => {
  //   const getToken = async () => {
  //     await requestUserPermission(); // Wait for permission before getting token
  //     messaging().getToken().then(token => {
  //       console.log(token);
  //     });
  //   };

  //   // Assume a message-notification contains a "type" property in the data payload of the screen to open
  //   messaging().onNotificationOpenedApp(async remoteMessage => {
  //     console.log(
  //       'Notification caused app to open from background state:',
  //       remoteMessage.notification,
  //     );
  //   });

  //   // Register background handler
  //   messaging().setBackgroundMessageHandler(async remoteMessage => {
  //     console.log('Message handled in the background!', remoteMessage);
  //   });

  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   getToken();

  //   // Check whether an initial notification is available
  //   messaging()
  //     .getInitialNotification()
  //     .then(async remoteMessage => {
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           remoteMessage.notification,
  //         );
  //       }
  //     });

  //   return unsubscribe;
  // }, []);




// registerForPushNotificationsAsync= async()=>{
//   const {status}= await Permissions.getAsync(Permissions.NOTIFICATIONS);
// } 




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
        <AppRoutes />
        {/* <LoginScreen/> */}
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
