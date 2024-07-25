import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'

const Details = () => {
    const [username, setUsername] = useState("Anonymous")
    const [school, setSchool] = useState("IMSU")
    const [about, setAbout] = useState("")
    const [other1, setOther1] = useState("")
    const [other2, setOther2] = useState("")
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={styles.firstText}>Username</Text>
                <TextInput
                    value={username}
                    onChangeText={text => {
                        setUsername(text);
                    }}

                    style={{ backgroundColor: "#1E1E1E", marginVertical: 5, color: "#FFFFFF", borderRadius: 10, paddingVertical: 5, paddingHorizontal: 10 }} />
                <Text style={styles.secondText}>You need 30 coins to change username</Text>

                <Text style={[styles.firstText, { marginTop: 10 }]}>School</Text>
                <TextInput
                    value={school}
                    onChangeText={text => {
                        setSchool(text);
                    }}

                    style={{ backgroundColor: "#1E1E1E", marginVertical: 5, color: "#FFFFFF", borderRadius: 10, paddingVertical: 5, paddingHorizontal: 10 }} />
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

                <Text style={[styles.firstText, { marginTop: 20 }]}>Other</Text>
                <Text style={[styles.firstText, { color: "#777777", marginTop: 10 }]}>Agl name</Text>
                <TextInput
                    value={other1}
                    onChangeText={text => {
                        setOther1(text);
                    }}
                    placeholder='Shown on the Agl page'
                    placeholderTextColor={"#777777"}
                    style={{ backgroundColor: "#1E1E1E", marginVertical: 5, borderRadius: 10, paddingVertical: 5, paddingHorizontal: 10 }} />
               
                <Text style={[styles.firstText, { color: "#777777", marginTop: 10 }]}>Editor name</Text>
                <TextInput
                    value={other1}
                    onChangeText={text => {
                        setOther1(text);
                    }}
                    placeholder='Shown on the camps news page'
                    placeholderTextColor={"#777777"}
                    style={{ backgroundColor: "#1E1E1E", marginVertical: 5, borderRadius: 10, paddingVertical: 5, paddingHorizontal: 10 , marginBottom: 30}} />
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

export default Details