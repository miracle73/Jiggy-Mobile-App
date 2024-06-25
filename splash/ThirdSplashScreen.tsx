import React, { useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Union from '../assets/image/union.png'
import CustomText from '../assets/image/iggy.png'
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Login: undefined;

};
type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const ThirdSplashScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    useEffect(() => {

        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 5000);

        return () => clearTimeout(timer);

    }, [navigation]);
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
            <Image source={CustomText} style={{marginTop: 15, marginLeft: 10}} />
        </View>
        <Text style={styles.firstText}>Unleash your jiggy side</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    firstText: {
        color: '#FFFFFF',
        fontWeight: "400",
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10
    }
})

export default ThirdSplashScreen