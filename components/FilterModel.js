import React from 'react';
import { View, Text, Animate, ScrollView, Modal, TouchableWithoutFeedback, Animated } from 'react-native';

import Colors from '../assets/constants/theme';


const FIlterModel = ({ isVisible, onClose }) => {

    const modalAnimatedValue = React.useRef(new Animated.Value(0)).current
    const [showFilterModel, setShowFilterModel] = React.useState(isVisible);

    React.useEffect(() => {
        if (showFilterModel){
            Animated.timing(modalAnimatedValue, {
                toValue: 1,
                duration: 100,
                useNativeDriver: false
            }).start();
        }
        else{
            Animated.timing(modalAnimatedValue, {
                toValue: 0,
                duration: 100,
                useNativeDriver: false
            }).start(()=>onClose())
        }
    }, [showFilterModel])

    const modalY = modalAnimatedValue.interpolate({
        inputRange: [0,1],
        outputRange: [1000, 180]
    })
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={isVisible}
        >
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(40, 40, 40, 0.4)'
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
                    left: 0,
                    top: modalY,
                    width: "100%",
                    height: "100%",
                    padding: 20,
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    backgroundColor: Colors.white
                }}>

                </Animated.View>
            </View>

        </Modal>
    );
}

export default FIlterModel;