/** @format */

import { FC, useEffect, useState } from "react";
import { View, Text, Image, Pressable, FlatList } from "react-native";
import styles from "./styles";
import { HomeScreenHeaderComponent, NamazCard, Calendar } from "@components";
import { images } from "@assets";
import { getWidth, getHeight } from "@helpers";
import { AppliedTheme } from "@constants";
import { Card } from '@layouts';

const theme = AppliedTheme();


const HomeScreen: FC = () => {

  const prayerTimes: PrayerTime[] = [
    { id: 1, name: 'Fajr', time: '5:00 AM' },
    { id: 2, name: 'Dhuhr', time: '12:00 PM' },
    { id: 3, name: 'Asar', time: '5:00 PM' },
    { id: 4, name: 'Maghrib', time: '7:30 PM' },
    { id: 5, name: 'Isha', time: '9:00 PM' },
  ];
  const currentTime = new Date();

  const generateRandomColor = (): string => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  };

  useEffect(() => {

  }, [])

  const renderItem = ({ item }) => {
    const prayerTime = new Date();
    const [prayerHours, prayerMinutes, prayerAmOrPm] = item.time.split(/:| /);
    prayerTime.setHours(Number(prayerHours) + (prayerAmOrPm === 'PM' ? 12 : 0));
    prayerTime.setMinutes(Number(prayerMinutes));

    const isPastPrayerTime = prayerTime.getTime() < currentTime.getTime();
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          marginVertical: 8,
          width: getWidth(90),
          alignSelf: 'center',
          borderRadius: 10
        }}
      >
        <View
          style={[
            styles.prayerCard,
            { backgroundColor: generateRandomColor(), },
          ]} />
        <View
          style={[styles.row, { paddingVertical: 10 }]}
        >
          <Text style={[styles.prayerName, isPastPrayerTime && styles.strikeThrough]}>{item.name}</Text>
          <Text
            style={[styles.prayerTime, isPastPrayerTime && styles.strikeThrough]}
          >
            {item.time}
          </Text>
        </View>
      </View>


    )
  }
  const ItemSeparatorComponent = () => {
    return (
      <View
        style={{
          width: getHeight(2)
        }}
      ></View>
    )
  }


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
                <Text style={styles.nameStyle}>Maryam Khan</Text>
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
            <View style={[styles.textView, { height: getHeight(7) }]}>
              <Text style={styles.nextPlayerTxt}>Next Prayer:</Text>
              <Text style={styles.namazText}>Asar (Hanafi)</Text>
            </View>
            <View style={styles.timeLeftView}>
              <View
                style={[styles.textView, { color: theme.text.MEDIUM_White }]}
              >
                <Text
                  style={[
                    styles.nextPlayerTxt,
                    {
                      textAlign: "center",
                      fontSize: 14,
                      color: theme.text.Low_Black,
                    },
                  ]}
                >
                  Time Left
                </Text>
                <Text style={[styles.namazText, { color: theme.button.Blue }]}>
                  14 Mins
                </Text>
              </View>
            </View>
          </View>
          <View></View>
        </HomeScreenHeaderComponent>



        <View>
          <Calendar />
        </View>








        <View
          style={{
            marginTop: getHeight(0.4)
          }}
        >

          <FlatList
            data={prayerTimes}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={ItemSeparatorComponent}
          />
        </View>

      </View>
    </View>
  );
};
export default HomeScreen;
