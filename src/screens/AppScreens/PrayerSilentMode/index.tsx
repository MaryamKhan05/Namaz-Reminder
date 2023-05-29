/** @format */

import { FC } from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import { HomeScreenHeaderComponent, NamazCard } from "@components";
import { images } from "@assets";
import { getWidth, getHeight } from "@helpers";
import { AppliedTheme } from "@constants";
const theme = AppliedTheme();
const PrayerSilentMode: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Prayer Silent Mode</Text>
    </View>
  );
};
export default PrayerSilentMode;
