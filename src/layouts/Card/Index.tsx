import React from "react";


import {View,Text} from 'react-native'
import styles from "./Styles";
type Props={
    children: React.ReactNode
}

const Card:React.FC<Props>=({children})=>{
    return(
<View style={styles.cardStyles}>
{children}
</View>
    )
}
export default Card