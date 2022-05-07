import React from 'react'
import {
    Text,
    View,
} from 'react-native';
import Auth from "@react-native-firebase/auth";
import { StackActions } from '@react-navigation/native';


const SplashScreen = ({ navigation }) => {

    React.useEffect(() => {
        setTimeout(() => {
            Auth().onAuthStateChanged(user => {
                const routeName = user !== null ? "Home" : "Login"
                navigation.replace(routeName)
            })
        }, 1000)
        return () => { }
    }, [])


    return (
        <View>
            <Text>Splash Screen</Text>
        </View>
    )
}

export default SplashScreen