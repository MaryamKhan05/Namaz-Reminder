import React from "react";




import {
   HomeScreen
} from '@screens'
import { createDrawerNavigator } from "@react-navigation/drawer";
const drawer = createDrawerNavigator()

type ScreenParams={
    HomeScreen: string|undefined
   
}

const AuthStack:React.FC=()=>{
return(
    <drawer.Navigator>
        <drawer.Screen 
        name="HomeScreen"
        component={HomeScreen}
        />
       
    </drawer.Navigator>
)
}

export default AuthStack