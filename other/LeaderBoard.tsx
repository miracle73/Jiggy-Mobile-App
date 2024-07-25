import { View, Text, SafeAreaView, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons, AntDesign, Entypo } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Daily from './Daily'
import Monthly from './Monthly'
import Weekly from './Weekly'

type RootStackParamList = {
    Chat: undefined;

};
type NavigationProp = StackNavigationProp<RootStackParamList, 'Chat'>;

const LeaderBoard = () => {
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

        }}>
            <StatusBar style="light" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", height: 32, width: 32, borderRadius: 30, backgroundColor: "#1E1E1E" }}>
                        <MaterialIcons name="arrow-back-ios-new" size={15} color="#FFFFFF" />
                    </TouchableOpacity>
                    <Text style={styles.firstText}>Leaderboard</Text>

                    <View></View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "flex-start", gap: 16, alignItems: "center", paddingHorizontal: 20, }}>
                    {['Daily', 'Weekly', 'Monthly'].map((tab) => (
                        <TouchableOpacity key={tab} onPress={() => handleTabPress(tab)}>
                            <Text style={{
                                color: activeTab === tab ? '#F33F5E' : '#777777',
                                fontWeight: '600' as '600',
                                fontSize: 15,
                                textDecorationLine: activeTab === tab ? 'underline' : 'none',
                            }}>{tab}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={{ marginTop: 10 }}>
                    {activeTab === 'Daily' && <Daily />}
                    {activeTab === 'Weekly' && <Weekly />}
                    {activeTab === 'Monthly' && <Monthly />}

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
        color: '#1D4ED8',
        fontWeight: "600",
        fontSize: 16,
    },



    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 130,
        backgroundColor: "#1E1E1E",
        marginTop: 5,

    },
    roundedContainer: {
        height: 84,
        width: 84,
        borderRadius: 100,
        marginTop: -50,
        marginHorizontal: 20
    },

})
export default LeaderBoard