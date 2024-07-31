import React, { useEffect, useState } from 'react';  
import { View, StyleSheet, SafeAreaView, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';  
import { StatusBar } from 'expo-status-bar';  
import Background from '../assets/image/Background.jpg';  
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';  
import { useNavigation } from '@react-navigation/native';  
import { StackNavigationProp } from '@react-navigation/stack';  
import Jiggy from '../assets/image/jiggy.png';  
import { useUpdateUserDetailsMutation } from '../Api';  

type RootStackParamList = {  
    Question3: undefined;  
};  
type NavigationProp = StackNavigationProp<RootStackParamList, 'Question3'>;  

const Question2 = () => {  
    const navigation = useNavigation<NavigationProp>();  
    const [updateUserDetails] = useUpdateUserDetailsMutation();  

    const handleSave = async (selectedGender: string) => {  
        const userData = {  
            gender: selectedGender === 'Male' ? 'M' : selectedGender === 'Female' ? 'F' : selectedGender,  
        };  

        console.log(selectedGender, 3); // Log the selected gender  
        try {  
            await updateUserDetails(userData).unwrap();  
            console.log("Data saved successfully");  
            navigation.replace('Question3');  
        } catch (error) {  
            alert("There was an error, Please try again");  
            console.log(error);  
        }  
    };  

    return (  
        <SafeAreaView style={{ flex: 1, backgroundColor: '#181A1C' }}>  
            <StatusBar style="light" />  
            <ImageBackground source={Background} style={{ flex: 1, backgroundColor: '#000', paddingHorizontal: 20, paddingTop: 50 }}>  
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 20 }}>  
                    <View />  
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>  
                        <Image source={Jiggy} />  
                    </View>  
                    <TouchableOpacity onPress={() => navigation.replace('Question3')}>  
                        <Text style={styles.firstText}>Skip</Text>  
                    </TouchableOpacity>  
                </View>  
                <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false}>  
                    <Text style={[styles.secondText, { marginTop: 50, textAlign: 'center' }]}>About you</Text>  
                    <Text style={[styles.thirdText, { marginTop: 10, marginBottom: 20, textAlign: 'center' }]}>  
                        Tell us about yourself to improve ads & connect you to other users (Your information will not be used for any other thing)  
                    </Text>  

                    <Text style={styles.fifthText}>What’s your gender?</Text>  

                    <TouchableOpacity style={styles.container} onPress={() => handleSave('Male')}>  
                        <Text style={styles.fourthText}>Male</Text>  
                    </TouchableOpacity>  
                    <TouchableOpacity style={styles.container} onPress={() => handleSave('Female')}>  
                        <Text style={styles.fourthText}>Female</Text>  
                    </TouchableOpacity>  
                    <TouchableOpacity style={styles.container} onPress={() => handleSave('I prefer not to say')}>  
                        <Text style={styles.fourthText}>I prefer not to say</Text>  
                    </TouchableOpacity>  
                </KeyboardAwareScrollView>  
            </ImageBackground>  
        </SafeAreaView>  
    );  
}  

const styles = StyleSheet.create({  
    container: {  
        height: 50,  
        backgroundColor: "#1E1E1E",  
        borderRadius: 15,  
        opacity: 0.9,  
        flexDirection: 'row',  
        justifyContent: 'center',  
        alignItems: 'center',  
        marginVertical: 10,  
    },  
    firstText: {  
        color: '#FFFFFF',  
        fontWeight: "600",  
        fontSize: 14,  
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
        color: '#96969C',  
        fontWeight: "500",  
        fontSize: 16,  
    },  
    fifthText: {  
        color: '#FFFFFF',  
        fontWeight: "500",  
        fontSize: 16,  
        textAlign: "center",  
        marginBottom: 30,  
        marginTop: 30,  
    },  
});  

export default Question2;