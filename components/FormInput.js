import React from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet
} from 'react-native';

import Colors from '../assets/constants/theme';
import { utils } from "../utils"

let passwordText;
let confirmPasswordText;
let cardText;

const FormInput = ({
    containerStyle,
    label,
    placerholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    onFocus,
    onBlur,
    secureTextEntry,
    keyboradType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    errorMsg = "",
    maxLength,
    value

}) => {
    const [text, setText] = React.useState("")
    const [error, setError] = React.useState("")
    const [focus, setFocus] = React.useState(false);



    return (
        <View style={{ paddingHorizontal: 30, ...containerStyle, }}>


            {/* Text Input */}
            <View
                style={focus ? {
                    borderColor: (error == "") ? Colors.primary : Colors.red,
                    flexDirection: 'row',
                    height: 50,
                    backgroundColor: Colors.white,
                    borderWidth: 1,
                    borderRadius: 50,
                } : {
                    borderColor: Colors.lightGray,
                    flexDirection: 'row',
                    height: 50,
                    backgroundColor: Colors.white,
                    borderWidth: 1,
                    borderRadius: 50,
                }}
                onFocus={() => {
                    setFocus(true)
                }}
                onBlur={() => {
                    setFocus(false)
                }}
            >
                {prependComponent}
                <TextInput
                    style={{
                        flex: 1,
                        ...inputStyle,
                        color: Colors.black
                    }}
                    onFocus={onFocus}
                    maxLength={maxLength}
                    onBlur={onBlur}
                    placeholder={placerholder}
                    placeholderTextColor={Colors.lightGray}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboradType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    value={value}
                    onChangeText={(text) => {
                        onChange(text)
                        if (placerholder == 'Email')
                            utils.validateEmail(text, setError)
                        else if (placerholder == 'Password') {
                            utils.validatePassword(text, setError)
                            passwordText = text;
                        }
                        else if (placerholder == 'Confirm Password') {
                            utils.confirmPassword(text, passwordText, setError)
                            confirmPasswordText = text;
                        }
                        else if (placerholder == 'Card Number') {
                            utils.validateInput(text, 19, setError)
                            cardText = text;
                        }
                    }}
                    onChange={(value) => {
                        setText(value)
                    }}
                />
                {appendComponent}
            </View>



            {/* Label & Error Msg */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={{ color: Colors.primary, fontSize: 15 }}>{label}</Text>
                <Text style={{ color: Colors.red, fontSize: 15, marginHorizontal: 15, marginVertical: 5 }}>{errorMsg}</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputOnFocus: {
        borderColor: Colors.primary,
        flexDirection: 'row',
        height: 50,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderRadius: 50,
    },
    inputOnBlur: {
        borderColor: Colors.lightGray,
        flexDirection: 'row',
        height: 50,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderRadius: 50,
    }
});

export default FormInput;