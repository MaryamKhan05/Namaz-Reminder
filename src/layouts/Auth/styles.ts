import { StyleSheet } from "react-native";

import { getWidth as wp,getHeight as hp } from "@helpers"
import {AppliedTheme} from "@constants"
const theme= AppliedTheme()
const styles= StyleSheet.create({
  imageStyles:{
    height: hp(60),
    width: wp(100),
    backgroundColor:'rgba(78, 84, 200, 0.8)',
  },
  imageViewContainer:{
    justifyContent:'space-evenly',
  },
  container:{
    flex:1,
    justifyContent:'space-between',
    backgroundColor:theme.background.Primary,
   
  },
  bottomRow:{
    flex: 0.25,
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'space-evenly'
  }
})
export default styles


