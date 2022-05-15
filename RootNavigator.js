import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';



import AsyncStorage from "@react-native-async-storage/async-storage";
import Auth from "@react-native-firebase/auth";
import Feature from 'react-native-vector-icons/Feather';
import Colors from './assets/constants/theme';



import Home from './components/Home.js'
import Details from './components/Details'
import OnBoarding from './components/OnBoarding.js';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Otp from './components/Otp';
import ShoppingCart from './components/ShoppingCart';
import CheckOut from './components/CheckOut';
import AddCard from './components/AddCard';
import SuccessScreen from './components/SuccessScreen';
import SplashScreen from './components/SplashScreen';
import CustomDrawer from './components/CustomDrawer';
import Augmented from './components/Augmented';




const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
Feature.loadFont()

const RootNavigator = () => {
  const [isAppFirstLaunched, setAppFirstLaunched] = React.useState(null)
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false)

  React.useEffect(() => {
    async function check() {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched')


      Auth().onAuthStateChanged(user => {
        if (user !== null) {
          setIsUserLoggedIn(true)
        }
        else
          setIsUserLoggedIn(false)
      })


      if (appData == null) {
        setAppFirstLaunched(true)
        AsyncStorage.setItem('isAppFirstLaunched', "false")
      }
      else {
        setAppFirstLaunched(false)
      }
      return () => {
        console.log("This will be logged on unmount");
      }
    }
    check()
  }, [])


  function DrawerRoutes() {
    return (
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{ 
          drawerLabelStyle: { marginLeft: -10, fontFamily: "Poppins-Medium"},
          drawerActiveBackgroundColor: Colors.primaryTransparent,
          drawerActiveTintColor: Colors.primary,
          drawerInactiveTintColor: Colors.secondary,
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            drawerIcon: (color) => (<Feature name="home" size={22} color={Colors.primary} />)
          }}
        />
        <Drawer.Screen
          name="Logout"
          component={SplashScreen}
          options={{
            headerShown: false,
            drawerIcon: () => (<Feature name="log-out" size={22} color={Colors.primary} />),
          }}
        />
      </Drawer.Navigator>
    )
  }


  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator>
          {/* {isAppFirstLaunched &&
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{
                headerShown: false
              }}
            />} */}
          {(isAppFirstLaunched && !isUserLoggedIn) ? (
            <Stack.Screen
              name="OnBoarding"
              component={OnBoarding}
              options={{
                headerShown: false
              }}
            />) : null}

          {(isAppFirstLaunched || !isUserLoggedIn) ? (
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                headerShown: false
              }}
            />) : null}

          {(isAppFirstLaunched || !isUserLoggedIn) ? (
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{
                headerShown: false
              }}
            />) : null}

          {(isAppFirstLaunched || !isUserLoggedIn) ? (
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{
                headerShown: false
              }}
            />) : null}
          {(isAppFirstLaunched || !isUserLoggedIn) ? (
            <Stack.Screen
              name="Otp"
              component={Otp}
              options={{
                headerShown: false
              }}
            />) : null}

          <Stack.Screen
            name="Home"
            component={DrawerRoutes}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="ShoppingCart"
            component={ShoppingCart}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="CheckOut"
            component={CheckOut}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="AddCard"
            component={AddCard}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="SuccessScreen"
            component={SuccessScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Augmented"
            component={Augmented}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}

export default RootNavigator