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
//import { authentication } from '../firebase';
import auth from "@react-native-firebase/auth";
import PopModel from './PopModel';


Feature.loadFont();

const SignIn = ({ navigation }) => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")
    const [showPassword, setShowPassword] = React.useState("")
    const [saveMe, setSaveMe] = React.useState(false)
    const [emailfocus, setEmailFocus] = React.useState(false)
    const [passFocus, setPassFocus] = React.useState(false)

    const [showPopModel, setshowPopModel] = React.useState(false);
    const [popModelText, setshowPopModelText] = React.useState("");

    function isEnabledSignIn() {
        return email != "" && password != "" && emailError == ""
    }

    const handleSignIn = async () => {
        try {
            const isUserCreated = await auth().signInWithEmailAndPassword(email, password)
            navigation.replace('Home')
        }
        catch (error) {
            setshowPopModel(true)
            if (error.code === 'auth/user-not-found')
                setshowPopModelText('Account not Found')
            else if (error.code === 'auth/wrong-password')
                setshowPopModelText('Incorrect password! Try again')

        }
    }


    return (
        <AuthLayout
            image={require('../assets/images/Login.png')}
            title="Welcome Back"
            footerText="Don’t have an account?"
            footerButton="Sign Up"
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

                <FormInput
                    prependComponent={
                        <View style={{
                            justifyContent: 'center',
                            marginHorizontal: 15
                        }}>
                            <Feature
                                name='lock'
                                size={22}
                                color={password == "" ? Colors.lightGray : (password != "" && passwordError == "") ? Colors.primary : Colors.red}
                            />

                        </View>
                    }
                    onFocus={() => setPassFocus(true)}
                    onBlur={() => setPassFocus(false)}
                    placerholder="Password"
                    secureTextEntry={!showPassword}
                    autoCompleteType="password"
                    onChange={(value) => {
                        //Validate Password
                        utils.validatePassword(value, setPasswordError)
                        setPassword(value)
                    }}
                    //errorMsg={passwordError}
                    appendComponent={
                        <TouchableOpacity style={{
                            width: 40,
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            marginHorizontal: 15
                        }}
                            onPress={() => setShowPassword(!showPassword)}

                        >
                            <Feature
                                name={showPassword ? 'eye' : 'eye-off'}
                                size={22}
                                color={Colors.lightGray}
                            />
                        </TouchableOpacity>
                    }
                />



                {/* Save me & Forgot Password Section */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 30,
                }}>
                    <CustomSwitch
                        value={saveMe}
                        onChange={(value) => setSaveMe(value)}
                    />
                    <TouchableOpacity>
                        <Text style={{
                            fontSize: 15,
                            color: Colors.primary,
                            fontFamily: 'Poppins-Regular',
                            textAlign: 'center',
                        }}
                            onPress={() => navigation.navigate('ForgotPassword')}
                        >
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>
                </View>


                {/* Login Button Section */}
                <View style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <TextButton
                        label="Log into you account"
                        disabled={isEnabledSignIn() ? false : true}
                        buttonContainerStyle={{
                            marginVertical: 30,
                            backgroundColor: isEnabledSignIn() ? Colors.primary : Colors.primaryTransparent,
                            borderRadius: 50,
                            height: 50,
                            paddingHorizontal: 30,
                            justifyContent: 'center'
                        }}
                        onPress={handleSignIn}
                    >
                    </TextButton>
                </View>

                {showPopModel &&
                    <PopModel
                        isVisible={showPopModel}
                        onClose={() => setshowPopModel(false)}
                        title={popModelText}
                        icontitle={popModelText == "" ? 'check' : 'x'}
                        backColor={popModelText == "" ? Colors.primary : Colors.red}
                    />
                }



            </View>
        </AuthLayout>
    )
}

const styles = StyleSheet.create({
    buttonPrimary: {
        marginVertical: 30,
        backgroundColor: Colors.primary,
        borderRadius: 30,
        height: 50,
        paddingHorizontal: 30,
        justifyContent: 'center'
    },
    buttonPrimaryText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        textAlign: 'center',
        color: Colors.white,
    },
})

export default SignIn;