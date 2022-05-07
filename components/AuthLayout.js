import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import Colors from '../assets/constants/theme';

import { KeyboardAwareView } from 'keyboard-aware-view';


const AuthLayout = ({ navigation, image, title, children, footerText, footerButton }) => {
    return (

        <View style={{
            flex: 1,
            backgroundColor: Colors.white,
        }}>
            <View style={{
                justifyContent: 'space-between',
                flex: 1,
            }}>
                {/* Header Image */}
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: Colors.primary,
                        borderBottomLeftRadius: 75,
                        padding: 10,
                        flex: 2,

                    }}>

                    <Image source={image} style={{ resizeMode: 'center', height: 200 }}>

                    </Image>
                </View>



                {/* Title */}
                <View>
                    <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: Colors.primary }} />
                    <View style={{
                        backgroundColor: Colors.white,
                        borderTopRightRadius: 75,
                        height: 75,
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 28,
                            color: Colors.black,
                            fontFamily: 'Poppins-SemiBold',
                        }}>
                            {title}
                        </Text>
                    </View>
                </View>



                {/* Content/Children */}

                <View style={{
                    backgroundColor: Colors.secondary,
                    flex: 2.5
                }}>
                    <View style={{
                        backgroundColor: Colors.white,
                        flex: 1,
                        borderBottomLeftRadius: 65,
                        borderBottomRightRadius: 65
                    }}>
                        {children}
                    </View>
                </View>




                {/* Footer */}
                <View style={{
                    backgroundColor: Colors.secondary,
                    width: Dimensions.get('window').width,
                    flexDirection: 'row',
                    padding: 30,
                    justifyContent: 'center',

                }}>
                    <Text style={{

                        fontSize: 15,
                        color: Colors.white,
                        textAlign: 'center',
                        fontFamily: 'Poppins-Regular',
                    }}>
                        {footerText}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            if (footerButton == 'Sign Up') {
                                navigation.replace('SignUp')
                            } else if(footerButton == 'Login'){
                                navigation.replace('SignIn');
                            } else if (footerButton == 'Try another way'){
                                navigation.navigate('Otp')
                            }
                        }}
                    >
                        <Text style={{
                            marginLeft: 5,
                            fontSize: 15,
                            color: Colors.primary,
                            textAlign: 'center',
                            fontFamily: 'Poppins-Regular',
                        }}>
                            {footerButton}
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>

        </View>
    )
}

export default AuthLayout;