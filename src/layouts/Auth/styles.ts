import { StyleSheet } from "react-native";

import { getWidth as wp,getHeight as hp } from "@helpers"
import {AppliedTheme} from "@constants"
const theme= AppliedTheme()
const styles= StyleSheet.create({
  imageStyles:{
     width: wp(100),
    backgroundColor:'#407BE2'
    
  },
  logoImage:{
height: hp(50),
width:wp(30),
alignSelf:'center'
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
    flex:0.15,
    flexDirection:'row',
   
    justifyContent:'center',
    bottom:hp(2),
    alignItems:'flex-end',
  },
  
  card:{
    borderRadius:20,
    backgroundColor:'white',
    marginHorizontal:hp(3),
    elevation:10,
    shadowColor:'gray',
    paddingVertical:hp(2),
    paddingHorizontal:hp(4)
},
cardTitleStyles:{
  marginVertical:hp(3),
fontSize:20,
color:theme.button.Blue,
textTransform:'capitalize'

},
text:{
    fontFamily: 'PoppinsMedium',
    fontSize:14,
    textTransform:'capitalize',
    paddingRight:hp(1)
}
})
export default styles


