import React,{useState} from 'react'
import {View,StyleSheet, KeyboardTypeOptions} from 'react-native'

import { FloatingLabelInput } from 'react-native-floating-label-input'
import { MaterialCommunityIcons,
    AntDesign,Entypo,EvilIcons,
    FontAwesome,Feather,FontAwesome5,Fontisto,
    Foundation,Ionicons,MaterialIcons,Octicons,SimpleLineIcons,Zocial } from '@expo/vector-icons';
import styles from './styles';
import {AppliedTheme} from "@constants"
const theme= AppliedTheme()
type Props={
    label:string
    iconName: string
    iconFamily:string
    value:string
    onChangeText: (text: string) => void;
    keyboardtype: "email"|"phoneNo"|'default'|"numeric"
}
const TextInput:React.FC<Props>=({iconFamily,iconName,label,onChangeText,value,keyboardtype})=>{
    let keyboardType= 'default';
    if (keyboardtype == 'email') {
        keyboardType = 'email-address'
    }
    if (keyboardtype == 'numeric') {
        keyboardType = 'numeric'
    }
  
    if (keyboardtype == 'phoneNo') {
        keyboardType = 'phone-pad'
    }
  
   else{
    keyboardtype='default'
   }
    const IconFamily = {
        AntDesign,
        FontAwesome,
        Ionicons,
        Entypo,
        MaterialCommunityIcons,
        MaterialIcons,
        FontAwesome5
    }[iconFamily];
   
    return(
        <FloatingLabelInput
        rightComponent={
            <IconFamily name={iconName} size={20} color={theme.button.Blue} />}
        label={label}
        value={value}
        style={[styles.textInputs,{backgroundColor:'green'}]}
        containerStyles={styles.textInputs}
        customLabelStyles={{fontSizeFocused:12,colorFocused:theme.button.Blue,colorBlurred:theme.button.Blue}}
        labelStyles={styles.inputLabelShift}
        inputStyles={styles.inputText}
        keyboardType={keyboardtype as KeyboardTypeOptions}
        onChangeText={onChangeText}

    />
    )
}
export default TextInput
