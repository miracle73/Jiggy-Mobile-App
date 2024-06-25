import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstSplashScreen from './splash/FirstSplashScreen';
import SecondSplashScreen from './splash/SecondSplashScreen';
import ThirdSplashScreen from './splash/ThirdSplashScreen';
import Login from './auth/Login';
import CreateAccount from './auth/CreateAccount';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <FirstSplashScreen />
    <NavigationContainer>
      <Stack.Navigator >
         <Stack.Screen name="FirstSplashScreen" component={FirstSplashScreen} options={{ headerShown: false }} />
         <Stack.Screen name="SecondSplashScreen" component={SecondSplashScreen} options={{ headerShown: false }} />
         <Stack.Screen name="ThirdSplashScreen" component={ThirdSplashScreen} options={{ headerShown: false }} />
         <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }} />
         <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
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
