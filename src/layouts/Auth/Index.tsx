import React from "react";

import {View,Text,Image, TouchableOpacity, ImageBackground, SafeAreaView} from 'react-native'
import Card from "../Card/Index";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import {AppliedTheme} from "@constants"
const theme= AppliedTheme()
type Props={
    bottomTitle?: string
    bottomTitlepressablePart?:string
    children: React.ReactNode
}

const Auth:React.FC<Props>=({bottomTitle,children,bottomTitlepressablePart})=>{
return(
//     <View style={styles.container}>
//     <LinearGradient
//     colors={['#8F94Fd', '#4E54C8']}
//     start={{x: 0, y: 0}}
//     end={{x: 1, y: 0}}>
//     <StatusBar
//     //   translucent
//       style="light"
//       backgroundColor="transparent"
     
//     />
//   </LinearGradient>
// <ImageBackground  source={require('./../../../assets/images/test.png')}
//               style={[styles.imageStyles,{borderBottomStartRadius:25,borderBottomEndRadius:25}]}
//               resizeMode="contain">

//   <LinearGradient
//     colors={['#8F94FB', '#4E54C8']}
//     start={{x: 0, y: 0}}
//     end={{x: 1, y: 0}}
//     >
//     <View style={styles.imageViewContainer}>
//             {/* <ImageBackground
//               source={require('./../../../assets/images/test.png')}
//               style={styles.imageStyles}
//             //   resizeMode="contain"
//             /> */}
//           </View>
    
//   </LinearGradient>
// </ImageBackground>
//            {/* <StatusBar style="light" backgroundColor="rgba(78, 84, 200, 0.8)"/>
//           <View style={styles.imageViewContainer}>
//             <ImageBackground
//               source={require('./../../../assets/images/test.png')}
//               style={styles.imageStyles}
//               resizeMode="contain"
//             />
//           </View>
//       <View style={{zIndex:-5}}>

//         <Card>
//             {children}
//         </Card>
//       </View>
//         <View>

//         <Text>{bottomTitle}</Text>
//         <TouchableOpacity>
//             <Text>{bottomTitlepressablePart}</Text>
//         </TouchableOpacity>
//         </View> */}
//         <View >

//         <Card>
//             {children}
//         </Card>
//       </View>
//         <View style={styles.bottomRow}>

//         <Text>{bottomTitle}</Text>
//         <TouchableOpacity>
//             <Text>{bottomTitlepressablePart}</Text>
//         </TouchableOpacity>
//         </View> 
//     </View>


<View style={styles.container}>
   
   


  <View style={{flex:0.4,backgroundColor:'gray',borderRadius:20,}}>

   <ImageBackground  source={require('./../../../assets/images/test.png')}
               style={[styles.imageStyles,{borderBottomStartRadius:25,justifyContent:'center',borderBottomEndRadius:25}]}
               resizeMode="stretch">

  <Image
  source={require('./../../../assets/images/logo.png')}
  style={styles.logoImage}
  resizeMode="contain"
  />
 </ImageBackground>
  </View>
 <View style={{flex:0.45,bottom:30}}>
    <View style={styles.card}>


        {children}
    
    </View>
 </View>
 <View style={styles.bottomRow}>
    <Text style={styles.text}>{bottomTitle}</Text>
    <TouchableOpacity onPress={()=>{alert('Pressed')}}>

    <Text style={[styles.text,{color:theme.button.Blue}]}>{bottomTitlepressablePart}</Text>
    </TouchableOpacity>
 </View>
</View>

)
}
export default Auth