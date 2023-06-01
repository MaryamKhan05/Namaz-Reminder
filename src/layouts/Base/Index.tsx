import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, } from "react-native";
import styles from "./Styles";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getWidth } from "@helpers";
import { AppliedTheme } from "@constants";
import { SafeAreaView } from "react-native-safe-area-context";
const theme = AppliedTheme();
type Props = {
    children: React.ReactNode;
    title: string;
    heading: string;
    text: string;
}

const Base: React.FC<Props> = ({ children, title, heading, text }) => {
    return (
        <SafeAreaView
            style={styles.container}
        >

            <View
                style={styles.innerContainer}
            >

                <View
                    style={{
                        flexDirection: 'row',
                        padding: 15,
                        alignItems: 'center',
                        alignSelf: 'center'
                    }}
                >
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => alert('Pressed')}
                    >
                        <AntDesign
                            name={'left'}
                            size={15}
                            color={'black'}
                        />
                    </TouchableOpacity>
                    <Text
                        style={{
                            width: getWidth(80),
                            // backgroundColor: 'pink',
                            textAlign: 'center',
                            alignSelf: "center",
                            fontFamily: 'FuturaMediumBT',
                            fontSize: 16
                        }}
                    >{title}</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} >
                    <View>
                        <Text style={styles.heading}>{heading}</Text>
                        <Text style={styles.text}>{text}</Text>
                    </View>
                    <View>


                        {children}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}



export default Base