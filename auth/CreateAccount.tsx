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

type RootStackParamList = {
    Login: undefined;
    Verification: undefined;

};
type NavigationProp = StackNavigationProp<RootStackParamList, 'Login', 'Verification'>;

const CreateAccount = () => {
    const navigation = useNavigation<NavigationProp>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [institution, setInstitution] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [secondPasswordVisible, setSecondPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false)
    const [isChecked, setIsChecked] = useState(false);


    const handleCheckBoxToggle = () => {
        setIsChecked(!isChecked);
    };

    const handleLogin = () => {
        console.log(email, password);
        setEmail('')
        setPassword('')

    };
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const secondTogglePasswordVisibility = () => {
        setSecondPasswordVisible(!secondPasswordVisible);
    };
    const isPasswordMatch = (password: string, confirmPassword: string): boolean => {
        return password === confirmPassword;
    };

    const handleSubmit = () => {
        setLoading(true)
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            setLoading(false);
            return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character');
            setLoading(false);
            return;
        }
        if (!isPasswordMatch(password, cpassword)) {
            alert("Passwords do not match.");
            setCPassword("")
            setPassword("")
            setLoading(false);
            return;
        }
        setEmail('');
        setPassword('');
        setCPassword('');
        // setInstitution('');
        console.log(email, password, cpassword)
        navigation.replace('Verification')
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
                paddingTop: 50
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <View style={styles.curvedContainer}>
                        <MaterialIcons name="arrow-back-ios" size={12} color="#FFFFFF" style={{ marginLeft: 5 }} />
                    </View>
                    <Text style={styles.firstText}>Sign up</Text>
                </View>
                <KeyboardAwareScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps='handled'
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.secondText}>Create an account </Text>
                    <Text style={[styles.thirdText, { marginTop: 10, marginBottom: 20 }]}> Sign up your account to continue </Text>

                    <Text style={[styles.fourthText]}> Email </Text>
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

                    <Text style={[styles.fourthText, { marginTop: 20 }]}> Password </Text>
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

                    <Text style={[styles.fourthText, { marginTop: 20 }]}> Re-type password </Text>


                    <View style={[styles.container]}>
                        <Image
                            source={Password}
                        />
                        <TextInput
                            style={{ flex: 1, color: '#FFFFFF', marginLeft: 5 }}
                            placeholderTextColor='#29292E'
                            placeholder={'Re-type'}
                            onChangeText={text => {
                                setCPassword(text);
                            }}
                            secureTextEntry={!secondPasswordVisible}
                            value={cpassword}

                        />

                        <TouchableOpacity onPress={secondTogglePasswordVisibility}>
                            <Image
                                source={secondPasswordVisible ? VisiblePassword : HidePassword}
                            />
                        </TouchableOpacity>

                    </View>
                    {/* <Text style={[styles.fourthText, { marginTop: 20 }]}> Institution </Text>
                    <View style={styles.container}>

                        <TextInput
                            style={{ flex: 1, color: '#FFFFFF', marginLeft: 5 }}
                            placeholderTextColor='#29292E'
                            placeholder={'FUTO (Federal university technology...)'}
                            onChangeText={text => {
                                setInstitution(text);
                            }}
                            value={institution}

                        />
                        <MaterialIcons name="keyboard-arrow-down" size={15} color="#29292E" />
                    </View> */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 2 }}>
                            <TouchableOpacity onPress={handleCheckBoxToggle} >
                                <View style={[styles.checkbox]}>
                                    {isChecked && <Text style={{ color: '#fff', fontSize: 17 }}>✔</Text>}
                                </View>
                            </TouchableOpacity>
                            <Text style={[styles.fourthText, { marginTop: 0 }]}>Remember me</Text>
                        </View>
                        <Text style={styles.fifthText}>Forgot Password?</Text>
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
                                SIGN UP
                            </Text>
                        )}


                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10, gap: 6 }}>
                        <Text style={[styles.fourthText, { color: '#FFF8E7', textAlign: 'center' }]}> Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.replace('Login')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>

                                <Text style={[styles.fourthText, { color: '#F33F5E' }]}>
                                    Sign in
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

export default CreateAccount