import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, FlatList, Dimensions } from 'react-native';
import Feature from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../assets/constants/theme';
import IconButton from './IconButton';
import TextButton from "./TextButton";

import trendingData from '../assets/data/trendingData';
MaterialCommunityIcons.loadFont();
Feature.loadFont();
AntDesign.loadFont();


export default Home = ({ navigation, route }) => {

    const { item } = route.params;
    const renderSizeItem = ({ item }) => {
        return (
            <View style={{
                backgroundColor: item.selected ? Colors.primary : Colors.Gray,
                padding: 10,
                borderRadius: 30,
                width: 40, height: 40,
                margin: 10
            }}>
                <Text style={{
                    fontSize: 15,
                    color: item.selected ? Colors.white : Colors.secondary,
                    fontFamily: 'Poppins-Regular',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    {item.size}
                </Text>
            </View>

        );
    };
    const renderShoeColorItem = ({ item }) => {
        return (
            <View style={{
                backgroundColor: item.color,
                padding: 10,
                borderRadius: 30,
                width: 40, height: 40,
                margin: 10
            }}>
            </View>

        );
    };



    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'absolute',
                width: Dimensions.get('window').width,
                elevation: 1,
                minHeight: 10,
                zIndex: 1,
            }}>
                <IconButton
                    containerColor={Colors.whiteTransparent40}
                    icon={"arrow-left"}
                    iconColor={Colors.secondary}
                    onPress={() => navigation.goBack(null)}
                />
                <IconButton
                    containerColor={Colors.whiteTransparent40}
                    icon={"shopping-cart"}
                    iconColor={Colors.secondary}
                    quatity={2}
                    quatityBackgroundColor={Colors.primary}
                    quatityTextColor={Colors.white}
                    onPress={() => navigation.navigate("ShoppingCart")}
                />
            </View>


            {/* Body */}
            <ScrollView>
                {/* Image Continer */}
                <View style={[styles.imageContainer, { backgroundColor: item.color }]}>
                    <Image
                        style={styles.image}
                        source={item.image} />
                </View>
                {/* Details Container */}
                <View style={styles.detailsWrapper}>
                    <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: item.color }} />

                    <View style={styles.detailsContainer}>
                        <Text style={styles.brandTitle}>{item.brandTitle}</Text>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        <Text style={styles.title2}>Size</Text>
                        <View style={{ alignItems: 'center' }}>
                            <FlatList
                                data={item.sizes}
                                renderItem={renderSizeItem}
                                horizontal={true}
                                keyExtractor={item => item.id}
                                contentContainerStyle={styles.sizeContainer}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                        <Text style={styles.title2}>Colors</Text>
                        <View style={{ alignItems: 'center' }}>
                            <FlatList
                                data={item.shoeColor}
                                renderItem={renderShoeColorItem}
                                horizontal={true}
                                keyExtractor={item => item.id}
                                contentContainerStyle={styles.colorContainer}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>

                        <View style={{
                            padding: 30,
                            paddingHorizontal: 30,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <TextButton
                                label="Try On"
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
                            >
                            </TextButton>

                            <TextButton
                                label="Add to Cart"
                                buttonContainerStyle={{
                                    backgroundColor: Colors.primary,
                                    borderRadius: 50,
                                    height: 50,
                                    justifyContent: 'center',
                                    width: 130,
                                    marginHorizontal: 10,

                                }}
                                onPress={() => navigation.navigate('ShoppingCart')}
                            >
                            </TextButton>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    header: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconBackground: {
        backgroundColor: 'rgba(246,245,245, 0.4)',
        padding: 10,
        borderRadius: 30,
    },
    imageContainer: {
        height: 300,
        borderBottomLeftRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        overflow: 'visible',
    },
    detailsWrapper: {
        flex: 1,
        backgroundColor: Colors.white
    },
    detailsContainer: {
        backgroundColor: Colors.white,
        flex: 1,
        borderTopRightRadius: 75
    },
    brandTitle: {
        letterSpacing: 3,
        fontSize: 18,
        color: Colors.secondary,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        color: Colors.secondary,
        opacity: 0.5,
        paddingTop: 50
    },
    title: {
        fontSize: 28,
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
    },
    price: {
        fontSize: 28,
        color: Colors.primary,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
    },
    description: {
        fontSize: 15,
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        opacity: 0.5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10
    },
    title2: {
        fontSize: 18,
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10
    },
    sizeContainer: {
        paddingTop: 10,
        paddingHorizontal: 30,
    },
    colorContainer: {
        paddingTop: 10,
    },
    buttonContainer: {
        padding: 20,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});