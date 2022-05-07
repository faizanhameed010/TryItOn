import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';

import Feature from 'react-native-vector-icons/Feather';

import Colors from '../assets/constants/theme';

import AuthLayout from './AuthLayout'
import TextButton from "./TextButton";
import OTPInputView from "@twotalltotems/react-native-otp-input";


Feature.loadFont();

const Otp = ({ navigation }) => {
    const [timer, setTimer] = React.useState(60)
    const [filled, setFilled] = React.useState(false)

    React.useEffect(() => {
        let interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0)
                    return prevTimer - 1
                else
                    return prevTimer
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    function isEnabledOtp() {
        return filled
    }

    return (
        <AuthLayout
            image={require('../assets/images/Otp.png')}
            title="Verification Code"
            footerText=""
            footerButton=""
            navigation={navigation}
        >
            <View style={{
                flex: 1,
            }}>

                {/* OTP Input Section */}
                <View style={{
                    paddingHorizontal: 30,
                    paddingBottom: 20
                }}>
                    <OTPInputView
                        pinCount={6}
                        style={{
                            width: '100%',
                            height: 50,
                        }}

                        codeInputFieldStyle={{
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            backgroundColor: Colors.white,
                            borderColor: Colors.primary,
                            borderWidth: 1,
                            color: Colors.black
                        }}

                        onCodeFilled={(code) => {
                            console.log(code)

                        }}
                        onCodeChanged={(code) => {
                            if (code > 99999)
                                setFilled(true)
                            else
                                setFilled(false)
                        }}

                        keyboardType='numeric'

                    />

                </View>

                {/* Timer Section */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingHorizontal: 30
                }}>
                    <Text style={{
                        color: Colors.black,
                        fontSize: 15,
                        fontFamily: 'Poppins-Regular',
                    }}>
                        Did'nt recieve code?
                    </Text>
                    <TextButton
                        label={`Resend (${timer}s)`}
                        disabled={timer == 0 ? false : true}
                        buttonContainerStyle={{ backgroundColor: null, marginLeft: 10 }}
                        labelStyle={{ color: Colors.primary, fontSize: 15, fontFamily: 'Poppins-SemiBold' }}
                        onPress={() => setTimer(60)}
                    >

                    </TextButton>

                </View>

                {/*Button Section */}
                <View style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 20 }}>
                    <TextButton
                        label="Verify Code"
                        disabled={isEnabledOtp() ? false : true}
                        buttonContainerStyle={{
                            backgroundColor: isEnabledOtp() ? Colors.primary : Colors.primaryTransparent,
                            borderRadius: 50,
                            height: 50,
                            paddingHorizontal: 30,
                            justifyContent: 'center'
                        }}
                        onPress={() => navigation.navigate('Home')}
                    >
                    </TextButton>
                </View>
            </View>
        </AuthLayout>
    )
}
export default Otp;