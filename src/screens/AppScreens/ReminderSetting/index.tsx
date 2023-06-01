/** @format */

import { FC, useState, useEffect } from "react";
import { View, Text, Image, Pressable, FlatList, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import { HomeScreenHeaderComponent, NamazCard } from "@components";
import { images } from "@assets";
import { getWidth, getHeight } from "@helpers";
import { AppliedTheme } from "@constants";
import { Base, Card } from "@layouts";
const theme = AppliedTheme();
const ReminderSetting: FC = () => {
  const [min, setMin] = useState({})
  const data = [
    {
      id: 1,
      name: 'Fajar',
      minutes: 10
    },
    {
      id: 2,
      name: 'Dhuhr',
      minutes: 10
    },
    {
      id: 3,
      name: 'Asar',
      minutes: 10
    },
    {
      id: 4,
      name: 'Maghrib',
      minutes: 10
    },
    {
      id: 5,
      name: 'Isha',
      minutes: 10
    },

  ]
  useEffect(() => {
    const defaultMinutes = 10;
    const defaultMins = {};

    data.forEach((item) => {
      defaultMins[item.id] = defaultMinutes;
    });

    setMin(defaultMins);
  }, []);

 

  const handleChangeMinutes = (itemId, value) => {
    setMin((prevState) => ({
      ...prevState,
      [itemId]: value,
    }));
  };

  const renderItem = ({ item }) => {
    const itemId = item.id;
    return (

      <Card>
        <View key={item.id} style={styles.cardItem}>

          <Text style={styles.name}>{item.name}</Text>
          <View
            style={{
              flexDirection: 'row',
            }}
          >

            <Text style={styles.min}>Remind me Before</Text>
            <TextInput
              value={min[itemId] ? min[itemId].toString() : ''}
              style={{
                borderBottomWidth: 1,
                marginHorizontal: 5,
                paddingHorizontal: 5,
                borderColor: theme.border.LOW_BLACK
              }}
              onChangeText={(value) => handleChangeMinutes(itemId, value)}
            />
            <Text style={styles.min}> Minutes</Text>
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
      title={"Reminder Settings"}
      heading={"Reminder Setting"}
      text={"Set the Alarm to get Reminder before Prayer"}
    >
      <View>


        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparator}
        />

      </View>
    </Base>

  );
};
export default ReminderSetting;
