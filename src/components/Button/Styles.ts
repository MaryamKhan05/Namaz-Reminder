
import {StyleSheet} from 'react-native'
import { getWidth as wp,getHeight as hp } from "@helpers"
import {AppliedTheme} from "@constants"
const theme= AppliedTheme()

const styles= StyleSheet.create({
    buttonStyles:{width:wp(70),
        alignSelf:'center',
        marginVertical:hp(3),
        backgroundColor:theme.button.Blue,
        justifyContent:'center',
        alignItems:'center', 
        height:hp(6),
        borderRadius:10
    }
})
export default styles