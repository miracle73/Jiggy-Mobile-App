import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstSplashScreen from './splash/FirstSplashScreen';
import SecondSplashScreen from './splash/SecondSplashScreen';
import ThirdSplashScreen from './splash/ThirdSplashScreen';
import Login from './auth/Login';
import CreateAccount from './auth/CreateAccount';
import ForgotPassword from './auth/ForgotPassword';
import Question1 from './auth/Question1';
import Question2 from './auth/Question2';
import Question3 from './auth/Question3';
import { useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen';
import BottomNavigation from './components/BottomNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    async function prepare() {
      try {

        await SplashScreen.preventAutoHideAsync();

        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {

        SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  return (
    // <FirstSplashScreen />
    <NavigationContainer>
      <Stack.Navigator >
         {/* <Stack.Screen name="FirstSplashScreen" component={FirstSplashScreen} options={{ headerShown: false }} /> */}
         <Stack.Screen name="SecondSplashScreen" component={SecondSplashScreen} options={{ headerShown: false }} />
         <Stack.Screen name="ThirdSplashScreen" component={ThirdSplashScreen} options={{ headerShown: false }} />
         <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }} />
         <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
         <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
         <Stack.Screen name="Question1" component={Question1} options={{ headerShown: false }} />
         <Stack.Screen name="Question2" component={Question2} options={{ headerShown: false }} />
         <Stack.Screen name="Question3" component={Question3} options={{ headerShown: false }} />
         <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{ headerShown: false }} />
      </Stack.Navigator >
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
