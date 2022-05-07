import React from "react";
import { Text, View, TouchableOpacity } from "react-native";


import Colors from '../assets/constants/theme';

const TextButton = ({ buttonContainerStyle, disabled, label, labelStyle, onPress }) => {
    return (
        <TouchableOpacity style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.primary,
            ...buttonContainerStyle
        }}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={{
                color: Colors.white,
                fontFamily: 'Poppins-Regular',
                fontSize: 15,
                textAlign: 'center',
                ...labelStyle
            }}>
                {label}
            </Text>

        </TouchableOpacity>
    )
}


export default TextButton