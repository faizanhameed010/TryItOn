
import React from 'react';
import { Text, View, StyleSheet, FlatList, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feature from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../assets/constants/theme';
import FilterModel from './FilterModel';
import IconButton from './IconButton';

import popularData from '../assets/data/popularData';
//import trendingData from '../assets/data/trendingData';
import categoriesData from '../assets/data/categoriesData';

import firestore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';


MaterialCommunityIcons.loadFont();
Feature.loadFont();
AntDesign.loadFont();


const Home = ({ navigation }) => {


    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [products, setProducts] = React.useState([])
    const [dummyProducts, setDummyProducts] = React.useState([])
    const [loading, setLoading] = React.useState(true);
    const [showFilterModel, setshowFilterModel] = React.useState(false);
    const [defaultCategory, setDefaultCategory] = React.useState(1);



    React.useEffect(() => {
        const trendingData = [];
        const subscriber = firestore()
            .collection('TrendingItems')
            .onSnapshot(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    trendingData.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                setProducts(trendingData)
                setLoading(false)
                setDummyProducts(trendingData)
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);


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


    function onSelectCategory(category) {
        let productsList = dummyProducts.filter(a => a.category.includes(category.id))
        setProducts(productsList)
        setSelectedCategory(category)
    }

    const renderCategoryItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => {
                setDefaultCategory(null)
                onSelectCategory(item)
            }}>
                <View style={[styles.categoryList,
                {
                    backgroundColor: (defaultCategory == item.id || selectedCategory?.id == item.id) ? Colors.primary : Colors.Gray
                }
                ]}
                >
                    <Text style={{
                        fontSize: 15,
                        color: (defaultCategory == item.id || selectedCategory?.id == item.id) ? Colors.white : Colors.secondary,
                        fontFamily: 'Poppins-Regular',
                        alignItems: 'center'
                    }}>
                        {item.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    const renderTredingItem = ({ item }) => {
        const shoeColor = item.shoeColor
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Details', { item: item })}>
                <View style={[styles.trendingContainer,
                { backgroundColor: item.shoeColor }
                ]}
                >
                    <Image
                        style={styles.trendingImage}
                        source={{ uri: item.image }}
                    />
                    <Text style={styles.trendingBrandTitle}>{item.brandTitle}</Text>
                    <Text style={styles.trendingTitle}>{item.title}</Text>
                    <Text style={styles.trendingPrice}>${item.price}</Text>
                </View>
            </TouchableOpacity>

        );
    };
    // const renderPopularItem = ({ item }) => {
    //     return (
    //         <View style={[styles.popularContainer,
    //         { backgroundColor: item.color }
    //         ]}
    //         >
    //             <View>
    //                 <Text style={styles.popularBrandTitle}>{item.brandTitle}</Text>
    //                 <Text style={styles.popularTitle}>{item.title}</Text>
    //                 <Text style={styles.popularPrice}>{item.price}</Text>
    //             </View>

    //             <Image
    //                 style={styles.popularImage}
    //                 source={item.image}
    //             />
    //         </View>
    //     );
    // };


    return (
        <View style={styles.container}>
            <SafeAreaView>
                {/* Header */}
                <View style={styles.header}>
                    <IconButton
                        containerColor={Colors.Gray}
                        icon={"menu"}
                        iconColor={Colors.secondary}
                        onPress={() => console.log("Side Menu")}
                    />


                    <Text style={styles.headerText}>
                        TRY IT ON
                    </Text>


                    <IconButton
                        containerColor={Colors.Gray}
                        icon={"shopping-cart"}
                        iconColor={Colors.secondary}
                        onPress={() => navigation.navigate('ShoppingCart')}
                        quatityBackgroundColor={Colors.primary}
                        quatityTextColor={Colors.white}
                        quatity={totalQty}
                    />
                </View>

                <ScrollView>
                    {/* Search */}
                    <View style={styles.search}>
                        <View style={styles.searchBar}>
                            <Feature
                                style={{ marginRight: 10 }}
                                name="search"
                                size={22}
                                color={"#808080"} />
                            <Text style={{ flex: 1, fontSize: 15, fontFamily: 'Poppins-Regular', color: Colors.lightGray }}>What are you looking for ...</Text>
                        </View>
                        <IconButton
                            containerColor={Colors.primary}
                            icon={"options"}
                            iconColor={Colors.white}
                            onPress={() => setshowFilterModel(true)}
                        />
                    </View>
                    {showFilterModel &&
                        <FilterModel
                            isVisible={showFilterModel}
                            onClose={() => setshowFilterModel(false)}
                        //title = "Horah! Sign Up Succesful"
                        />
                    }

                    {/* Categories List */}
                    <View>
                        <FlatList
                            data={categoriesData}
                            renderItem={renderCategoryItem}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                            }}
                        />
                    </View>

                    {/* Trending List */}

                    <Text style={styles.trendingText}>
                        Trending
                    </Text>
                    <View>
                        <FlatList
                            data={products}
                            renderItem={renderTredingItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            style={styles.trendingListContainer}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingHorizontal: 20,
                                paddingBottom: 20,
                            }}
                        />
                    </View>

                    {/* Popular List */}

                    <View style={{
                        backgroundColor: Colors.Gray,
                        width: '95%',
                        alignSelf: 'flex-end',
                        borderTopLeftRadius: 30,
                        alignItems: 'flex-end',
                        paddingVertical: 10,
                        paddingBottom: 80
                    }}>
                        <Text style={[styles.popularText,
                        {
                            position: 'absolute',
                            transform: [{ rotate: '-90deg' }],
                            top: 75,
                            left: -15
                        }]}>
                            Popular
                        </Text>
                        {
                            popularData.map((item) => (
                                <View style={[styles.popularContainer,
                                { backgroundColor: item.color }
                                ]}
                                    key={"header" + item.title}
                                >
                                    <View>
                                        <Text style={styles.popularBrandTitle}>{item.brandTitle}</Text>
                                        <Text style={styles.popularTitle}>{item.title}</Text>
                                        <Text style={styles.popularPrice}>{item.price}</Text>
                                    </View>

                                    <Image
                                        style={styles.popularImage}
                                        source={item.image}
                                    />
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconBackground: {
        backgroundColor: "#F6F5F5",
        padding: 10,
        borderRadius: 30,
    },
    headerText: {
        letterSpacing: 3,
        fontSize: 16,
        color: Colors.secondary,
        fontFamily: 'Poppins-Regular'
    },
    search: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchBar: {
        backgroundColor: "#F6F5F5",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 30,
        flex: 1,
        marginRight: 10
    },
    filterIconBackground: {
        backgroundColor: "#2CB9B0",
        padding: 10,
        borderRadius: 30,
    },
    categoryList: {
        width: 80,
        height: 40,
        borderRadius: 30,
        backgroundColor: "#2CB9B0",
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        flex: 1
    },
    trendingListContainer: {
        paddingBottom: 10,
    },
    trendingText: {
        fontSize: 24,
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
    },
    trendingContainer: {
        width: (Dimensions.get('window').width / 2) - Dimensions.get('window').width / 14,
        borderRadius: 30,
        backgroundColor: Colors.primary,
        marginRight: 20,
        marginTop: 40,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'visible',
    },
    trendingImage: {
        width: '100%',
        overflow: 'visible',
        resizeMode: 'contain',
        marginTop: -50,
        marginLeft: 15,
        flex: 1,
        height: 150,

    },
    trendingBrandTitle: {
        fontSize: 15,
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        letterSpacing: 3,
    },
    trendingTitle: {
        fontSize: 15,
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
    },
    trendingPrice: {
        fontSize: 24,
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        paddingBottom: 5
    },
    popularText: {
        fontSize: 24,
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
    },
    popularContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        borderRadius: 30,
        paddingHorizontal: 20,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    popularImage: {
        left: -10,
        width: '100%',
        height: 150,
        paddingBottom: 5,
        overflow: 'visible',
        resizeMode: 'contain'
    },
    popularBrandTitle: {
        fontSize: 15,
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        letterSpacing: 3,
    },
    popularTitle: {
        fontSize: 15,
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
    },
    popularPrice: {
        fontSize: 24,
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        paddingBottom: 5
    },
});



export default Home