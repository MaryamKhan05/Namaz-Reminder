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
    // backgroundColor: 'yellow',
    marginVertical: getHeight(6),
    width: getWidth(90),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
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
    fontWeight: "400",
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
    resizeMode: "center",
    width: getWidth(8),
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
});
export default styles;
