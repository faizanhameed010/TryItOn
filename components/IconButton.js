import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import Feature from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../assets/constants/theme';


Feature.loadFont()
Ionicons.loadFont()
const IconButton = ({
    navigation,
    containerColor,
    containerStyle,
    icon,
    size = 22,
    iconColor,
    onPress,
    quatity,
    quatityBackgroundColor,
    quatityTextColor
}) => {
    return (
        <TouchableOpacity style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            padding: 10,
            height: 45,
            width: 45,
            borderRadius: 30,
            backgroundColor: containerColor,
            ...containerStyle
        }}
            onPress={onPress}
        >
            {(icon == "options") ?
                <Ionicons
                    name={icon}
                    size={size}
                    color={iconColor}
                /> :
                <Feature
                    name={icon}
                    size={size}
                    color={iconColor}
                />
            }
            {(!quatity) ?
                <View></View>
                :
                <View style={{
                    position: 'absolute',
                    top: -5,
                    right: -5,
                    height: 20,
                    width: 20,
                    alignContent: 'center',
                    justifyContent: 'center',
                    backgroundColor: quatityBackgroundColor,
                    borderRadius: 15,
                }}>
                    <Text style={{
                        color: quatityTextColor,
                        textAlign: 'center',
                        fontFamily: 'Poppins-Regular',
                        fontSize: 12,
                        justifyContent: 'center'
                    }}>
                        {quatity}
                    </Text>
                </View>
            }


        </TouchableOpacity>
    )
}


export default IconButton