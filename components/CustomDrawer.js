import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Colors from '../assets/constants/theme';

import Firestore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';


const CustomDrawer = (props) => {

    
    const [user, setUser] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    // getting current user function
    function GetCurrentUser() {
        React.useEffect(() => {
            Auth().onAuthStateChanged(user => {
                if (user) {
                    Firestore().collection('users').doc(user.uid).get().then(snapshot => {
                        setUser(snapshot.data().FullName);
                        setEmail(snapshot.data().Email);
                    })
                }
                else {
                    console.log("Error")
                }
            })
        }, [])
        return user;
    }
    
    GetCurrentUser();

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                backgroundColor: Colors.primary,
                minHeight: 150,
                borderBottomRightRadius: 75
            }}>

            </View>
            <View style={{ minHeight: 75 }}>
                <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: Colors.primary }} />
                <View style={{
                    backgroundColor: Colors.white,
                    flex: 1,
                    borderTopLeftRadius: 75,
                    alignItems: 'center'
                }}>
                    <View style={{
                        height: 100,
                        width: 100,
                        borderRadius: 50,
                        backgroundColor: Colors.lightBlue,
                        top: -50
                    }}>

                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 22, color: Colors.secondary, fontFamily: 'Poppins-Regular' }}>{user}</Text>
                <Text style={{ fontSize: 14, color: Colors.lightGray, fontFamily: 'Poppins-Regular' }}>{email}</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: Colors.secondary }}>
                <View style={{ flex: 1, backgroundColor: Colors.white, borderBottomRightRadius: 75, padding: 10 }}>
                    <DrawerContentScrollView {...props}>
                        <DrawerItemList {...props} />
                    </DrawerContentScrollView>
                </View>
            </View>

            <View style={{ height: 75, backgroundColor: Colors.red, borderTopLeftRadius: 75 }}>
                <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: Colors.white, height: 75 }} />
                <View style={{
                    backgroundColor: Colors.secondary,
                    borderTopLeftRadius: 75,
                    alignItems: 'center',
                    height: 75
                }}>
                </View>
            </View>

        </View>

    )
}

export default CustomDrawer