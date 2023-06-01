import { StyleSheet } from "react-native";

import { getWidth, getHeight } from "@helpers";
import { AppliedTheme } from "@constants";
const theme = AppliedTheme();

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background.primary,
    flex: 1,
  },
  heading: {
    fontFamily: "FuturaMediumBT",
    fontSize: 20,
    marginTop: 10,
  },
  text: {
    fontFamily: "FuturaBookBT",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 25,
    color: theme.text.Low_Black,
  },
  iconContainer: {
    padding: 7,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderColor: theme.border.LOW_BLACK,
  },
  innerContainer: {
    width: getWidth(90),
    alignSelf: "center",
    flex: 1,
  },
});

export default styles;
