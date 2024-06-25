import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image, ImageBackground, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Background from '../assets/image/Background.jpg'
import { MaterialIcons } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Question1: undefined;

};
type NavigationProp = StackNavigationProp<RootStackParamList, 'Question1'>;

const ForgotPassword = () => {
    const navigation = useNavigation<NavigationProp>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const [otpCode, setOtpCode] = useState(Array(4).fill(''));
    const inputRefs = useRef(Array(4).fill(null));


    const handleLogin = () => {
        console.log(email, password);
        setEmail('')
        setPassword('')

    };
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const focusNextInput = (index: any) => {
        if (index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };
    const handleSubmit = () => {
        console.log(otpCode)
        setOtpCode(['', '', '', '']);
        navigation.navigate('Question1')
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#181A1C',

        }}>
            <StatusBar style="light" />
            <ImageBackground source={Background} style={{
                flex: 1, backgroundColor: '#000',
                paddingHorizontal: 20,
                paddingTop: 80
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <View style={styles.curvedContainer}>
                        <MaterialIcons name="arrow-back-ios" size={12} color="#FFFFFF" style={{ marginLeft: 5 }} />
                    </View>
                    <Text style={styles.firstText}>Forgot password</Text>
                </View>
                <KeyboardAwareScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps='handled'
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={[styles.secondText, { marginTop: 20 }]}>Forgot password</Text>
                    <Text style={[styles.thirdText, { marginTop: 10, marginBottom: 20 }]}>Sign up your account to continue  </Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        {otpCode.map((char, index) => (
                            <View key={index} style={{ marginTop: 40, borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                                <View style={styles.thirdContainer}>
                                    <TextInput
                                        ref={ref => inputRefs.current[index] = ref}
                                        value={char}
                                        onChangeText={text => {
                                            const newOtpCode = [...otpCode];
                                            newOtpCode[index] = text;
                                            setOtpCode(newOtpCode);
                                            focusNextInput(index);
                                        }}
                                        maxLength={1}
                                        keyboardType="numeric"
                                        returnKeyType="next"
                                        blurOnSubmit={false}
                                        style={{ textAlign: 'center', flex: 1, color: '#FFFFFF' }}
                                    />
                                </View>
                                <View style={styles.fourthContainer}></View>
                            </View>
                        ))}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>

                        <Text style={styles.fifthText}>Resend code?</Text>
                    </View>
                    <TouchableOpacity onPress={handleSubmit} style={styles.secondContainer}>


                        <Text
                            style={{
                                color: '#FFFFFF',
                                fontWeight: "500",
                                fontSize: 16,
                                textAlign: 'center',

                            }}
                        >
                            Next
                        </Text>



                    </TouchableOpacity>

                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    curvedContainer: {
        backgroundColor: '#50505B2B',
        height: 30,
        width: 30,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondContainer: {
        height: 50,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#F33F5E',
        paddingHorizontal: 10,
        marginTop: 40
    },
    firstText: {
        color: '#FFFFFF',
        fontWeight: "600",
        fontSize: 16,
    },
    secondText: {
        color: '#FFFFFF',
        fontWeight: "600",
        fontSize: 18,
    },
    thirdText: {
        color: '#96969C',
        fontWeight: "400",
        fontSize: 14,
    },
    fourthText: {
        color: '#FFFFFF',
        fontWeight: "400",
        fontSize: 14,
        marginTop: 10
    },
    fifthText: {
        color: '#96969C',
        fontWeight: "400",
        fontSize: 14,

    },
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#1E1E1E',
        paddingHorizontal: 10,
        borderRadius: 20,
        marginTop: 10

    },
    checkbox: {
        width: 25,
        height: 25,
        borderColor: '#96969C',
        borderWidth: 1,
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        backgroundColor: 'transparent',
    },
    thirdContainer: {
        height: 50,
        width: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
    },
    fourthContainer: {
        height: 10,
        width: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F33F5E',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,

    },
})

export default ForgotPassword