import { View, Text, SafeAreaView, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons, AntDesign, Entypo } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Cup from '../assets/image/cup4.png'
import Daily from './Daily'
import Monthly from './Monthly'
import Weekly from './Weekly'

type RootStackParamList = {
    Chat: undefined;

};
type NavigationProp = StackNavigationProp<RootStackParamList, 'Chat'>;

const Achievement = () => {
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
                    <TouchableOpacity  onPress={() => navigation.goBack()} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", height: 32, width: 32, borderRadius: 30, backgroundColor: "#1E1E1E" }}>
                        <MaterialIcons name="arrow-back-ios-new" size={15} color="#FFFFFF" />
                    </TouchableOpacity>
                    <Text style={styles.firstText}>Achievement</Text>

                    <View></View>
                </View>
                <View style={styles.container}>
                    <View style={styles.roundedContainer}>
                        <Image source={Cup} />
                    </View>
                    <View style={styles.secondContainer}>
                        <View style={{ width: "50%" }}>
                            <Text style={styles.thirdText}>Daily login</Text>
                            <Text style={styles.fourthText}>Login for 7 days to achieve</Text>
                        </View>
                        <View style={{
                            justifyContent: "center", alignItems: "flex-end"
                        }}>
                            <Text style={styles.fifthText}>Completed</Text>

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
        color: '#1D4ED8',
        fontWeight: "600",
        fontSize: 16,
    },
    thirdText: {
        fontWeight: "700",
        fontSize: 14,
        color: "#FFFFFF"
    },
    fourthText: {
        fontWeight: "400",
        fontSize: 12.5,
        color: "#777777"
    },
    fifthText: {
        fontWeight: "400",
        fontSize: 12,
        color: "#0C9229"
    },

    secondContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        marginLeft: 8

    },
    container: {
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
      roundedContainer: {
        height: 36,
        width: 36,
        borderRadius: 25,
        backgroundColor: "#401D1D",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

      },
   

})
export default Achievement