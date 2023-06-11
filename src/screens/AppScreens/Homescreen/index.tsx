/** @format */

import { FC, useContext, useEffect, useState } from "react";
import { View, Text, Image, Pressable, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";
import { HomeScreenHeaderComponent, NamazCard, Calendar } from "@components";
import { images } from "@assets";
import { getWidth, getHeight } from "@helpers";
import { AppliedTheme } from "@constants";
import { Card } from '@layouts';
// import LocationConfig from "../../../location/locationConfig";
import { LocationContext } from "../../../location/locationContext";
import { AuthContext } from "../../../Authentication/AuthContext";
import { fetchPrayerTimes } from "../../../api/prayerTimesApi";
import NamazTimings from "../../../components/NamazTimings";
const theme = AppliedTheme();


const HomeScreen: FC = () => {
  const { locationData } = useContext(LocationContext)
  const { city, errorMsg } = locationData
  const { user, signOut } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  const [prayer, setPrayer] = useState([])


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
    const fetchData = async () => {
      const year = new Date().getFullYear();
      const month = new Date().getMonth() + 1;
      const times = await fetchPrayerTimes(year, month);
      setPrayer(times);
      console.log('prayer data', prayer)
      setLoading(false)
    };
    // console.log('prayer time are', prayerTimes.Fajr)

    fetchData();
  }, []);
  // const renderItem = ({ item }) => {
  //   alert('in flatlist')
  //   // const prayerTime = new Date();
  //   // const [prayerHours, prayerMinutes, prayerAmOrPm] = item.time.split(/:| /);
  //   // prayerTime.setHours(Number(prayerHours) + (prayerAmOrPm === 'PM' ? 12 : 0));
  //   // prayerTime.setMinutes(Number(prayerMinutes));

  //   // const isPastPrayerTime = prayerTime.getTime() < currentTime.getTime();
  //   return (
  //     // <View
  //     //   style={{
  //     //     flexDirection: 'row',
  //     //     backgroundColor: 'white',
  //     //     marginVertical: 8,
  //     //     width: getWidth(90),
  //     //     alignSelf: 'center',
  //     //     borderRadius: 10
  //     //   }}
  //     // >
  //     //   <View
  //     //     style={[
  //     //       styles.prayerCard,
  //     //       { backgroundColor: generateRandomColor(), },
  //     //     ]} />
  //     //   <View
  //     //     style={[styles.row, { paddingVertical: 10 }]}
  //     //   >
  //     //     <Text style={[styles.prayerName, isPastPrayerTime && styles.strikeThrough]}>{item}</Text>
  //     //     <Text
  //     //       style={[styles.prayerTime, isPastPrayerTime && styles.strikeThrough]}
  //     //     >
  //     //       {item.time}
  //     //     </Text>
  //     //   </View>
  //     // </View>
  //     <Text>hello</Text>

  //   )
  // }





  const renderItem = ({ item }) => {
    // alert('hello list')
    // const prayerData = Object.entries(item); // Convert object to array of key-value pairs

    return (
      <View>
        {/* {prayerData.map(([prayerName, prayerTime]) => ( */}
        <View
          // key={prayerName}
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
              { backgroundColor: generateRandomColor() },
            ]}
          />
          <View style={[styles.row, { paddingVertical: 10 }]}>
            <Text style={styles.prayerName}>{item.name}</Text>
            <Text style={styles.prayerTime}>{item.time}</Text>
          </View>
        </View>
        {/* ))} */}
      </View>
    );
  };

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
          {loading ?
            (
              <ActivityIndicator color={'blue'} size={'large'} />
            ) : (
              <FlatList
                data={prayerTimes}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={ItemSeparatorComponent}
              />
            )
          }
          {/* <Text>{JSON.stringify(prayer)}</Text> */}
          {/* <NamazTimings /> */}
        </View>

      </View>
    </View>




    //  <View>
    //   <Text>City: {city}</Text>
    // </View>

    // <View>
    //   <Text>Welcome, {user.email}</Text>
    // </View>

  );
};
export default HomeScreen;
