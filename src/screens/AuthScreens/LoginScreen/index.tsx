import React, { useContext, useState } from 'react'


import { View, Text, TouchableOpacity } from 'react-native'
import { Auth } from '@layouts'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { TextInput, Button } from '@components'
// import { handleSignIn,handleSignUp } from '../../../firebase/firebaseAuth'
import { AuthContext } from '../../../Authentication/AuthContext'
const LoginScreen: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signIn}= useContext(AuthContext)
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Auth cardTitle='Login' bottomTitle='Not Have An Account ?' bottomTitlepressablePart='Create New'>
                <TextInput
                    value={email}
                    onChangeText={(text: string) => { setEmail(text) }}
                    iconFamily='MaterialCommunityIcons'
                    iconName='email'
                    label='Email'
                    keyboardtype='email'
                />
                <TextInput
                    value={password}
                    onChangeText={(text: string) => { setPassword(text) }}
                    iconFamily='AntDesign'
                    iconName='lock1'
                    label='Password'
                    keyboardtype='default'
                />

                <TouchableOpacity style={{ alignSelf: 'flex-end', marginVertical: 8 }}>

                    <Text style={{ color: '#407BE2' }}>Forgot Password?</Text>
                </TouchableOpacity>

                <Button
                    title='Login'
                    // onPress={() => { alert('Pressed') }}
                    // onPress={() => handleSignIn(email, password)}
                    onPress={()=> signIn(email, password)}
                />








            </Auth>
        </View>
    )
}

export default LoginScreen