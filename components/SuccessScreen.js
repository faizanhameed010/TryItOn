import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import Feature from 'react-native-vector-icons/Feather';
import Colors from '../assets/constants/theme';
import IconButton from './IconButton';
import TextButton from './TextButton';
import FormInput from "./FormInput";


const SuccessScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.white,
        }}>
            <View style={{
                justifyContent: 'space-between',
                flex: 1,
            }}>
                {/* Header */}
                <View
                    style={{
                        justifyContent: 'space-between',
                        backgroundColor: Colors.primary,
                        borderBottomLeftRadius: 75,
                        flex: 1,
                        overflow: 'hidden'
                    }}>
                    <Image
                        source={require('../assets/images/bg_pattern.png')}
                        style={{ resizeMode: 'cover', width: Dimensions.get('window').width, height: '100%' }}
                    />
                </View>

                <View style={{ flex: 3.5, }}>
                    <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: Colors.primary, }} />
                    <View style={{
                        backgroundColor: Colors.secondary,
                        flex: 1,
                        borderTopRightRadius: 75,
                    }}>
                        <View style={{
                            backgroundColor: Colors.white,
                            borderTopRightRadius: 75,
                            borderBottomLeftRadius: 65,
                            borderBottomRightRadius: 65,
                            overflow: 'hidden',
                            minHeight: 420,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 20
                        }}>
                            <View style={{
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                height: '90%'
                            }}>
                                <IconButton
                                    containerStyle={{
                                        width: 100,
                                        height: 100,
                                        borderRadius: 100,
                                        color: Colors.primaryTransparent
                                    }}
                                    containerColor={Colors.primaryTransparent}
                                    icon={"x"}
                                    size={45}
                                    iconColor={Colors.primary}
                                />
                                <Text style={{ textAlign: 'center', fontSize: 24, color: Colors.secondary, fontFamily: 'Poppins-Medium' }}>Congrats! Order has been placed</Text>
                                <Text style={{ textAlign: 'center', fontSize: 16, color: Colors.secondary, fontFamily: 'Poppins-ligth' }}>Order should arrive within 4 working days.</Text>
                                <TextButton
                                    label="Back to Home"
                                    onPress={() => navigation.reset({
                                        index: 0,
                                        routes: [{ name: 'Home' }],
                                    })}
                                    buttonContainerStyle={{
                                        backgroundColor: Colors.primary,
                                        borderRadius: 50,
                                        height: 50,
                                        justifyContent: 'center',
                                        width: 130,
                                        marginHorizontal: 10,
                                    }}
                                    labelStyle={{
                                        color: Colors.white,
                                    }}
                                >
                                </TextButton>
                            </View>


                        </View>
                    </View>
                </View>



                {/* Footer */}
                <View style={{
                    backgroundColor: Colors.secondary,
                    width: Dimensions.get('window').width,
                    flexDirection: 'row',
                    padding: 30,
                    justifyContent: 'space-evenly',

                }}>


                </View>
            </View>
        </View>
    )
}


export default SuccessScreen