import * as React from 'react';
import Colors from '../assets/constants/theme';
import { Dimensions, Text, View, StyleSheet, Animated, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import onBoardingData from '../assets/data/onBoardingData';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import TextButton from "./TextButton";




const OnBoarding = ({ navigation }) => {

    const width = Dimensions.get('window').width;
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const [focus, setFocus] = React.useState(true)


    const scrollPosition = Animated.divide(scrollX, Dimensions.get('window').width)

    let backgroundColor
    const changeColor = onBoardingData.map((item, index) => {
        backgroundColor = scrollPosition.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [Colors.lightBlue, Colors.lightGreen, Colors.lightOrange],
            extrapolate: 'extend'
        })

    })




    const Dots = () => {
        const dotPosition = Animated.divide(scrollX, Dimensions.get('window').width)
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                {
                    onBoardingData.map((item, index) => {
                        const dotColor = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: ['rgba(44, 185, 176, 0.2)', Colors.primary, 'rgba(44, 185, 176, 0.2)'],
                            extrapolate: "clamp"

                        })


                        return (
                            <Animated.View

                                key={`dot-${index}`}
                                style={{
                                    borderRadius: 5,
                                    marginHorizontal: 6,
                                    width: 10,
                                    height: 10,
                                    backgroundColor: dotColor,
                                    margin: 10
                                }}
                            />
                        )
                    })
                }
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: Colors.white
            }}>


            <Animated.View
                style={{
                    backgroundColor: backgroundColor,
                    flex: 4,
                    borderBottomRightRadius: 75,
                }}>
                <Animated.FlatList
                    data={onBoardingData}
                    keyExtractor={(item) => item.id}
                    horizontal
                    snapToInterval={Dimensions.get('window').width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={1000}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}

                    renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                width: Dimensions.get('window').width,
                                justifyContent: "center",
                                backgroundColor: 'transparent',
                            }}>
                                <Animated.View>

                                    <Text style={{
                                        textAlign: 'center',
                                        letterSpacing: 3,
                                        fontSize: 75,
                                        textTransform: 'uppercase',
                                        transform: [{ rotate: '-90deg' }, { translateY: -90 }],
                                        color: Colors.white,
                                        fontFamily: 'Poppins-Bold',
                                    }}>
                                        {item.title}
                                    </Text>
                                </Animated.View>
                            </View>
                        )
                    }}
                />

            </Animated.View>


            <View style={styles.detailsWrapper}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: backgroundColor }} />
                <View style={styles.detailsContainer}>
                    <Text style={{
                        margin: 0,
                        fontSize: 24,
                        color: Colors.black,
                        fontFamily: 'Poppins-Medium',
                        textAlign: 'center'
                    }}>
                        Wear First, Buy Later
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        color: Colors.secondary,
                        fontFamily: 'Poppins-Regular',
                        textAlign: 'center',
                    }}>
                        Hate returning items? Don’t worry! Try them on Virtually
                    </Text>
                    <Dots />


                    {/* Bottom Container */}
                    <View style={{
                        alignItems: 'center',
                        backgroundColor: Colors.white,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginVertical: 10,
                    }}>
                        <TextButton
                            label="Join Now"
                            buttonContainerStyle={{
                                backgroundColor: Colors.primaryTransparent,
                                borderRadius: 50,
                                height: 50,
                                justifyContent: 'center',
                                width: 130,
                                marginHorizontal: 10,
                            }}
                            labelStyle={{
                                color: Colors.primary,
                            }}
                            onPress ={()=> navigation.navigate('SignUp')}
                        >
                        </TextButton>

                        <TextButton
                            label="Login"
                            buttonContainerStyle={{
                                backgroundColor: Colors.primary,
                                borderRadius: 50,
                                height: 50,
                                justifyContent: 'center',
                                width: 130,
                                marginHorizontal: 10,

                            }}
                            onPress ={()=> navigation.navigate('SignIn')}
                        >
                        </TextButton>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsWrapper: {
        backgroundColor: Colors.white,
        flex: 2
    },
    detailsContainer: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: 75,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 40,
        paddingLeft: 40,
        paddingTop: 30,
        paddingBottom: 30,
        flex: 1
    },

    btnPressed: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        textAlign: 'center',
        color: Colors.primary,
        height: 45
    },
});

export default OnBoarding;
