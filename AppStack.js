import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from './components/Home.js'
import Details from './components/Details'
import ShoppingCart from './components/ShoppingCart';
import CheckOut from './components/CheckOut';
import AddCard from './components/AddCard';
import SuccessScreen from './components/SuccessScreen';
import Augmented from './components/Augmented';


const Drawer = createDrawerNavigator();



const AppStack = () => {

  return (
        <Drawer.Navigator>
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false
            }}
          />
          <Drawer.Screen
            name="Details"
            component={Details}
            options={{
              headerShown: false
            }}
          />
          <Drawer.Screen
            name="Augmented"
            component={Augmented}
            options={{
              headerShown: false
            }}
          />
          <Drawer.Screen
            name="ShoppingCart"
            component={ShoppingCart}
            options={{
              headerShown: false
            }}
          />
          <Drawer.Screen
            name="CheckOut"
            component={CheckOut}
            options={{
              headerShown: false
            }}
          />
          <Drawer.Screen
            name="AddCard"
            component={AddCard}
            options={{
              headerShown: false
            }}
          />
          <Drawer.Screen
            name="SuccessScreen"
            component={SuccessScreen}
            options={{
              headerShown: false
            }}
          />
        </Drawer.Navigator>
  );
}

export default AppStack