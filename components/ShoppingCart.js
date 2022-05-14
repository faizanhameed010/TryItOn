import React from 'react';
import { Text, View, Image } from 'react-native';
import CartLayout from "./CartLayout";
import StepperInput from "./StepperInput";
import { SwipeListView } from 'react-native-swipe-list-view'
import { Colors } from '../assets/constants/theme';
import IconButton from './IconButton';

import Firestore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';




const ShoppingCart = ({ navigation }) => {

    const [cartProducts, setCartProducts] = React.useState([]);
    let Product;



    // getting cart products from firestore collection and updating the state
    React.useEffect(() => {
        Auth().onAuthStateChanged(user => {
            if (user) {
                Firestore().collection('Cart ' + user.uid).onSnapshot(snapshot => {
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


    // getting the TotalProductPrice from cartProducts in a seperate array
    const price = cartProducts.map((cartProduct) => {
        return cartProduct.TotalProductPrice;
    })
    // reducing the price in a single value
    const reducerOfPrice = (accumulator, currentValue) => accumulator + currentValue;
    const _totalPrice = price.reduce(reducerOfPrice, 0);




    // cart product increase function
    const cartProductIncrease = (cartProduct) => {
        // console.log(cartProduct);
        Product = cartProduct;
        Product.qty = Product.qty + 1;
        Product.TotalProductPrice = Product.qty * Product.price;
        // updating in database
        Auth().onAuthStateChanged(user => {
            if (user) {
                Firestore().collection('Cart ' + user.uid).doc(cartProduct.id).update(Product).then(() => {
                    console.log('increment added');
                })
            }
            else {
                console.log('user is not logged in to increment');
            }
        })
    }

    // cart product decrease functionality

    const cartProductDelete = (cartProduct) => {
        Auth().onAuthStateChanged(user => {
            if (user) {
                Firestore().collection('Cart ' + user.uid).doc(cartProduct.id).delete().then(() => {
                    console.log('successfully deleted');
                })
            }
        })
    }



    // cart product decrease functionality
    const cartProductDecrease = (cartProduct) => {
        Product = cartProduct;
        if (Product.qty > 1) {
            Product.qty = Product.qty - 1;
            Product.TotalProductPrice = Product.qty * Product.price;
            // updating in database
            Auth().onAuthStateChanged(user => {
                if (user) {
                    Firestore().collection('Cart ' + user.uid).doc(cartProduct.id).update(Product).then(() => {
                        console.log('decrement');
                    })
                }
                else {
                    console.log('user is not logged in to decrement');
                }
            })
        }
    }


    const renderCartItem = (data, rowMap) => {
        return (
            <View style={{
                height: 140,
                borderRadius: 20,
                marginTop: 30,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: Colors.white
            }}>
                <View style={{
                    width: 140,
                    height: 140,
                    backgroundColor: data.item.shoeColor,
                    alignItems: 'center',
                    borderRadius: 20,
                    padding: 5,
                }}>
                    <Image
                        source={{ uri: data.item.image }}
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain',
                            overflow: 'visible',
                        }}
                    />
                </View>
                <View style={{
                    alignItems: 'flex-start'
                }}>
                    <Text style={{
                        fontSize: 15,
                        color: Colors.secondary,
                        textAlign: 'center',
                        fontFamily: 'Poppins-Regular',
                        letterSpacing: 3,
                    }}>
                        {data.item.brandTitle}
                    </Text>
                    <Text style={{
                        fontSize: 15,
                        color: Colors.secondary,
                        textAlign: 'center',
                        fontFamily: 'Poppins-Medium',
                    }}>
                        {data.item.title}
                    </Text>
                    <Text style={{
                        fontSize: 24,
                        color: Colors.primary,
                        textAlign: 'center',
                        fontFamily: 'Poppins-SemiBold',
                    }}>
                        ${data.item.price}
                    </Text>
                </View>
                <View style={{
                    height: 40,
                    width: 40,
                    backgroundColor: Colors.secondary,
                    borderRadius: 40,
                    alignContent: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{ fontSize: 15, color: Colors.white, textAlign: 'center' }}>
                        x{data.item.qty}
                    </Text>
                </View>
            </View>
        )
    }
    const renderHiddenItem = (data, rowMap) => {
        return (
            <View style={{
                flex: 1,
                borderRadius: 20,
                marginTop: 30,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <View style={{
                    width: '50%',
                    height: '100%',
                    backgroundColor: Colors.red,
                    borderRadius: 30,
                    flexDirection: 'row',
                    paddingLeft: 10,
                    justifyContent: 'flex-start',
                    alignItems: 'center'

                }}>
                    <IconButton
                        icon={"trash-2"}
                        iconColor={Colors.white}
                        containerStyle={{ height: 60, width: 60 }}
                        size={40}
                        onPress={() => {
                            // dispatch(removeItem(data.item.id))
                            cartProductDelete(data.item)
                        }}
                    />
                </View>
                <StepperInput
                    onAdd={() => {
                        cartProductIncrease(data.item)
                    }}
                    onMinus={() => {
                        cartProductDecrease(data.item)
                    }}
                />
            </View>

        )
    }

    return (
        <CartLayout
            title={"SHOPPING CART"}
            onPress={() => navigation.navigate("CheckOut", { totalPrice: _totalPrice })}
            cartQuantity={totalQty}
            price={_totalPrice}
        >
            <SwipeListView
                data={cartProducts}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                    paddingHorizontal: 30,
                    paddingBottom: 30
                }}
                rightOpenValue={-75}
                leftOpenValue={75}
                renderItem={renderCartItem}
                renderHiddenItem={renderHiddenItem}
            />
        </CartLayout>
    )
}

export default ShoppingCart;
