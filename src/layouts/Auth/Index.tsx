import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Card from "../Card/Index";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { AppliedTheme } from "@constants";

const theme = AppliedTheme();

type Props = {
  bottomTitle?: string;
  bottomTitlepressablePart?: string;
  children: React.ReactNode;
  cardTitle:string
};

const Auth: React.FC<Props> = ({
  bottomTitle,
  children,
  cardTitle,
  bottomTitlepressablePart,
}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={{ flex: 0.40, borderRadius: 20 }}>
          <ImageBackground
            source={require("./../../../assets/images/test.png")}
            style={[
              styles.imageStyles,
              { borderBottomStartRadius: 25, justifyContent: "center", borderBottomEndRadius: 25 },
            ]}
            resizeMode="stretch"
          >
            <Image
              source={require("./../../../assets/images/logo.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </ImageBackground>
        </View>

        <View style={{ flex: 0.45, bottom: 70 }}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
            <View style={styles.card}>
              <Text style={styles.cardTitleStyles}>{cardTitle}</Text>
              {children}
            </View>
          </KeyboardAvoidingView>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.text}>{bottomTitle}</Text>
          <TouchableOpacity onPress={() => { alert('Pressed') }}>
            <Text style={[styles.text, { color: theme.button.Blue }]}>{bottomTitlepressablePart}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Auth;
