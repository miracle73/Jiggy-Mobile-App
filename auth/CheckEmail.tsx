import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image, ImageBackground, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Background from '../assets/image/Background.jpg'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Message from '../assets/image/msg.png'

type RootStackParamList = {
    CreatePassword: undefined;
    ForgotPassword: undefined

};
type NavigationProp = StackNavigationProp<RootStackParamList, 'CreatePassword', 'ForgotPassword'>;

const CheckEmail = () => {
    const navigation = useNavigation<NavigationProp>();

    const handleSubmit = () => {

        // navigation.replace('Question1')
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
                <View style={{}}>
                    <TouchableOpacity style={styles.curvedContainer} onPress={() => navigation.goBack()}>
                        <MaterialIcons name="arrow-back-ios" size={12} color="#FFFFFF" style={{ marginLeft: 5 }} />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'space-between', alignItems: 'center', gap: 12, marginTop: 100, }}>
                        <View>
                            <View style={{ justifyContent: "center", alignItems: "center", }}>
                                <View style={{ height: 70, width: 70, backgroundColor: "#1D253A", borderRadius: 70, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                    <Image source={Message} />
                                </View>
                                <Text style={[styles.firstText, { marginTop: 20 }]}>Check your mail</Text>
                                <Text style={[styles.secondText, { marginTop: 10 }]}>We have sent a password recovery instrctions to your email</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 70 }}>
                            <TouchableOpacity style={styles.container}>
                                <Text style={styles.thirdText}>Open email app</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.replace("CreatePassword")}>
                                <Text style={[styles.secondText, { marginTop: 10 }]}>Skip, i’ll confirm later</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 100 }}>
                            <Text style={styles.fourthText}>Didn’t recieve an email?Check your spam, junk
                            </Text>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Text style={styles.sixthText}>or  </Text>
                                <TouchableOpacity onPress={() => navigation.replace("ForgotPassword")}>
                                    <Text style={styles.fifthText}>Try another email address </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>

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

    firstText: {
        color: '#FFFFFF',
        fontWeight: "600",
        fontSize: 20,
        textAlign: "center"
    },
    secondText: {
        color: '#96969C',
        fontWeight: "500",
        fontSize: 14,
        textAlign: "center"
    },
    thirdText: {
        color: '#FFFFFF',
        fontWeight: "500",
        fontSize: 16,
    },
    fourthText: {
        color: '#96969C',
        fontWeight: "600",
        fontSize: 14,
        marginTop: 10
    },
    fifthText: {
        color: '#F33F5E',
        fontWeight: "600",
        fontSize: 14,

    },
    sixthText: {
        color: '#FFFFFF',
        fontWeight: "600",
        fontSize: 16,

    },
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#F33F5E"

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

export default CheckEmail