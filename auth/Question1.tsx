import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Background from '../assets/image/Background.jpg';
import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Jiggy from '../assets/image/jiggy.png';
import RNPickerSelect from 'react-native-picker-select';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../Store';
import { useGetSchoolsMutation } from '../Api';

type RootStackParamList = {
    Question2: undefined;
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'Question2'>;

const Question1 = () => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const navigation = useNavigation<NavigationProp>();
    const [getSchools] = useGetSchoolsMutation();
    const { schools } = useSelector((state: RootState) => state.user);

    const handleSubmit = () => {
        console.log(selectedValue);
        navigation.replace('Question2');
        setSelectedValue(null);
    };

    useEffect(() => {
        const fetchSchools = async () => {
            try {
                await getSchools({}).unwrap();
            } catch (error) {
                console.error('Failed to fetch schools:', error);
            }
        };

        fetchSchools();
    }, [getSchools]);

    // Map schools to picker items
    const schoolItems = schools.map(school => ({
        label: school.short_name,
        value: school.short_name
    }));

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#181A1C' }}>
            <StatusBar style="light" />
            <ImageBackground source={Background} style={{ flex: 1, backgroundColor: '#000', paddingHorizontal: 20, paddingTop: 50 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <View></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={Jiggy} />
                    </View>
                    <TouchableOpacity onPress={() => navigation.replace('Question2')}>
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
                    <Text style={styles.fifthText}>What’s your institution?</Text>
                    <RNPickerSelect
                        onValueChange={(value) => setSelectedValue(value)}
                        items={schoolItems}
                        placeholder={{ label: "Select an option...", value: null }}
                        style={pickerSelectStyles}
                    />
                    <TouchableOpacity onPress={handleSubmit} style={styles.secondContainer}>
                        <Text style={{ color: '#FFFFFF', fontWeight: "500", fontSize: 16, textAlign: 'center' }}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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
        color: '#FFFFFF',
        fontWeight: "400",
        fontSize: 14,
        marginTop: 10
    },
    fifthText: {
        color: '#FFFFFF',
        fontWeight: "500",
        fontSize: 16,
        textAlign: "center",
        marginBottom: 30,
        marginTop: 30
    },
});

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

export default Question1;
