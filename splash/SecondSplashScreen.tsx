import React, { useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Union from '../assets/image/union.png'
import CustomText from '../assets/image/iggy.png'
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { RootState } from '../Store';

type RootStackParamList = {
    ThirdSplashScreen: undefined;
    BottomNavigation: undefined;

};
type NavigationProp = StackNavigationProp<RootStackParamList, 'ThirdSplashScreen', 'BottomNavigation'>;

const SecondSplashScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    const { isSignedIn, email } = useSelector((state: RootState) => state.user)
    console.log(isSignedIn)
    useEffect(() => {
        // if (isSignedIn) {

        //     navigation.replace('BottomNavigation');
        // } else {
            const timer = setTimeout(() => {
                navigation.replace('ThirdSplashScreen');
            }, 5000);

            return () => clearTimeout(timer);
        
    }, [ navigation]);
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#181A1C',
            justifyContent: 'center',
            alignItems: 'center',

        }}>
            <StatusBar style="light" />
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={Union} />
                <Image source={CustomText} style={{ marginTop: 15, marginLeft: 10 }} />

            </View>
        </SafeAreaView>
    )
}

export default SecondSplashScreen