import React from 'react'

import {View,TouchableOpacity,Text} from 'react-native'
import styles from './Styles'
type Props={
    title:string
    onPress:()=>void
}

const Button:React.FC<Props>=({title,onPress})=>{
    return(
      

        <TouchableOpacity
        onPress={onPress}
        style={styles.buttonStyles}
        >
          <Text style={{color:'white'}}>{title}</Text>
        </TouchableOpacity>
       
    )
}
export default Button

