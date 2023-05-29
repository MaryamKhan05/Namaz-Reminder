/** @format */

import { FC } from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import { HomeScreenHeaderComponent, NamazCard } from "@components";
import { images } from "@assets";
import { getWidth, getHeight } from "@helpers";
import { AppliedTheme } from "@constants";
const theme = AppliedTheme();
const ReminderSetting: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Reminder Setting</Text>
    </View>
  );
};
export default ReminderSetting;
