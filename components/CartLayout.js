import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Feature from 'react-native-vector-icons/Feather';
import Colors from '../assets/constants/theme';
import IconButton from './IconButton';
import TextButton from './TextButton';
import { useNavigation } from '@react-navigation/native';



const CartLayout = ({ title, cartQuantity = 0, children, price = 100, onPress}) => {
    const navigation = useNavigation();
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
                    }}>
                    <View
                        style={{
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <IconButton
                            containerColor={Colors.whiteTransparent10}
                            icon={"arrow-left"}
                            iconColor={Colors.white}
                            onPress={() => navigation.goBack(null)}
                        />
                        <Text style={{
                            letterSpacing: 3,
                            fontSize: 16,
                            color: Colors.white,
                            fontFamily: 'Poppins-Regular',
                        }}>
                            {title}
                        </Text>
                        <IconButton
                            containerColor={Colors.whiteTransparent10}
                            icon={"shopping-cart"}
                            iconColor={Colors.white}
                            onPress={() => console.log("Cart")}
                            quatity={cartQuantity}
                            quatityBackgroundColor={Colors.white}
                            quatityTextColor={Colors.primary}
                        />
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: 30,
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: Colors.white,
                            fontFamily: 'Poppins-Regular',
                        }}>
                            {cartQuantity} Items added
                        </Text>
                    </View>
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
                            minHeight:420
                        }}>
                            {children}

                        </View>
                    </View>
                </View>

                {/* Content/Children */}



                {/* Footer */}
                <View style={{
                    backgroundColor: Colors.secondary,
                    width: Dimensions.get('window').width,
                    flexDirection: 'row',
                    padding: 30,
                    justifyContent: 'space-evenly',

                }}>
                    <View>
                    <Text style={{
                            fontSize: 12,
                            color: Colors.white,
                            textAlign: 'center',
                            fontFamily: 'Poppins-Regular',
                        }}>
                            Total Payment:

                        </Text>
                        <Text style={{
                             fontSize: 18,
                             color: Colors.primary,
                             textAlign: 'center',
                             fontFamily: 'Poppins-Medium',
                        }}>
                            ${price.toFixed(2)}
                        </Text>
                    </View>
                    <TextButton
                        label="Check Out"
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
                        onPress={onPress}
                    >
                    </TextButton>

                </View>
            </View>
        </View>
    )
}


export default CartLayout