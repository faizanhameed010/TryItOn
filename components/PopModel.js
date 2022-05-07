import React from 'react';
import { View, Text, Animate, ScrollView, Modal, TouchableWithoutFeedback, Animated } from 'react-native';

import Colors from '../assets/constants/theme';
import Feature from 'react-native-vector-icons/Feather';

Feature.loadFont()


const PopModel = ({ isVisible, onClose, title, icontitle, backColor}) => {

    const modalAnimatedValue = React.useRef(new Animated.Value(0)).current
    const [showFilterModel, setShowFilterModel] = React.useState(isVisible);

    React.useEffect(() => {
        if (showFilterModel) {
            Animated.timing(modalAnimatedValue, {
                toValue: 1,
                duration: 100,
                useNativeDriver: false
            }).start();
        }
        else {
            Animated.timing(modalAnimatedValue, {
                toValue: 0,
                duration: 100,
                useNativeDriver: false
            }).start(() => onClose())
        }
    }, [showFilterModel])

    const modalY = modalAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1000, 180]
    })
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={isVisible}
            style={{

                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(40, 40, 40, 0.4)',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                {/* Transparent Background */}
                <TouchableWithoutFeedback
                    onPress={() => setShowFilterModel(false)}>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    }}>
                    </View>
                </TouchableWithoutFeedback>

                <Animated.View style={{
                    position: 'absolute',
                    top: modalY,
                    width: "80%",
                    borderRadius: 30,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    backgroundColor: Colors.white
                }}>
                    <View style={{
                        padding: 30,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{
                            backgroundColor: backColor,
                            padding: 10,
                            borderRadius: 100
                        }}>
                            <Feature
                                name={icontitle}
                                size={100}
                                color={Colors.white}
                            />
                        </View>
                        <Text style={{
                            fontSize: 24,
                            color: Colors.secondary,
                            textAlign: 'center',
                            fontFamily: 'Poppins-SemiBold',
                            padding: 20
                        }}>{title || "Horah! Sign Up Succesful"}</Text>
                    </View>
                </Animated.View>
            </View>

        </Modal>
    );
}

export default PopModel;