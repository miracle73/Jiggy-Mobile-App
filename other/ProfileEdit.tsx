import { View, Text, SafeAreaView, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons, AntDesign, Entypo } from '@expo/vector-icons'
import ProfileIcon from '../assets/image/ProfileIcon.png'
import Bear from '../assets/image/Bear2.png'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Details from './Details'
import Stats from './Stats'
import { useUpdateUserDetailsMutation } from '../Api'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../Store';

type RootStackParamList = {
    Chat: undefined;
    Profile: undefined;


};
type NavigationProp = StackNavigationProp<RootStackParamList, 'Chat', 'Profile'>;

const ProfileEdit = () => {
    const [activeTab, setActiveTab] = useState('Details');
   
    const [country, setCountry] = useState("");
    const [about, setAbout] = useState("");
    const [updateUserDetails] = useUpdateUserDetailsMutation()

    const navigation = useNavigation<NavigationProp>();
    const handleTabPress = (tab: any) => {
        setActiveTab(tab);
    };

    const handleSave = async () => {
        const userData = {
            about: about,
            country: country,
            
        };
        console.log(about,  country)
        try {
            await updateUserDetails(userData).unwrap();

            navigation.navigate('Profile')
        } catch (error) {
            alert("There was an error, Please try again");
            console.log(error)
        }
        setAbout("")
        setCountry("")

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
                    <Text style={styles.firstText}>Edit profile</Text>
                    <TouchableOpacity onPress={handleSave}>
                        <Text style={styles.secondText}>Save</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.container}>
                    <Entypo name="plus" size={15} color="#FFFFFF" />

                </View>
                <View style={styles.roundedContainer}>
                    <Image source={Bear} />
                </View>
                <Entypo name="plus" size={25} color="#FFFFFF" style={{ marginTop: -20, marginHorizontal: 70 }} />
                <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "flex-end", gap: 16, alignItems: "center", paddingHorizontal: 20, }}>
                    {['Details', 'Stats'].map((tab) => (
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
                <View style={{ paddingTop: 10, }}>
                    {activeTab === 'Details' &&
                        <Details
                            about={about}
                            setAbout={setAbout}
                           
                          
                            country={country}
                            setCountry={setCountry} />
                    }
                    {activeTab === 'Stats' && <Stats />}

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
export default ProfileEdit