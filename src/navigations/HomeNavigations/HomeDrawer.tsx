/** @format */

import React, { useContext } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { HomeScreen, PrayerSilentMode, ReminderSetting } from "@screens";
import { images } from "@assets";
import { AppliedTheme } from "@constants";
import { getHeight, getWidth } from "@helpers";
import { handleSignOut } from "../../firebase/firebaseAuth";
import { AuthContext } from "../../Authentication/AuthContext";
const theme = AppliedTheme();
const Drawer = createDrawerNavigator();
function SetLocation() {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}
const CustomDrawerContent = (props) => {
  const {signOut}=useContext(AuthContext)
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ alignItems: "center", marginTop: "30%" }}>
        <Image
          source={images.user}
          style={{ width: 80, height: 80, borderRadius: 10 }}
        />
        <Text style={styles.ProfileText}>Maryam Khan</Text>
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity onPress={() => signOut()}>
        <View style={styles.logoutBtnView}>
          <Image
            source={images.logout}
            style={[styles.imageStyle, { width: 23, height: 23 }]}
          />
          <Text style={styles.logoutBtn}>Logout</Text>
        </View>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};
const HomeDrawer = () => {
 
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "right",
        drawerActiveBackgroundColor: theme.button.Gray,
        drawerItemStyle: {
          width: getWidth(70),
          height: getHeight(9),
          justifyContent: "center",
          alignSelf: "center",
          alignContent: "center",
          borderRadius: 10,
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontFamily: "FuturaBookBT",
          color: theme.text.BLACK,
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ focused, color, size }) => (
            <Image source={images.home} style={styles.imageStyle} />
          ),
        }}
      />
      <Drawer.Screen
        name="Prayer
        Silent
        Mode"
        component={PrayerSilentMode}
        options={{
          headerShown: false,
          drawerIcon: ({ focused, color, size }) => (
            <Image source={images.silent} style={styles.imageStyle} />
          ),
        }}
      />
      <Drawer.Screen
        name="Reminder Setting"
        component={ReminderSetting}
        options={{
          headerShown: false,
          drawerIcon: ({ focused, color, size }) => (
            <Image source={images.reminder} style={styles.imageStyle} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
const styles = StyleSheet.create({
  imageStyle: {
    width: 21,
    height: 22,
    resizeMode: "contain",
    left: 10,
  },
  logoutBtn: {
    fontSize: 16,
    fontFamily: "FuturaBookBT",
    color: theme.text.BLACK,
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    left: 30,
  },
  logoutBtnView: {
    flexDirection: "row",
    alignItems: "center",
    width: getWidth(65),
    height: getHeight(9),
    alignSelf: "center",
    marginTop: getHeight(10),
  },
  ProfileText: {
    marginTop: 20,
    fontSize: 18,
    fontFamily: "FuturaMediumBT",
    marginVertical: getHeight(5),
  },
});
