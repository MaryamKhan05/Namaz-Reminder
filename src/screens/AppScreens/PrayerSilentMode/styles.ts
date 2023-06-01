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
    padding:20,
    marginVertical: 10,
    justifyContent: "space-around",
  },
  separator: {
    height: getHeight(2),
  },
  name: {
    fontFamily: "FuturaMediumBT",
    fontSize: 16,
    color: theme.text.Black,
  },
  min: {
    fontFamily: "FuturaBookBT",
    fontSize: 14,
    color: theme.text.Low_Black,
    marginBottom: 10,
    marginTop: 15,
  },
  timeContainer: {
    backgroundColor: theme.button.Gray,
    padding: getHeight(1),
    borderRadius: 10,
  },
  time:{
   alignSelf:'center'
  }
});
export default styles;
