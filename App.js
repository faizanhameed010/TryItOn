import * as React from 'react';
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home.js'
import Details from './components/Details'
import FilterModel from './components/FilterModel'
import OnBoarding from './components/OnBoarding.js';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Otp from './components/Otp';
import ShoppingCart from './components/ShoppingCart';
import SplashScreen from './components/SplashScreen';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Auth from "@react-native-firebase/auth";




const Stack = createNativeStackNavigator();


export default function App() {
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
            component={Home}
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
            name="Details"
            component={Details}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}