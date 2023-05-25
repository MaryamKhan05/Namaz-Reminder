import { StyleSheet } from "react-native";

import { getWidth as wp,getHeight as hp } from "@helpers"
import {AppliedTheme} from "@constants"
const theme= AppliedTheme()
const styles= StyleSheet.create({
    textInputs:{
       
        borderWidth: 2,
        borderRadius: 10,
        borderColor: theme.button.Blue,
        paddingHorizontal:5,
        height: hp(6),
        marginVertical:hp(2),
        width: wp(70)
    },
  
    inputText:{
        color: theme.button.Blue
       },
    inputLabelShift:{
       backgroundColor: 'white',
       },
      
})

export default styles