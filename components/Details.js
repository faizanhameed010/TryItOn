import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, FlatList, Dimensions } from 'react-native';
import Feature from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../assets/constants/theme';
import IconButton from './IconButton';
import PopModel from './PopModel';
import TextButton from "./TextButton";
import firestore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';


MaterialCommunityIcons.loadFont();
Feature.loadFont();
AntDesign.loadFont();


const Details = ({ navigation, route }) => {

    const [showPopModel, setshowPopModel] = React.useState(false);



    // getting current user uid
    function GetUserUid() {
        const [uid, setUid] = React.useState(null);
        React.useEffect(() => {
            Auth().onAuthStateChanged(user => {
                if (user) {
                    setUid(user.uid);
                }
            })
        }, [])
        return uid;
    }

    const uid = GetUserUid();

    const { item } = route.params;

    let Product;
    const _addToCart = (product) => {
        if (uid !== null) {
            Product = product;
            Product['qty'] = 1;
            Product['TotalProductPrice'] = Product.qty * Product.price;
            firestore().collection('Cart ' + uid).doc(product.id).set(Product).then(() => {
                console.log('successfully added to cart');
            })
        }
        else {
            console.log("error");
        }
    }

    const [cartProducts, setCartProducts] = React.useState([]);
    // getting cart products from firestore collection and updating the state
    React.useEffect(() => {
        Auth().onAuthStateChanged(user => {
            if (user) {
                firestore().collection('Cart ' + user.uid).onSnapshot(snapshot => {
                    const newCartProduct = snapshot.docs.map((doc) => ({
                        ID: doc.id,
                        ...doc.data(),
                    }));
                    setCartProducts(newCartProduct);
                });
            }
            else {
                console.log('user is not signed in to retrieve cart');
            }
        })
    }, [])

    const qty = cartProducts.map(cartProduct => {
        return cartProduct.qty;
    })
    // reducing the qty in a single value
    const reducerOfQty = (accumulator, currentValue) => accumulator + currentValue;
    const totalQty = qty.reduce(reducerOfQty, 0);


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
                    {item}
                </Text>
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
                    quatity={totalQty}
                    quatityBackgroundColor={Colors.primary}
                    quatityTextColor={Colors.white}
                    onPress={() => navigation.navigate("ShoppingCart")}
                />
            </View>


            {/* Body */}
            <ScrollView>
                {/* Image Continer */}
                <View style={[styles.imageContainer, { backgroundColor: item.shoeColor }]}>
                    <Image
                        style={styles.image}
                        source={{ uri: item.image }} />
                </View>
                {/* Details Container */}
                <View style={styles.detailsWrapper}>
                    <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: item.shoeColor }} />

                    <View style={styles.detailsContainer}>
                        <Text style={styles.brandTitle}>{item.brandTitle}</Text>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>${item.price}</Text>
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
                                onPress={() => {
                                    if (item.model)
                                        navigation.navigate('Augmented', { item: item.model, totalQty: totalQty })
                                    else {
                                        console.log("heello")
                                        setshowPopModel(true)
                                    }

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
                                onPress={() => {
                                    _addToCart(item)
                                }}
                            >
                            </TextButton>
                            {
                                showPopModel &&
                                <PopModel
                                    isVisible={showPopModel}
                                    onClose={() => setshowPopModel(false)}
                                    title={"Coming Soon"}
                                    icontitle={'clock'}
                                    backColor={Colors.primary}
                                />
                            }
                        </View>
                    </View>
                </View>
            </ScrollView >
        </View >
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


export default Details