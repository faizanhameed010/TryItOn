import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Feature from 'react-native-vector-icons/Feather';
import Colors from '../assets/constants/theme';
import IconButton from './IconButton';
import TextButton from './TextButton';
import FormInput from "./FormInput";
import { utils } from "../utils";


const AddCard = ({ navigation }) => {
    const [cardNumber, setCardNumber] = React.useState("")
    const [cardError, setCardError] = React.useState("")
    const [cardFocus, setCardFocus] = React.useState(false)


    const [cardName, setCardName] = React.useState("")
    const [cardNameError, setCardNameError] = React.useState("")
    const [cardNameFocus, setCardNameFocus] = React.useState(false)


    const [exp, setExpName] = React.useState("")
    const [expError, setExpError] = React.useState("")
    const [expFocus, setExpFocus] = React.useState(false)


    const [cvv, setCvvName] = React.useState("")
    const [cvvError, setCvvError] = React.useState("")
    const [cvvFocus, setCvvFocus] = React.useState(false)
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
                        overflow: 'hidden'
                    }}>
                    <Image
                        source={require('../assets/images/bg_pattern.png')}
                        style={{
                            width: '100%',
                            height: '142%',
                            position: 'absolute',
                        }}
                    />
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
                            ADD CARD
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
                        <View style={{
                            margin: 40,
                            width: '80%',
                            height: 200,
                            borderRadius: 15,
                            backgroundColor: Colors.secondary,
                            padding: 20,
                            overflow: 'hidden'
                        }}>
                            <View style={{
                                width: 200,
                                height: 200,
                                backgroundColor: Colors.lightBlue,
                                opacity: 0.2,
                                position: 'absolute',
                                borderRadius: 200,
                                bottom: -70,
                                right: -50,
                            }} />

                            <View style={{ flex: 1, justifyContent: 'space-between', }}>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Image
                                        source={require('../assets/images/mastercard.png')}
                                        style={{ resizeMode: 'contain', width: 60, height: 40 }}
                                    />
                                </View>
                                <View>
                                    <View>
                                        <Text style={{ fontSize: 14, color: Colors.white, fontFamily: 'Poppins-SemiBold' }}>{cardName}</Text>
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <Text style={{ opacity: 0.8, fontSize: 14, color: Colors.white, fontFamily: 'Poppins-Regular' }}>{cardNumber}</Text>
                                        <Text style={{ opacity: 0.8, fontSize: 14, color: Colors.white, fontFamily: 'Poppins-Regular' }}>{exp}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>






                        <FormInput
                            prependComponent={
                                <View style={{
                                    justifyContent: 'center',
                                    marginHorizontal: 15
                                }}>
                                    <Feature
                                        name='credit-card'
                                        size={22}
                                        color={cardNumber == "" ? Colors.lightGray : (cardNumber != "" && cardError == "") ? Colors.primary : Colors.red}
                                    />

                                </View>
                            }
                            onFocus={() => setCardFocus(true)}
                            onBlur={() => setCardFocus(false)}
                            placerholder="Card Number"
                            autoCompleteType="number"
                            maxLength={19}
                            value={cardNumber}
                            onChange={(value) => {
                                // Validate Card
                                setCardNumber(value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim())
                                utils.validateInput(value, 19, setCardError)
                            }}
                            appendComponent={
                                <TouchableOpacity style={{
                                    width: 40,
                                    alignItems: 'flex-end',
                                    justifyContent: 'center',
                                    marginHorizontal: 15
                                }}
                                >
                                </TouchableOpacity>
                            }
                        />


                        <FormInput
                            prependComponent={
                                <View style={{
                                    justifyContent: 'center',
                                    marginHorizontal: 15
                                }}>
                                    <Feature
                                        name='user'
                                        size={22}
                                        color={cardName == "" ? Colors.lightGray : (cardName != "" && cardNameError == "") ? Colors.primary : Colors.red}
                                    />

                                </View>
                            }
                            onFocus={() => setCardNameFocus(true)}
                            onBlur={() => setCardNameFocus(false)}
                            placerholder="Cardholder Name"
                            autoCompleteType="number"
                            maxLength={25}
                            value={cardName}
                            onChange={(value) => {
                                // Validate Name
                                setCardName(value)
                            }}
                            appendComponent={
                                <TouchableOpacity style={{
                                    width: 40,
                                    alignItems: 'flex-end',
                                    justifyContent: 'center',
                                    marginHorizontal: 15
                                }}
                                >
                                </TouchableOpacity>
                            }
                        />

                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>

                            <FormInput
                                containerStyle={{ flex: 1, paddingLeft: 30, paddingRight: 10 }}
                                prependComponent={
                                    <View style={{
                                        justifyContent: 'center',
                                        marginHorizontal: 10
                                    }} />
                                }
                                onFocus={() => setExpFocus(true)}
                                onBlur={() => setExpFocus(false)}
                                placerholder="Expiry Date"
                                autoCompleteType="number"
                                maxLength={5}
                                value={exp}
                                onChange={(value) => {
                                    // Validate Name
                                    utils.validateInput(value, 5, setExpError)
                                    setExpName(value)
                                }}
                            />


                            <FormInput
                                containerStyle={{ flex: 1, paddingLeft: 10, paddingRight: 30 }}
                                prependComponent={
                                    <View style={{
                                        justifyContent: 'center',
                                        marginHorizontal: 10
                                    }} />
                                }
                                onFocus={() => setCvvFocus(true)}
                                onBlur={() => setCvvFocus(false)}
                                placerholder="CVV"
                                autoCompleteType="number"
                                maxLength={3}
                                value={cvv}
                                onChange={(value) => {
                                    // Validate Name
                                    utils.validateInput(value, 3, setCvvError)
                                    setCvvName(value)
                                }}
                            />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <TextButton
                                label="Place Order"
                                onPress={() => navigation.navigate("CheckOut")}
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
    )
}


export default AddCard