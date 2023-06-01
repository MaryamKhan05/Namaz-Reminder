/** @format */

import { StyleSheet } from "react-native";
import { getWidth, getHeight } from "@helpers";
import { futureMD_BT, futureBK_BT } from "@assets";
import { AppliedTheme } from "@constants";
const theme = AppliedTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
  headerComView: {
    position: "absolute",
    justifyContent: "center",
  },
  textStyle: {
    color: "green",
    fontSize: 50,
  },
  headerView: {
    marginVertical: getHeight(6),
    width: getWidth(90),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textView: {
    height: getHeight(5),
    flexDirection: "column",
    justifyContent: "space-between",
  },
  profileMainView: {
    width: getWidth(45),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
  },
  image: {
    width: getHeight(7),
    height: getHeight(7),
    borderRadius: 8,
  },
  salamText: {
    color: theme.buttonText.Medium_White,
    fontSize: 12,
    fontFamily: "FuturaBookBT",
    fontWeight: "400",
  },
  nameStyle: {
    color: theme.text.White,
    fontSize: 16,
    fontFamily: "FuturaBookBT",
    fontWeight: "500",
  },
  iconView: {
    flexDirection: "row",
    width: getWidth(46),
    justifyContent: "flex-end",
  },
  iconStyle: {
    width: getWidth(10),
    height: getHeight(5),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.border.white,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: getWidth(2),
  },
  iconImage: {
    resizeMode: "contain",
    width: getWidth(5),
    height: getHeight(4),
  },
  namazText: {
    fontFamily: "FuturaMediumBT",
    color: theme.text.White,
    fontWeight: "400",
    fontSize: 20,
  },
  nextPlayerTxt: {
    fontFamily: "FuturaMediumBT",
    color: theme.buttonText.Medium_White,
    fontWeight: "400",
    fontSize: 14,
  },
  timeLeftView: {
    backgroundColor: theme.background.primary,
    width: getWidth(30),
    alignContent: "center",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  prayerCard: {
    width: getWidth(2),
    // height:getHeight(9),

    // marginBottom: 10,
    padding: getWidth(1),
    
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    // borderRadius: 20,
  },
  prayerName: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily:'FuturaMediumBT',
    // marginBottom: 5,
    // color: '#fff',
    color: theme.text.Medium_Black,
  },
  prayerTime: {
    fontSize: 16,
    // color: '#fff',
    color: theme.text.Medium_Black,
  },
  strikeThrough: {
    textDecorationLine: "line-through",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor:'red',
    width: getWidth("70"),
    alignSelf: "center",
    margin:getWidth(3),
  },
  calendarContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // stripContainer: {
  //   flexDirection: 'row',
  // },
  // stripDateContainer: {
  //   alignItems: 'center',
  //   marginRight: 10,
  //   paddingHorizontal: 10,
  //   paddingVertical: 5,
  //   borderRadius: 10,
  //   borderWidth: 1,
  //   borderColor: 'red',
  // },
  // selectedDateContainer: {
  //   backgroundColor: 'PINK',
  // },
  // stripDateText: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   color:'pink'
  // },
  
  // stripDayText: {
  //   fontSize: 14,
  //   color: 'red',
  //   backgroundColor:'red'
  // },
  
});
export default styles;
