import React from "react";

import {View,Text,Image, TouchableOpacity, ImageBackground} from 'react-native'
import Card from "../Card/Index";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

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
    <LinearGradient
    colors={['#8F94Fd', '#4E54C8']}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}>
    <StatusBar
      translucent
      style="light"
      backgroundColor='rgba(78, 84, 200, 0.8)'
     
    />
  </LinearGradient>
   <ImageBackground  source={require('./../../../assets/images/test.png')}
               style={[styles.imageStyles,{borderBottomStartRadius:25,borderBottomEndRadius:25}]}
               resizeMode="contain">

  
 </ImageBackground>
 <View style={{bottom:60}}>
    <View >

    <Card>
        <Text>Hey</Text>
    </Card>
    </View>
 </View>
 <View>
    <Text>Login Now</Text>
 </View>
</View>
)
}
export default Auth