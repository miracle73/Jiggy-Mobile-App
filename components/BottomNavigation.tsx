import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaskedView from '@react-native-masked-view/masked-view';
import Home from '../BottomNavigationScreens/Home';
import Message from '../BottomNavigationScreens/Message';
import Notification from '../BottomNavigationScreens/Notification';
import Profile from '../BottomNavigationScreens/Profile';
import { LinearGradient } from 'expo-linear-gradient';
import New from '../BottomNavigationScreens/New';
import BackgroundIcon from '../assets/image/BottomIcon.png'


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    const [modal, setModal] = useState(false)
    return (
        <>
            <Tab.Navigator initialRouteName="Home" screenOptions={{
                tabBarStyle: { backgroundColor: '#000000', elevation: 10, height: 70, borderColor: '#000000' },
            }}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused, color }: { focused: boolean; color: string }) => (
                            <View>
                                {focused ?
                                    <SimpleLineIcons name="home" size={20} color="#1D4ED8" />
                                    : <SimpleLineIcons name="home" size={20} color="#777777" />}
                            </View>
                        ),
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: focused ? '#1D4ED8' : '#777777', fontSize: 12, marginBottom: 10 }}>Home</Text>
                        ),
                    }}
                />
                <Tab.Screen name="Message"
                    component={Message}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused, color }: { focused: boolean; color: string }) => (
                            <View>
                                {focused ?

                                    <Feather name="mail" size={23} color="#1D4ED8" />
                                    : <Feather name="mail" size={23} color="#777777" />}

                            </View>
                        ),
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: focused ? '#1D4ED8' : '#777777', fontSize: 12, marginBottom: 10 }}>Message</Text>
                        ),
                    }}
                />

                <Tab.Screen
                    name="Jiggy"
                    component={New}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused, color }: { focused: boolean; color: string }) => (
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={BackgroundIcon} />
                            </View>
                        ),
                        tabBarLabel: ''
                    }} />
                <Tab.Screen
                    name="Notification"
                    component={Notification}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused, color }: { focused: boolean; color: string }) => (
                            <View>
                                {focused ?
                                    <Ionicons name="notifications-outline" size={20} color="#1D4ED8" />
                                    : <Ionicons name="notifications-outline" size={20} color="#777777" />}
                            </View>
                        ),
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: focused ? '#1D4ED8' : '#777777', fontSize: 12, marginBottom: 10 }}>Notification</Text>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused, color }: { focused: boolean; color: string }) => (
                            <View>
                                {focused ?
                                    <Ionicons name="person-outline" size={20} color="#1D4ED8" />
                                    : <Ionicons name="person-outline" size={20} color="#777777" />}


                            </View>
                        ),
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ color: focused ? '#1D4ED8' : '#777777', fontSize: 12, marginBottom: 10 }}>Profile</Text>
                        ),
                    }}
                />
            </Tab.Navigator>

        </>

    );
}

const styles = StyleSheet.create({
    secondContainer: {
        height: 40,
        width: 40,
        borderRadius: 22,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mask: {
        flex: 1,
    },
    gradient: {
        flex: 1,
    },
});

export default BottomNavigation;
