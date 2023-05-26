import React, {FC, ReactNode} from 'react';
import {View, StatusBar, StyleSheet, Text, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getWidth, getHeight} from '@helpers';
import {AppliedTheme} from '@constants';
const theme = AppliedTheme();
interface HomeScreenHeaderProps {
  children: ReactNode;
}

const NamazCard: FC<HomeScreenHeaderProps> = ({children}) => {
  return <View style={styles.CardView}></View>;
};

const styles = StyleSheet.create({
  borderView: {
    position: 'absolute',
    left: getWidth(50),
  },
  CardView: {
    width: getWidth(90),
    height: getHeight(10),
    borderRadius: 10,
    backgroundColor: theme.border.white,
  },
});

export default NamazCard;
