import { View, Text, SafeAreaView, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons, AntDesign, Entypo } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Coin from '../assets/image/jiggy_coin.png'
import Message from '../assets/image/message3.png'

type RootStackParamList = {
    Chat: undefined;

};
type NavigationProp = StackNavigationProp<RootStackParamList, 'Chat'>;

const Reward = () => {
    const [activeTab, setActiveTab] = useState('Daily');

    const navigation = useNavigation<NavigationProp>();
    const handleTabPress = (tab: any) => {
        setActiveTab(tab);
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#121212',
            paddingTop: 50,
            paddingHorizontal: 20

        }}>
            <StatusBar style="light" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", height: 32, width: 32, borderRadius: 30, backgroundColor: "#1E1E1E" }}>
                        <MaterialIcons name="arrow-back-ios-new" size={15} color="#FFFFFF" />
                    </View>
                    <Text style={styles.firstText}>Reward</Text>

                    <View></View>
                </View>
                <Text style={styles.secondText}>Daily reward</Text>
                <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", marginTop: 5, marginBottom: 20}}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <View style={styles.container}>
                            <Text style={styles.thirdText}>1</Text>
                            <Image source={Coin} />
                        </View>
                        <Text style={styles.fourthText}>Day 1</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <View style={styles.container}>
                            <Text style={styles.thirdText}>2</Text>
                            <Image source={Coin} />
                        </View>
                        <Text style={styles.fourthText}>Day 2</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <View style={styles.container}>
                            <Text style={styles.thirdText}>3</Text>
                            <Image source={Coin} />
                        </View>
                        <Text style={styles.fourthText}>Day 3</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <View style={styles.container}>
                            <Text style={styles.thirdText}>4</Text>
                            <Image source={Coin} />
                        </View>
                        <Text style={styles.fourthText}>Day 4</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <View style={styles.container}>
                            <Text style={styles.thirdText}>5</Text>
                            <Image source={Coin} />
                        </View>
                        <Text style={styles.fourthText}>Day 5</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <View style={styles.container}>
                            <Text style={styles.thirdText}>6</Text>
                            <Image source={Coin} />
                        </View>
                        <Text style={styles.fourthText}>Day 6</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <View style={styles.container}>
                            <Text style={styles.thirdText}>7</Text>
                            <Image source={Coin} />
                        </View>
                        <Text style={styles.fourthText}>Day 7</Text>
                    </View>
                </View>
                <Text style={styles.secondText}>Task</Text>
                <View style={[styles.container, {marginTop: 10}]}>

                    <Image source={Message} />

                    <View style={styles.secondContainer}>
                        <View style={{  }}>
                            <Text style={styles.fifthText}>Connect</Text>
                            <Text style={styles.sixthText}>Send messages to 3 people</Text>
                        </View>
                        <View style={styles.roundedContainer}>
                            <Text style={styles.thirdText}>+3</Text>
                            <Image source={Coin} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    firstText: {
        color: '#FFFFFF',
        fontWeight: "600",
        fontSize: 20,
    },
    secondText: {
        color: '#FFFFFF',
        fontWeight: "500",
        fontSize: 16,
    },
    thirdText: {
        fontWeight: "400",
        fontSize: 17,
        color: "#FFFFFF"
    },
    fourthText: {
        fontWeight: "500",
        fontSize: 8,
        color: "#777777"
    },
    fifthText: {
        fontWeight: "700",
        fontSize: 14,
        color: "#FFFFFF"
    },
    sixthText: {
        fontWeight: "400",
        fontSize: 12,
        color: "#FFFFFF"
    },

    secondContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        marginLeft: 8

    },
    thirdContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 4,
        alignItems: "center",
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: "#1E1E1ECC",
        paddingVertical: 10,
        marginTop: 30


    },
    container: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 4,
        alignItems: "center",
        backgroundColor: "#161616",
        borderRadius: 7,
        elevation: 10,
        height: 40


    },

    roundedContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 4,
        alignItems: "center",
        backgroundColor: "#161616",
        borderRadius: 7,
        elevation: 10,
        paddingHorizontal: 10,
        paddingVertical: 5
    },


})
export default Reward