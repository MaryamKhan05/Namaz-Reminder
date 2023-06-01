import { StyleSheet } from "react-native";

import { getWidth,getHeight } from "@helpers"
import {AppliedTheme} from "@constants"
const theme= AppliedTheme()
const styles= StyleSheet.create({
    cardStyles:{
        width: getWidth(90),
        alignSelf:'center',
        elevation: 10,
        // justifyContent:'space-evenly',
        // paddingHorizontal: getWidth(5),
        // paddingVertical: getHeight(5),
        backgroundColor: theme.background.secondary,
        shadowColor: 'gray',
        borderRadius: 10,
        // backgroundColor:'red'

    }
})
export default styles