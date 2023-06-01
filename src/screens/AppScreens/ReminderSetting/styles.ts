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
  cardItem: {
    padding: getHeight(1.5),
    marginVertical: 10,
    // backgroundColor:'red',
    flexDirection: "row",
    justifyContent: "space-around",
  },
  separator: {
    // height: 1,
    // backgroundColor: 'gray',
    height: getHeight(2),
  },
  name: {
    fontFamily: "FuturaMediumBT",
    fontSize: 16,
    color:theme.text.Black,
    width:getWidth(18)
    
  },
  min: {
    fontFamily: "FuturaBookBT",
    fontSize: 14,
    color:theme.text.Low_Black
  },
});
export default styles;
