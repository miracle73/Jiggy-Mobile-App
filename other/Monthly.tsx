import { View, Text, TextInput, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Bear from '../assets/image/Bear2.png'
import SecondBear from '../assets/image/Bear.png'
import Cup from '../assets/image/cup.png'
import SecondCup from '../assets/image/cup2.png'
import ThirdCup from '../assets/image/cup3.png'
import Badge from '../assets/image/badge.png'
import Dog from '../assets/image/Dog.png'

const Monthly = () => {
    const [username, setUsername] = useState("Anonymous")
    const [school, setSchool] = useState("IMSU")
    const [about, setAbout] = useState("")
    const [other1, setOther1] = useState("")
    const [other2, setOther2] = useState("")
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingHorizontal: 20 }}>
                <View style={{ justifyContent: "center", paddingTop: 70,  alignItems: "center" }}>
                    <View style={styles.roundedContainer}>
                        <Image source={Bear} />
                    </View>
                    <Text style={styles.firstText}>makyismynickname</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: "center",
                    gap: 8,
                    flexDirection: "row",
                    marginTop: 10
                }}>
                    <View style={styles.container}>
                        <Image source={SecondCup} />
                        <Text style={styles.thirdText}>Rank: 5th</Text>
                    </View>
                    <View style={styles.container}>
                        <Image source={Badge} />
                        <Text style={styles.thirdText}>Karma: 1231 pts</Text>
                    </View>
                </View>
                <View style={styles.secondContainer}>
                    <Image source={ThirdCup} />
                    <Text style={[styles.thirdText, { color: '#1D4ED8' }]}>400 points behind 10th place</Text>
                </View>

                <Text style={styles.fourthText}>Top 3</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 4, paddingHorizontal: 10, marginTop: 20 }}>
                    <View style={[styles.thirdContainer, { marginTop: 40 }]}>
                        <Text style={styles.fifthText}>2</Text>
                        <View style={styles.secondRoundedContainer}>
                            <Image source={SecondBear} />
                        </View>
                        <Text style={styles.fifthText}>Anonymous</Text>
                        <Text style={[styles.fifthText, { fontSize: 12, color: "#C0C0C0" }]}>2000 points</Text>
                    </View>
                    <View style={[styles.thirdContainer, { alignSelf: "flex-start" }]}>
                        <Image source={Cup} />
                        <View style={styles.secondRoundedContainer}>
                            <Image source={SecondBear} />
                        </View>
                        <Text style={styles.fifthText}>Anonymous</Text>
                        <Text style={[styles.fifthText, { fontSize: 12, color: "#FFC90C" }]}>2000 points</Text>
                    </View>
                    <View style={[styles.thirdContainer, { marginTop: 40}]}>
                        <Text style={styles.fifthText}>2</Text>
                        <View style={styles.secondRoundedContainer}>
                            <Image source={SecondBear} />
                        </View>
                        <Text style={styles.fifthText}>Anonymous</Text>
                        <Text style={[styles.fifthText, { fontSize: 12, color: "#CDA865" }]}>2000 points</Text>
                    </View>
                </View>
                <View style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    marginTop: 40
                }}>
                    <Text style={styles.sixthText}>Rank</Text>
                    <Text style={styles.sixthText}>Name</Text>
                    <Text style={styles.sixthText}>Karma</Text>
                </View>
                <View style={styles.fourthContainer}>
                    <Text style={styles.firstText}>Rank</Text>
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        gap: 6,
                    }}>
                        <Image source={Dog} />
                        <Text style={styles.firstText}>Stephen Joseph</Text>
                    </View>
                    <Text style={styles.firstText}>2,123</Text>
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({

    firstText: {
        color: '#FFFFFF',
        fontWeight: "700",
        fontSize: 14,
    },
    secondText: {
        color: '#777777',
        fontWeight: "400",
        fontSize: 12,

    },
    thirdText: {
        color: '#FFFFFF',
        fontWeight: "700",
        fontSize: 12,
    },
    fourthText: {
        color: '#FFFFFF',
        fontWeight: "700",
        fontSize: 20,
        textAlign: "center",
        marginTop: 25
    },
    fifthText: {
        fontWeight: "500",
        fontSize: 11,
        color: "#FFFFFF"
    },
    sixthText: {
        fontWeight: "600",
        fontSize: 11,
        color: "#868686"
    },
    container: {
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 6,
        width: "40%",
        backgroundColor: "#1E1E1E",
        borderRadius: 18,
        paddingHorizontal: 10
    },
    secondContainer: {
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 6,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 18,
        marginHorizontal: 20,
        marginTop: 10
    },
    thirdContainer: {
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        paddingHorizontal: 10,
        backgroundColor: "#1E1E1E",
        paddingVertical: 15,
        borderRadius: 12
    },
    fourthContainer: {
        backgroundColor: "#FFC90C",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",

        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 18,

    },
    roundedContainer: {
        height: 84,
        width: 84,
        borderRadius: 100,
        marginTop: -50,
        marginHorizontal: 20
    },
    secondRoundedContainer: {
        height: 36,
        width: 36,
        borderRadius: 25
    },
})

export default Monthly