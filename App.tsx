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

// import * as firebase from 'firebase/app'
// import { Notification} from "expo-notifications";
// import { PermissionStatus } from "expo-permissions";

// import {Notification} from 'expo'
// import { Permission } from "react-native";
import { registerForPushNotificationsAsync } from "./src/firebase/firebaseNotifications";
import LocationConfig from "./src/location/locationConfig";
import { LoginScreen } from "./src/screens";
SplashScreen.preventAutoHideAsync();

import { LocationProvider } from "./src/location/locationContext";
import { AuthProvider } from "./src/Authentication/AuthContext";


export default function App() {




  useEffect(() => {
    const registerForPushNotifications = async () => {
      await registerForPushNotificationsAsync();
      // Additional logic after registering for push notifications
    };

    registerForPushNotifications();
  }, []);





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




    <LocationProvider>
      <AuthProvider>


        <SafeAreaView
          onLayout={onLayoutRootView}
          style={{ flex: 1, justifyContent: "center" }}
        >
          <StatusBar translucent style="light" />

          <NavigationContainer>
            <AppRoutes />
            {/* <LoginScreen/> */}
            {/* <LocationConfig/> */}
          </NavigationContainer>
        </SafeAreaView>
      </AuthProvider>
    </LocationProvider>
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

