import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image, ImageBackground, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Background from '../assets/image/Background.jpg'
import { MaterialIcons } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Jiggy from '../assets/image/jiggy.png'


type RootStackParamList = {
    Question3: undefined;

};
type NavigationProp = StackNavigationProp<RootStackParamList, 'Question3'>;

const Question2 = () => {
    const [gender, setGender] = useState('')
    const navigation = useNavigation<NavigationProp>();


    useEffect(() => {
        if (gender) {
          navigation.navigate('Question3');
          setGender('');
        }
      }, [gender]);

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
                    <TouchableOpacity onPress={() =>  navigation.navigate('Question3')}>
                        <Text style={styles.firstText}>Skip</Text>
                    </TouchableOpacity>
                </View>
                <KeyboardAwareScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps='handled'
                    showsVerticalScrollIndicator={false}
                >
                    <Text style={[styles.secondText, { marginTop: 50, textAlign: 'center' }]}>About you</Text>
                    <Text style={[styles.thirdText, { marginTop: 10, marginBottom: 20, textAlign: 'center' }]}> Tell us about yourself to improve ads & connect you to other users (Your information will not be used for any other thing) </Text>


                    <Text style={styles.fifthText}>What’s your gender?</Text>

                    <TouchableOpacity style={styles.container} onPress={() => setGender('Male')}>
                        <Text style={styles.fourthText}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => setGender('Female')}>
                        <Text style={styles.fourthText}>Female</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.container} onPress={() => setGender('I prefer not to say')}>
                        <Text style={styles.fourthText}>I prefer not to say</Text>
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
        marginVertical: 10
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


export default Question2