/** @format */

import React, { FC, ReactNode } from "react";
import { View, StatusBar, StyleSheet, Text, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getWidth, getHeight } from "@helpers";
import { Border } from "@assets";
interface HomeScreenHeaderProps {
  children: ReactNode;
}

const HomeScreenHeaderComponent: FC<HomeScreenHeaderProps> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#8F94Fd", "#4E54C8"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
      </LinearGradient>

      <LinearGradient
        colors={["#8F94FB", "#4E54C8"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1 }}
      >
        <View style={styles.borderView}>
          <Border />
        </View>
        {children}
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: getWidth(100),
    height: getHeight(35),
  },
  borderView: {
    position: "absolute",
    left: getWidth(50),
  },
});

export default HomeScreenHeaderComponent;
