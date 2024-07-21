import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Frame from '../assets/image/Frame.png';
import Search from '../assets/image/search.png';
import { MaterialIcons, Entypo, AntDesign, FontAwesome } from '@expo/vector-icons'


const Chat = () => {
    const [message, setMessage] = useState("")
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <StatusBar style="light" />
            <View style={{
                flexDirection: 'row', justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20,
                backgroundColor: '#1E1E1E', paddingTop: 50, elevation: 5, paddingBottom: 10
            }}>
                <View style={styles.firstContainer}>
                    <MaterialIcons name="arrow-back-ios" size={12} color="#B20000" />
                    <Text style={styles.firstText}>Back</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text style={styles.secondText}>Chat</Text>
                    <Text style={styles.thirdText}>From Random</Text>
                </View>
                <Entypo name="dots-three-vertical" size={12} color="#FFFFFF" />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                <View style={{}}>

                </View>
            </ScrollView>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20 }}>
                <View style={styles.secondContainer}>
                    <AntDesign name="plus" color="#FFFFFF" size={12} />
                </View>
                <View style={{ height: 52, width: "65%", }}>
                    <TextInput
                        style={{ color: "#29292E" }}
                        placeholderTextColor='#29292E'
                        placeholder={'Type your message'}
                        onChangeText={text => {
                            setMessage(text);
                        }}
                        value={message}

                    />
                    <TouchableOpacity>
                        <FontAwesome name="send" color="#B20000" size={15} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    fifthContainer: {
        height: 10,
        borderRadius: 14,
        backgroundColor: "#F33F5E",
        width: "50%",
    },
    fourthContainer: {
        height: 10,
        marginHorizontal: 20,
        borderRadius: 16,
        backgroundColor: "#1E1E1E",
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 4,
        borderColor: '#1E1E1E',
        paddingHorizontal: 10,
        paddingBottom: 15,
    },
    firstText: {
        color: '#B20000',
        fontWeight: '400',
        fontSize: 17,
        fontStyle: "normal",
    },
    secondText: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 20,
        fontStyle: "normal",
    },
    thirdText: {
        color: '#72777A',
        fontWeight: '700',
        fontSize: 14,
        fontStyle: "normal",
    },
    innerNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50%',
    },
    firstContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        gap: 4
    },
    secondContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        height: 52,
        width: 52,
        borderRadius: 40,
        backgroundColor: "#1E1E1E"

    },

    thirdContainer: {
        height: 150,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
});

export default Chat;
