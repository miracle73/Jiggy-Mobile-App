import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Frame from '../assets/image/Frame.png';
import Search from '../assets/image/search.png';
import { MaterialIcons, Entypo, AntDesign, FontAwesome } from '@expo/vector-icons'


const Chat = () => {
    const [message, setMessage] = useState("")
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
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
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: "#000000" }}>
                <View style={{}}>

                </View>
            </ScrollView>

            <View style={styles.fourthContainer}>
                <View style={styles.secondContainer}>
                    <AntDesign name="plus" color="#FFFFFF" size={12} />
                </View>
                <View style={styles.thirdContainer}>
                    <TextInput
                        style={{ color: "#72777A" }}
                        placeholderTextColor='#72777A'
                        placeholder={'Type your message'}
                        onChangeText={text => {
                            setMessage(text);
                        }}
                        value={message}

                    />
                    <TouchableOpacity>
                        <FontAwesome name="send" color="#B20000" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
 
    fourthContainer: {
        flexDirection: "row",
        paddingVertical: 10,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: '#1E1E1E',
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
        backgroundColor: '#2A2A2A',
        elevation: 10,

    },

    thirdContainer: {
        height: 52,
        width: "75%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: '#2A2A2A',
        borderRadius: 25,
        paddingHorizontal: 10
    }
});

export default Chat;
