/** @format */

import { FC, useState, useEffect } from "react";
import { View, Text, Image, Pressable, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { HomeScreenHeaderComponent, NamazCard } from "@components";

import { getWidth, getHeight } from "@helpers";
import { AppliedTheme } from "@constants";
import { Base, Card } from "@layouts";
import { images } from "@assets";
const theme = AppliedTheme();
const PrayerSilentMode: FC = () => {
  const [toggle, setToggle] = useState(false)

  const data = [
    {
      id: 1,
      name: 'Fajar',
      sTime: '4:28 ',
      eTime: '4:28 '
    },
    {
      id: 2,
      name: 'Zohar',
      sTime: '4:28 ',
      eTime: '4:28 '
    },
    {
      id: 3,
      name: 'Asar',
      sTime: '4:28 ',
      eTime: '4:28 '
    },
    {
      id: 4,
      name: 'Maghrib',
      sTime: '4:28 ',
      eTime: '4:28 '
    },
    {
      id: 5,
      name: 'Isha',
      sTime: '4:28 ',
      eTime: '4:28 '
    },
  ]

  const handleToggle = (itemId) => {
    setToggle((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };
  const renderItem = ({ item }) => {
    const itemId = item.id;
    return (

      <Card>
        <View key={item.id} style={styles.cardItem}>
          <View 
          style={{
            flexDirection:'row',
            justifyContent:'space-between'
          }}
          >

            <Text style={styles.name}>{item.name}</Text>
            <TouchableOpacity onPress={() => handleToggle(itemId)}>

              {toggle[itemId] ?
                <Image
                  source={images.on}
                />
                :
                <Image
                  source={images.off}
                />
              }
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',

            }}
          >
            <View>

              <Text style={styles.min}>Start Time</Text>
              <View style={styles.timeContainer}>

                <Text style={styles.time}>{item.sTime}</Text>
              </View>

            </View>
            <View
              style={{
                marginLeft: 20
              }}
            >

              <Text style={styles.min}>End Time</Text>
              <View style={styles.timeContainer}>

                <Text style={styles.time}>{item.eTime}</Text>
              </View>

            </View>

          </View>

        </View>
      </Card>

    )
  }
  const ItemSeparator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <Base
      title={"Silent Mode"}
      heading={"Prayer Silent Mode"}
      text={"Set the time to Auto Turn on Silent Mode During Prayer"}
    >

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
        showsVerticalScrollIndicator={false}
      />

    </Base>
  );
};
export default PrayerSilentMode;
