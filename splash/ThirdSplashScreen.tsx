import React, { useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Union from '../assets/image/union.png'
import CustomText from '../assets/image/iggy.png'
import Apple from '../assets/image/Apple.png'
import Google from '../assets/image/Google.png'
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Background from '../assets/image/Background.jpg'




type RootStackParamList = {
    Login: undefined;
    CreateAccount: undefined;
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'Login', ' CreateAccount'>;

const ThirdSplashScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    useEffect(() => {

        const timer = setTimeout(() => {
            navigation.navigate('Login');
        }, 5000);

        return () => clearTimeout(timer);

    }, [navigation]);
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#181A1C',
     

        }}>
            <StatusBar style="light" />
            <ImageBackground source={Background} style={{
                flex: 1, backgroundColor: '#000',
                paddingHorizontal: 25,
                paddingTop: 150
            }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={Union} />
                <Image source={CustomText} style={{ marginTop: 15, marginLeft: 10 }} />
            </View>
            <Text style={styles.firstText}>Unleash your jiggy side</Text>
            <View style={{ marginTop: 80 }}>
                <TouchableOpacity style={styles.container} onPress={() => navigation.replace('CreateAccount')}>
                    <Text style={styles.fourthText}>Continue with Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container} >
                    <Image source={Apple} />
                    <Text style={styles.fourthText}>Continue with Apple</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container} >
                    <Image source={Google} />
                    <Text style={styles.fourthText}>Continue with Google</Text>
                </TouchableOpacity>
                <Text style={styles.secondText}>Continue as guest?</Text>
                <Text style={styles.thirdText}>By continuing, you agree to our User Agreement and
                    acknowledge that you understand the privacy policy.</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10, gap: 6 }}>
                        <Text style={[styles.fifthText, { textAlign: 'center' }]}> Don’t have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.replace('CreateAccount')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>

                                <Text style={[styles.fifthText, { color: '#F33F5E' }]}>
                                    Sign up
                                </Text>

                            </View>
                        </TouchableOpacity>
                    </View>
            </View>
            </ImageBackground>
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
    },
    secondText: {
        color: '#FFFFFF',
        fontWeight: "600",
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20
    },
    thirdText: {
        color: '#96969C',
        fontWeight: "600",
        fontSize: 13,
        textAlign: 'center',
        marginTop: 20
    },
    fourthText: {
        color: '#FFFFFF',
        fontWeight: "500",
        fontSize: 16,

    },
    fifthText: {
        color: '#FFFFFF',
        fontWeight: "400",
        fontSize: 14,
        marginTop: 10
    },
    container: {
        height: 50,
        backgroundColor: "#1E1E1E",
        borderRadius: 20,
        opacity: 0.9,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        marginVertical: 10
    },
})

export default ThirdSplashScreen