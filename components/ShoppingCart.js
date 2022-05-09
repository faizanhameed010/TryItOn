import React from 'react';
import { Text, View, Image } from 'react-native';
import CartLayout from "./CartLayout";
import StepperInput from "./StepperInput";
import { SwipeListView } from 'react-native-swipe-list-view'
import myCartData from '../assets/data/myCartData';
import { Colors } from '../assets/constants/theme';
import IconButton from './IconButton';



const ShoppingCart = ({ navigation }) => {

    const [myCartList, setMyCartList] = React.useState(myCartData)


    function updateQuantityHandler(newQty, id) {
        const newMyCartList = myCartList.map(cl => (
            cl.id === id ? { ...cl, quantity: newQty } : cl
        ))
        console.log()
        setMyCartList(newMyCartList)
    }

    function removeCartItem(id) {
        let newMyCartList = [...myCartList]
        const index = newMyCartList.findIndex(cart => cart.id === id)
        newMyCartList.splice(index, 1)
        setMyCartList(newMyCartList)
    }

    function totalPayment (){
        
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
                    backgroundColor: data.item.color,
                    alignItems: 'center',
                    borderRadius: 20,
                    padding: 5,
                }}>
                    <Image
                        source={data.item.image}
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
                        {data.item.price}
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
                    <Text style={{ fontSize: 15, color: Colors.white, textAlign: 'center' }}>x{data.item.quantity}</Text>
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
                        onPress={() => removeCartItem(data.item.id)}
                    />
                </View>
                <StepperInput
                    onAdd={() => updateQuantityHandler(data.item.quantity + 1, data.item.id)}
                    onMinus={() => {
                        if (data.item.quantity > 1) {
                            updateQuantityHandler(data.item.quantity - 1, data.item.id)
                        }
                    }}

                />
            </View>

        )
    }

    return (
        <CartLayout
        title={"SHOPPING CART"}
        onPress={() => navigation.navigate("CheckOut")}
        cartQuantity={"3 Items added"}
        >
            <SwipeListView
                data={myCartList}
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
