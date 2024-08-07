import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image, ImageBackground, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Background from '../assets/image/Background.jpg'
import { MaterialIcons } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Password from '../assets/image/lock.png'
import VisiblePassword from '../assets/image/visiblePassword.png'
import HidePassword from '../assets/image/hidepassword.png'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useLoginUserMutation } from '../Api';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../Store';

type RootStackParamList = {
    CreateAccount: undefined;
    ForgotPassword: undefined;
    BottomNavigation: undefined;

};
type NavigationProp = StackNavigationProp<RootStackParamList, 'CreateAccount', 'ForgotPassword'>;
type SecondNavigationProp = StackNavigationProp<RootStackParamList, 'BottomNavigation'>;
const Login = () => {
    const navigation = useNavigation<NavigationProp>();
    const secondNavigation = useNavigation<SecondNavigationProp>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false)
    const [isChecked, setIsChecked] = useState(false);
    const [loginUser] = useLoginUserMutation()


    const handleCheckBoxToggle = () => {
        setIsChecked(!isChecked);
    };


    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const handleSubmit = async () => {
        setLoading(true)
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character');
            return;
        }

        console.log(email, password)
        const userData = {
            grant_type: "password",
            client_id: "Ji2t21lMTg4UjMHSURMUgitwyVu8lJkMrjcZOMkd",
            client_secret: "iS9a6VtdrQ4YR1kRZhHhtzWtheu1yP22cgy6Sp9X7eyj0h6nwjT0i7wvQK6VkerU5in7PKH5hXgWAqBWsfktky9DWVOJBxpO0UnmwzeUAkpSZhvv9Su77lE5kvMtC95C",
            username: email,
            password: password,

        };

        try {
            await loginUser(userData).unwrap();
            secondNavigation.replace('BottomNavigation');
        } catch (error) {
            alert(error?.data?.error_description);
            console.log(error)
        }
        setEmail('');
        setPassword('');
        setLoading(false)
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
                    <TouchableOpacity style={styles.curvedContainer} onPress={() => navigation.goBack()}>
                        <MaterialIcons name="arrow-back-ios" size={12} color="#FFFFFF" style={{ marginLeft: 5 }} />
                    </TouchableOpacity>
                    <Text style={styles.firstText}>Continue with email</Text>
                </View>
                <KeyboardAwareScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps='handled'
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.secondText}>Welcome back</Text>
                    <Text style={[styles.thirdText, { marginTop: 10, marginBottom: 20 }]}>Sign in your account to continue </Text>

                    <Text style={[styles.fourthText, { marginTop: 20 }]}> Email </Text>
                    <View style={styles.container}>
                        <MaterialIcons name="keyboard-arrow-down" size={15} color="#FFFFFF" />
                        <TextInput
                            style={{ flex: 1, color: '#FFFFFF', marginLeft: 5 }}
                            placeholderTextColor='#29292E'
                            placeholder={'Email'}
                            onChangeText={text => {
                                setEmail(text);
                            }}
                            value={email}

                        />
                    </View>

                    <Text style={[styles.fourthText, { marginTop: 40 }]}> Password </Text>


                    <View style={[styles.container]}>
                        <Image
                            source={Password}
                        />
                        <TextInput
                            style={{ flex: 1, color: '#FFFFFF', marginLeft: 5 }}
                            placeholderTextColor='#29292E'
                            placeholder={'Password'}
                            onChangeText={text => {
                                setPassword(text);
                            }}
                            secureTextEntry={!passwordVisible}
                            value={password}

                        />

                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Image
                                source={passwordVisible ? VisiblePassword : HidePassword}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 2 }}>
                            <TouchableOpacity onPress={handleCheckBoxToggle} >
                                <View style={[styles.checkbox]}>
                                    {isChecked && <Text style={{ color: '#fff', fontSize: 17 }}>✔</Text>}
                                </View>
                            </TouchableOpacity>
                            <Text style={[styles.fourthText, { marginTop: 0 }]}>Remember me</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                            <Text style={styles.fifthText}>Forgot Password?</Text>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity onPress={handleSubmit} style={styles.secondContainer}>

                        {loading ? (
                            <ActivityIndicator size="small" color="#E3E3E3" />
                        ) : (
                            <Text
                                style={{
                                    color: '#FFFFFF',
                                    fontWeight: "500",
                                    fontSize: 16,
                                    textAlign: 'center',

                                }}
                            >
                                SIGN IN
                            </Text>
                        )}


                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10, gap: 6 }}>
                        <Text style={[styles.fourthText, { color: '#FFF8E7', textAlign: 'center' }]}> Don’t have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.replace('CreateAccount')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>

                                <Text style={[styles.fourthText, { color: '#F33F5E' }]}>
                                    Sign up
                                </Text>

                            </View>
                        </TouchableOpacity>
                    </View>
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
        marginTop: 20
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
        color: '#29292E',
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
})

export default Login