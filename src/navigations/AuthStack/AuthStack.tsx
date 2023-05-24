import React from "react";


import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
    LoginScreen,
    ForgetPasswordScreen,
    CreateAccountScreen,
    ResetPasswordScreen,
} from '@screens'
const stack = createNativeStackNavigator()

type ScreenParams={
    LoginScreen: string|undefined
    CreateAccountScreen: string|undefined
    ResetPassword: string|undefined
    ForgetPasswordScreen: string|undefined
   
}

const AuthStack:React.FC=()=>{
return(
    <stack.Navigator>
        <stack.Screen 
        name="LoginScreen"
        component={LoginScreen}
        />
        <stack.Screen 
        name="CreateAccountScreen"
        component={CreateAccountScreen}
        />
        <stack.Screen 
        component={ForgetPasswordScreen}
        name="ForgetPasswordScreen"
        />
        <stack.Screen 
        component={ResetPasswordScreen}
        name="ResetPasswordScreen"
        />
    </stack.Navigator>
)
}

export default AuthStack