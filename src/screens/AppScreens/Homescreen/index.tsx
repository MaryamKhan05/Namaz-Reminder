/** @format */

import { FC } from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import { HomeScreenHeaderComponent, NamazCard } from "@components";
import { images } from "@assets";
import { getWidth, getHeight } from "@helpers";
const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerComView}>
        <HomeScreenHeaderComponent>
          <View style={styles.headerView}>
            <View style={styles.profileMainView}>
              <View>
                <Image
                  source={require("../../../../assets/icons/user.png")}
                  style={styles.image}
                />
              </View>
              <View style={styles.textView}>
                <Text style={styles.salamText}>Salam,</Text>
                <Text style={styles.nameStyle}>Nouman Imran</Text>
              </View>
            </View>
            <View style={styles.profileMainView}>
              <View style={styles.iconView}>
                <Pressable
                  style={styles.iconStyle}
                  onPress={() => alert("hello")}
                >
                  <Image source={images.setting} style={styles.iconImage} />
                </Pressable>
                <Pressable
                  style={styles.iconStyle}
                  onPress={() => alert("hello")}
                >
                  <Image
                    source={images.notification}
                    style={styles.iconImage}
                  />
                </Pressable>
              </View>
            </View>
          </View>
          <View style={[styles.headerView, { marginVertical: 0 }]}>
            <View style={[styles.textView, { height: getHeight(8) }]}>
              <Text style={styles.nextPlayerTxt}>Next Prayer:</Text>
              <Text style={styles.namazText}>TextAsar (Hanafi)</Text>
            </View>
          </View>
        </HomeScreenHeaderComponent>
        <NamazCard />
      </View>
    </View>
  );
};
export default HomeScreen;
