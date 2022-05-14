import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, StyleSheet, PermissionsAndroid, FlatList, Dimensions } from 'react-native';
import { AugmentedFacesView } from '@sceneview/react-native-sceneform';
import IconButton from './IconButton';
import Colors from '../assets/constants/theme';





const Augmented = ({ navigation, route }) => {
    const { item , totalQty } = route.params;


    const [augmentedFaceIndex, setAugmentedFaceIndex] = useState(-1);
    const [augmentedFaces, setAugmentedFaces] = useState([]);
    const [cameraPermissionGranted, setCameraPermission] = useState(false);
    const augmentedFacesView = useRef(null);


    const ExampleSet = [
        { title: 'Glasses', model: item }
    ];

    const checkPermissions = async () => {
        const actual = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
        if (actual) {
            setCameraPermission(true);
        }
        else {
            const permission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
            if (permission == 'granted') {
                setCameraPermission(true);
            }
        }
    }

    const loadAssets = () => {
        ExampleSet.forEach((item) => {
            augmentedFacesView.current.addAugmentedFace(item)
                .then((index) => {
                    setAugmentedFaces(prevFaces => [...prevFaces, { ...item, index }]);
                })
        })
    }

    useEffect(() => {
        if (!cameraPermissionGranted) {
            checkPermissions();
        }
        else {
            loadAssets();
        }
    }, [cameraPermissionGranted]);

    return (
        <SafeAreaView style={styles.container}>
            {cameraPermissionGranted &&
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

                    <AugmentedFacesView
                        style={styles.camera}
                        setAugmentedFace={augmentedFaceIndex}
                        ref={augmentedFacesView}
                    />
                    <View style={styles.overlay}>
                        <FlatList
                            horizontal={true}
                            data={augmentedFaces}
                            renderItem={({ item }) => {
                                setAugmentedFaceIndex(item.index)
                            }}
                        />
                    </View>
                </View>
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    camera: {
        flex: 1
    },
    flatlist: {
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.25)',
    },
    flatlist_container: {
        alignItems: 'center'
    },
    touchable: {
        width: 100,
        height: 50,
        padding: 5
    },
    touchable_body: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});

export default Augmented;