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
import TextButton from "./TextButton";
import { utils } from "../utils"
import auth from '@react-native-firebase/auth'
import PopModel from './PopModel';



Feature.loadFont();

const SignUp = ({ navigation }) => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfrimPassword] = React.useState("")


    const [emailError, setEmailError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")
    const [confirmPasswordError, setConfirmPasswordError] = React.useState("")


    const [showPassword, setShowPassword] = React.useState("")
    const [showConfirmPassword, setShowConfirmPassword] = React.useState("")


    const [phone, setPhone] = React.useState("")
    const [phoneError, setPhoneError] = React.useState("")
    const [phoneFocus, setPhoneFocus] = React.useState("")


    const [emailfocus, setEmailFocus] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [passFocus, setPassFocus] = React.useState(false)
    const [confirmPassFocus, setConfirmPassFocus] = React.useState(false)

    const [showPopModel, setshowPopModel] = React.useState(false);
    const [popModelText, setshowPopModelText] = React.useState("");



    function isEnabledSignUp() {
        return email != "" && password != "" && confirmPassword != "" && emailError == "" && confirmPasswordError == "" && passwordError == ""
    }

    const handleSignUp = async () => {
        try {
            const isUserCreated = await auth().createUserWithEmailAndPassword(email, password)
            setshowPopModelText("")
            setshowPopModel(true)
        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setshowPopModel(true)
                setshowPopModelText('Email already in use!');
            }
        }
    }


    return (
        <AuthLayout
            image={require('../assets/images/SignUp.png')}
            title="Create Account"
            footerText="Already have an account?"
            footerButton="Login"
            navigation={navigation}
        >
            <View style={{
                flex: 1,
            }}>

                {/* Email Input */}
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





                {/* Phone Number Input */}
                {/* <FormInput
                    prependComponent={
                        <View style={{
                            justifyContent: 'center',
                            marginHorizontal: 15
                        }}>
                            <Feature
                                name='phone'
                                size={22}
                                color={phone == "" ? Colors.lightGray : (phone != "" && phoneError == "") ? Colors.primary : Colors.red}
                            />

                        </View>
                    }
                    onFocus={() => setPhoneFocus(true)}
                    onBlur={() => setPhoneFocus(false)}
                    placerholder="Phone Number"
                    keyboradType='numeric'
                    autoCompleteType='tel'
                    onChange={(value) => {
                        //Validate Email
                        utils.validateMobile(value, setPhoneError)
                        setPhone(value)
                    }}
                    errorMsg={phoneError}
                    appendComponent={
                        <View style={{
                            justifyContent: 'center',
                            marginHorizontal: 15
                        }}>
                            <Feature
                                name={phone == "" || (phone != "" & phoneError == "") ? 'check-circle' : 'x-circle'}
                                size={22}
                                color={phone == "" ? Colors.lightGray : (phone != "" && phoneError == "") ? Colors.primary : Colors.red}
                            />
                        </View>
                    }
                />
 */}

                {/* Password Input */}
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
                    onBlur={() => {
                        setPassFocus(false)
                        if (password == "")
                            setPasswordError("")
                    }}
                    placerholder="Password"
                    secureTextEntry={!showPassword}
                    autoCompleteType="password"

                    onChange={(value) => {
                        //Validate Password
                        utils.validatePassword(value, setPasswordError)
                        setPassword(value)
                    }}
                    errorMsg={passwordError}
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



                {/* Confrim Password */}
                <FormInput
                    prependComponent={
                        <View style={{
                            justifyContent: 'center',
                            marginHorizontal: 15
                        }}>
                            <Feature
                                name='lock'
                                size={22}
                                color={confirmPassword == "" ? Colors.lightGray : (confirmPassword != "" && confirmPasswordError == "" && password == confirmPassword) ? Colors.primary : Colors.red}

                            />

                        </View>
                    }
                    onFocus={() => {
                        setConfirmPassFocus(true)
                    }}
                    onBlur={() => {
                        setConfirmPassFocus(false)
                        if (confirmPassword && password == "")
                            setConfirmPasswordError("")
                    }}
                    placerholder="Confirm Password"
                    secureTextEntry={!showConfirmPassword}
                    autoCompleteType="password"
                    onChange={(value) => {
                        //Validate Password
                        utils.confirmPassword(value, password, setConfirmPasswordError)
                        setConfrimPassword(value)
                    }}
                    errorMsg={confirmPasswordError}
                    appendComponent={
                        <TouchableOpacity style={{
                            width: 40,
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            marginHorizontal: 15
                        }}
                            onPress={() => setShowConfirmPassword(!showConfirmPassword)}

                        >
                            <Feature
                                name={showConfirmPassword ? 'eye' : 'eye-off'}
                                size={22}
                                color={Colors.lightGray}
                            />
                        </TouchableOpacity>
                    }
                />



                {/* SignUp Button Section */}
                <View style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <TextButton
                        label="Sign Up"
                        disabled={isEnabledSignUp() ? false : true}
                        buttonContainerStyle={{
                            backgroundColor: isEnabledSignUp() ? Colors.primary : Colors.primaryTransparent,
                            borderRadius: 50,
                            height: 50,
                            paddingHorizontal: 30,
                            justifyContent: 'center'
                        }}
                        onPress={handleSignUp}
                    >
                    </TextButton>
                </View>


                {showPopModel &&
                    <PopModel
                        isVisible={showPopModel}
                        onClose={() => setshowPopModel(false)}
                        title={popModelText}
                        icontitle={popModelText == "" ? 'check' : 'x'}
                        backColor={popModelText == ""? Colors.primary : Colors.red}
                    />
                }
            </View>
        </AuthLayout>
    )
}

const styles = StyleSheet.create({

})

export default SignUp;