import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image, ImageBackground, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Background from '../assets/image/Background.jpg'
import { MaterialIcons } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Jiggy from '../assets/image/jiggy.png'
import { useUpdateUserDetailsMutation } from '../Api'


type RootStackParamList = {
    Login: undefined;

};
type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Question4 = () => {
    const [year, setYear] = useState(0)
    const navigation = useNavigation<NavigationProp>();
    const [updateUserDetails] = useUpdateUserDetailsMutation()

    const handleSubmit = async (year: number) => {

        const userData = {
            graduation_year: year
        };
        console.log(year)
        try {
            await updateUserDetails(userData).unwrap();
            console.log("correct")
            navigation.replace('Login')
        } catch (error) {
            alert("There was an error, Please try again");
            console.log(error)
        }

        setYear(0)


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
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <View></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={Jiggy} />

                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.firstText}>Skip</Text>
                    </TouchableOpacity>

                </View>
                <KeyboardAwareScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps='handled'
                    showsVerticalScrollIndicator={false}
                >
                    

                    <Text style={styles.fifthText}> What year did you graduate ? </Text>

                    <TouchableOpacity style={styles.container} onPress={() => { handleSubmit(2023) }}>
                        <Text style={styles.fourthText}>2023</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => { handleSubmit(2022) }}>
                        <Text style={styles.fourthText}>2022</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => { handleSubmit(2021) }}>
                        <Text style={styles.fourthText}>2021</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => { handleSubmit(2020) }}>
                        <Text style={styles.fourthText}>2020</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => { handleSubmit(2019) }}>
                        <Text style={styles.fourthText}>2019</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.container} onPress={() => { handleSubmit(2018) }}>
                        <Text style={styles.fourthText}>2018</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => { handleSubmit(2017) }}>
                        <Text style={styles.fourthText}>2017</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => { handleSubmit(2016) }}>
                        <Text style={styles.fourthText}>2016</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => { handleSubmit(2015) }}>
                        <Text style={styles.fourthText}>2015</Text>
                    </TouchableOpacity>

                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
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
        marginVertical: 3
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
        marginTop: 40
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
        marginTop: 30

    },



})


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 8,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: '#FFFFFF',
        paddingRight: 30, // to ensure the text is never behind the icon
        backgroundColor: '#FFF1E1'
    },
    inputAndroid: {
        fontSize: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 28,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
        backgroundColor: '#FFF1E1'
    },
});


export default Question4