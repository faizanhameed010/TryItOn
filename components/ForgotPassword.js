import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';


import Feature from 'react-native-vector-icons/Feather';

import Colors from '../assets/constants/theme';
import icons from "../assets/constants/icons";

import AuthLayout from './AuthLayout'
import FormInput from "./FormInput";
import CustomSwitch from "./CustomSwitch";
import TextButton from "./TextButton";
import { utils } from "../utils"


Feature.loadFont();

const ForgotPassword = ( {navigation} ) => {
    const [email, setEmail] = React.useState("")
    const [emailError, setEmailError] = React.useState("")
    const [emailfocus, setEmailFocus] = React.useState(false)

    function isEnabledForgotPass() {
        return email != "" && emailError == ""
    }


    return (
        <AuthLayout
            image={require('../assets/images/ForgotPassword.png')}
            title="Forgot Password"
            footerText="Did'nt Work?"
            footerButton="Try another way"
            navigation={navigation}
        >
            <View style={{
                flex: 1,
            }}>

                {/* Form Input Section */}
                <FormInput
                    prependComponent={
                        <View style={{
                            justifyContent: 'center',
                            marginHorizontal: 15
                        }}>
                            <Feature
                                name='mail'
                                size={22}
                                color={email == "" ? Colors.lightGray : (email != "" && emailError == "") ? Colors.primary : Colors.red}
                            />

                        </View>
                    }
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                    placerholder="Email"
                    keyboradType='email-address'
                    autoCompleteType='email'
                    onChange={(value) => {
                        //Validate Email
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View style={{
                            justifyContent: 'center',
                            marginHorizontal: 15
                        }}>
                            <Feature
                                name={email == "" || (email != "" & emailError == "") ? 'check-circle' : 'x-circle'}
                                size={22}
                                color={email == "" ? Colors.lightGray : (email != "" && emailError == "") ? Colors.primary : Colors.red}
                            />
                        </View>
                    }
                />


                {/* Login Button Section */}
                <View style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <TextButton
                        label="Reset Password"
                        disabled={isEnabledForgotPass() ? false : true}
                        buttonContainerStyle={{
                            backgroundColor: isEnabledForgotPass() ? Colors.primary : Colors.primaryTransparent,
                            borderRadius: 50,
                            height: 50,
                            paddingHorizontal: 30,
                            justifyContent: 'center'
                        }}
                        onPress= {() => navigation.navigate('Home')}
                    >
                    </TextButton>
                </View>
            </View>
        </AuthLayout>
    )
}
export default ForgotPassword;