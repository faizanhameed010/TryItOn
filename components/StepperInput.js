import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import Colors from '../assets/constants/theme';
import IconButton from '../components/IconButton';


const StepperInput = ({
    containerStyle,
    value = 1,
    onAdd,
    onMinus
}) => {
    return (
        <View style={{
            ...containerStyle,
        }}>
            <View style={{
                justifyContent: 'space-between',
                height: 90,
            }}>
                <IconButton
                    containerColor={Colors.lightGreen}
                    icon={"plus"}
                    iconColor={Colors.secondary}
                    onPress={onAdd}
                    containerStyle={{ height: 40, width: 40 }}
                    size={20}
                />
                <IconButton
                    containerColor={Colors.red}
                    icon={"minus"}
                    iconColor={value > 1 ? Colors.secondary : Colors.Gray}
                    onPress={onMinus}
                    containerStyle={{ height: 40, width: 40 }}
                    size={20}
                />
            </View>
        </View>
    )
}


export default StepperInput