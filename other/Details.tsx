import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import RNPickerSelect from 'react-native-picker-select';

interface DetailsProps {
    about: string;
    setAbout: (text: string) => void;
    country: string;
    setCountry: (text: string) => void;
}

const Details: React.FC<DetailsProps> = ({ about, setAbout, country, setCountry }) => {
    const [username, setUsername] = useState("Anonymous")
    const [school, setSchool] = useState("IMSU")

    const [other1, setOther1] = useState("")
    const [other2, setOther2] = useState("")
    const genderOptions = [{
        label: "Male",
        value: "M"
    },
    {
        label: "Female",
        value: "F"
    }];


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingHorizontal: 20, paddingBottom: 50 }}>
                <Text style={styles.firstText}>Username</Text>
                <View style={{ backgroundColor: "#1E1E1E", marginVertical: 5, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <Text style={{ color: "#FFFFFF", fontSize: 14, fontWeight: "400" }}>Anonymous</Text>
                </View>
                {/* <TextInput
                    value={username}
                    onChangeText={text => {
                        setUsername(text);
                    }}

                    style={{ backgroundColor: "#1E1E1E", marginVertical: 5, color: "#FFFFFF", borderRadius: 10, paddingVertical: 5, paddingHorizontal: 10 }} /> */}
                <Text style={styles.secondText}>You need 30 coins to change username</Text>

                <Text style={[styles.firstText, { marginTop: 10 }]}>School</Text>
                {/* <TextInput
                    value={school}
                    onChangeText={text => {
                        setSchool(text);
                    }}

                    style={{ backgroundColor: "#1E1E1E", marginVertical: 5, color: "#FFFFFF", borderRadius: 10, paddingVertical: 5, paddingHorizontal: 10 }} /> */}
                <View style={{ backgroundColor: "#1E1E1E", marginVertical: 5, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <Text style={{ color: "#FFFFFF", fontSize: 14, fontWeight: "400" }}>IMSU</Text>
                </View>
                <Text style={styles.secondText}>This can’t be changed</Text>
                <Text style={[styles.firstText, { marginTop: 10 }]}>About me (optional)</Text>
                <TextInput
                    value={about}
                    onChangeText={text => {
                        setAbout(text);
                    }}
                    placeholder='A little description of yourself'
                    placeholderTextColor={"#777777"}
                    multiline={true}
                    numberOfLines={4}
                    style={{
                        backgroundColor: "#1E1E1E", justifyContent: "flex-start",
                        textAlignVertical: 'top', marginVertical: 5, color: "#FFFFFF", borderRadius: 10, paddingVertical: 5, paddingHorizontal: 10
                    }} />
                <Text style={[styles.firstText, { marginTop: 10 }]}>Country (optional)</Text>
                <TextInput
                    value={country}
                    onChangeText={text => {
                        setCountry(text);
                    }}

                    style={{ backgroundColor: "#1E1E1E", marginVertical: 5, color: "#FFFFFF", borderRadius: 10, paddingVertical: 5, paddingHorizontal: 10 }} />
                {/* <View style={{ marginTop: 10 }}>
                    <RNPickerSelect
                        onValueChange={(value) => setGender(value)}
                        items={genderOptions}
                        placeholder={{ label: "What's your gender", value: null }}
                        useNativeAndroidPickerStyle={false}
                        style={pickerSelectStyles}
                        value={gender}
                        Icon={() => {
                            return (
                                <MaterialIcons
                                    name="arrow-drop-down"
                                    size={24}
                                    color="#FFFFFF"
                                    style={{ alignSelf: 'center' }} // Center the icon  
                                />
                            );
                        }}
                    />
                </View> */}
                <Text style={[styles.firstText, { marginTop: 20 }]}>Other</Text>
                <Text style={[styles.firstText, { color: "#777777", marginTop: 10 }]}>Agl name</Text>
                {/* <TextInput
                    value={other1}
                    onChangeText={text => {
                        setOther1(text);
                    }}
                    placeholder='Shown on the Agl page'
                    placeholderTextColor={"#777777"}
                    style={{ backgroundColor: "#1E1E1E", marginVertical: 5, borderRadius: 10, paddingVertical: 5, paddingHorizontal: 10 }} /> */}
                <View style={{ backgroundColor: "#1E1E1E", marginVertical: 5, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <Text style={{ color: "#777777", fontSize: 14, fontWeight: "400" }}>Shown on the Agl page</Text>
                </View>

                <Text style={[styles.firstText, { color: "#777777", marginTop: 10 }]}>Editor name</Text>
                {/* <TextInput
                    value={other1}
                    onChangeText={text => {
                        setOther1(text);
                    }}
                    placeholder='Shown on the camps news page'
                    placeholderTextColor={"#777777"}
                    style={{ backgroundColor: "#1E1E1E", marginVertical: 5, borderRadius: 10, paddingVertical: 5, paddingHorizontal: 10, marginBottom: 30 }} /> */}
                <View style={{ backgroundColor: "#1E1E1E", marginVertical: 5, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <Text style={{ color: "#777777", fontSize: 14, fontWeight: "400" }}>Shown on the camps news page</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    firstText: {
        color: '#FFFFFF',
        fontWeight: "600",
        fontSize: 16,

    },
    secondText: {
        color: '#777777',
        fontWeight: "400",
        fontSize: 12,

    },
})


const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#1E1E1E',
        borderRadius: 20,
        color: '#FFFFFF',
        paddingRight: 30, // to ensure the text is not overlapping with the icon  
        alignSelf: 'stretch' // Ensure full width  
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: '#1E1E1E',
        borderRadius: 20,
        color: '#FFFFFF',
        paddingRight: 30, // to ensure the text is not overlapping with the icon  
        alignSelf: 'stretch' // Ensure full width  
    },
    iconContainer: {
        top: '50%', // Center vertically  
        right: 10, // Add some spacing to the right to avoid overlap on Android  
        transform: [{ translateY: -12 }], // Adjust vertical alignment  
        justifyContent: 'center',
        alignItems: 'center'
    },
});


export default Details