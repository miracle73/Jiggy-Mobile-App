import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image, ImageBackground, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Background from '../assets/image/Background.jpg'
import { MaterialIcons } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    CheckEmail: undefined;
    Login: undefined;

};
type NavigationProp = StackNavigationProp<RootStackParamList, 'CheckEmail', 'Login'>;

const ForgotPassword = () => {
    const navigation = useNavigation<NavigationProp>();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false)
   

    const handleSubmit = () => {
        setLoading(true)
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            setLoading(false);
            return;
        }
      
      
        setEmail('');
   
        console.log(email)
        navigation.replace('CheckEmail')
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
                    <TouchableOpacity style={styles.curvedContainer} onPress={() => navigation.goBack()}>
                        <MaterialIcons name="arrow-back-ios" size={12} color="#FFFFFF" style={{ marginLeft: 5 }} />
                    </TouchableOpacity>
                    <Text style={styles.firstText}>forgot password</Text>
                </View>
                <KeyboardAwareScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps='handled'
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.secondText}>Forgot password </Text>
                    <Text style={[styles.thirdText, { marginTop: 10, marginBottom: 20 }]}>
                        Enter your email and we will send an email with instructions to reset your password.
                    </Text>

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
                                Submit
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
 
})

export default ForgotPassword