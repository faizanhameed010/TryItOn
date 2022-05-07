import React from 'react';
import {
    Text,
    View,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

import Colors from '../assets/constants/theme';

const CustomSwitch = ({ value, onChange }) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => onChange(!value)}
        >
            <View style={{ flexDirection: 'row' }}>
                <View style={value ? styles.switchOnContainer : styles.switchOffContainer}>
                    <View style={{
                        ...styles.dot,
                        backgroundColor: value ? Colors.white : Colors.lightGray
                    }}
                    />
                </View>

                <Text style={{
                    fontSize: 15,
                    color: Colors.secondary,
                    fontFamily: 'Poppins-Regular',
                    textAlign: 'center',
                    marginLeft: 10,
                }}>
                    Remember Me
                </Text>
            </View>


        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    switchOnContainer: {
        width: 40,
        height: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: Colors.primary,
        borderRadius: 10,
        borderColor: Colors.primary,
        borderWidth: 1,
        paddingRight: 2
    },
    switchOffContainer: {
        width: 40,
        height: 20,
        paddingLeft: 2,
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: Colors.lightGray,
        borderWidth: 1,
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6
    }
})

export default CustomSwitch;