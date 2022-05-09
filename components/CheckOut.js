import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import CartLayout from "./CartLayout";
import { Colors } from '../assets/constants/theme';
import IconButton from './IconButton';
import cardData from '../assets/data/cardData';
import TextButton from './TextButton';
import Feature from 'react-native-vector-icons/Feather';

Feature.loadFont()



const CheckOut = ({ navigation }) => {
    const [defaultCard, setDefaultCard] = React.useState(1)
    const [selectedCard, setSelectedCard] = React.useState(null)


    const renderCard = ({ item, index }) => {

        if (index === 0) {
            return (
                <TouchableOpacity
                    onPress={() => navigation.navigate("AddCard")}
                >
                    <View style={{
                        width: (Dimensions.get('window').width / 3),
                        borderRadius: 30,
                        height: 200,
                        backgroundColor: Colors.secondary,
                        marginRight: 20,
                        padding: 20,
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                    >
                        <Feature
                            size={22}
                            name={"plus"}
                            color={Colors.white}
                        />
                    </View>
                </TouchableOpacity >
            )
        }
        else {
            return (
                <TouchableOpacity onPress={() => {
                    setDefaultCard(null)
                    setSelectedCard(item)
                }}>
                    <View style={{
                        width: (Dimensions.get('window').width / 3),
                        borderRadius: 30,
                        height: 200,
                        backgroundColor: (defaultCard == item.id || selectedCard?.id == item.id) ? Colors.primary : Colors.lightGray,
                        marginRight: 20,
                        padding: 20,
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'flex-start',
                    }}>
                        <Image
                            style={{ resizeMode: 'contain', width: "50%", height: 40 }}
                            source={item.image}
                        />
                        <Text style={{ fontSize: 20, color: Colors.white, fontFamily: 'Poppins-Regular', }}>
                            {item.cardNumber}
                        </Text>
                        <Text style={{ fontSize: 14, color: Colors.Gray, fontFamily: 'Poppins-Light' }}>Expiration</Text>
                        <Text style={{ fontSize: 18, color: Colors.white, fontFamily: 'Poppins-Regular' }}>{item.exp}</Text>
                        <Image
                            style={{ resizeMode: 'contain', width: "100%", height: 20 }}
                            source={item.pattern}
                        />
                    </View>
                </TouchableOpacity>
            )
        }

    }


    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.white,
        }}>
            <View style={{
                justifyContent: 'space-between',
                flex: 1,
            }}>
                {/* Header */}
                <View
                    style={{
                        justifyContent: 'space-between',
                        backgroundColor: Colors.primary,
                        borderBottomLeftRadius: 75,
                        flex: 1,
                    }}>
                    <View
                        style={{
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <IconButton
                            containerColor={Colors.whiteTransparent10}
                            icon={"arrow-left"}
                            iconColor={Colors.white}
                            onPress={() => navigation.goBack(null)}
                        />
                        <Text style={{
                            letterSpacing: 3,
                            fontSize: 16,
                            color: Colors.white,
                            fontFamily: 'Poppins-Regular',
                        }}>
                            CHECK OUT
                        </Text>
                        <IconButton
                            icon={""}
                        />
                    </View>
                </View>

                <View style={{ flex: 4.5, }}>
                    <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: Colors.primary, }} />
                    <View style={{
                        backgroundColor: Colors.white,
                        borderTopRightRadius: 75,
                        overflow: 'hidden',
                        flex: 1
                    }}>
                        <FlatList
                            data={cardData}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingHorizontal: 30,
                                paddingVertical: 30,
                            }}
                            renderItem={renderCard}
                        />
                        <View style={{
                            justifyContent: 'space-between',
                            paddingHorizontal: 30,
                            paddingVertical: 30
                        }}>
                            <Text style={{ fontSize: 18, color: Colors.secondary, fontFamily: 'Poppins-Medium' }}>Delivery Address</Text>
                            <View style={{
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 5
                            }}>
                                <Text style={{ width: "70%", opacity: 0.4, fontSize: 12, color: Colors.secondary, fontFamily: 'Poppins-Regular' }}>Unit 15, York Farm Business Centre, Watling St, Towcester</Text>
                                <Text style={{ opacity: 0.4, fontSize: 12, color: Colors.secondary, fontFamily: 'Poppins-Regular' }}>Change</Text>
                            </View>
                            <View style={{ marginBottom: 5, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18, color: Colors.secondary, fontFamily: 'Poppins-Medium' }}>Total Items</Text>
                                <Text style={{ fontSize: 18, color: Colors.primary, fontFamily: 'Poppins-Medium' }}>$189.99</Text>
                            </View>
                            <View style={{ marginBottom: 5, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18, color: Colors.secondary, fontFamily: 'Poppins-Medium' }}>Standard Delivery</Text>
                                <Text style={{ fontSize: 18, color: Colors.primary, fontFamily: 'Poppins-Medium' }}>$10.00</Text>
                            </View>
                            <View style={{ marginBottom: 20, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18, color: Colors.secondary, fontFamily: 'Poppins-Medium' }}>Total Payment</Text>
                                <Text style={{ fontSize: 18, color: Colors.primary, fontFamily: 'Poppins-Medium' }}>$199.99</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <TextButton
                                    label="Place Order"
                                    onPress={()=> navigation.navigate("SuccessScreen")}
                                    buttonContainerStyle={{
                                        backgroundColor: Colors.primary,
                                        borderRadius: 50,
                                        height: 50,
                                        justifyContent: 'center',
                                        width: 130,
                                        marginHorizontal: 10,
                                    }}
                                    labelStyle={{
                                        color: Colors.white,
                                    }}
                                >
                                </TextButton>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default CheckOut;
