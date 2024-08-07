import { View, Text, Dimensions, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
const { width, height } = Dimensions.get('window')
interface ConversationModalProps {
    setModal: (value: boolean) => void;
    modal: boolean;
}
const TrendingModal = ({ setModal, modal }: ConversationModalProps) => {


    return (
        <Modal
          
            transparent={true}
            style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
            visible={modal}
            onRequestClose={() => {
                setModal(!modal);
            }}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View>
                        <Text style={styles.firstText}>Trending</Text>
                        <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                            <View style={styles.container}>
                                <Text style={styles.secondText}>Confession</Text>
                            </View>
                            <View style={styles.container}>
                                <Text style={styles.secondText}>Confession</Text>
                            </View>
                            <View style={styles.container}>
                                <Text style={styles.secondText}>Confession</Text>
                            </View>
                            <View style={styles.container}>
                                <Text style={styles.secondText}>Confession</Text>
                            </View>
                            <View style={[styles.container, { backgroundColor: "#1D4ED8" }]}>
                                <Text style={styles.secondText}>DM</Text>
                            </View>
                            <View style={[styles.container, { backgroundColor: "#1D4ED8" }]}>
                                <Text style={styles.secondText}>DM</Text>
                            </View>
                            <View style={[styles.container, { backgroundColor: "#1D4ED8" }]}>
                                <Text style={styles.secondText}>DM</Text>
                            </View>
                            <View style={[styles.container, { backgroundColor: "#1D4ED8" }]}>
                                <Text style={styles.secondText}>DM</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row",  marginTop: 40, justifyContent: "space-between", alignItems: "center", }}>
                        <View style={[styles.container, { backgroundColor: "#1D4ED8" }]}>
                            <Text style={styles.secondText}>DM</Text>
                        </View>
                        <Text style={styles.thirdText}>See more</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

    modalContainer: {
        // flex: 1,
        // backgroundColor: 'rgba(0,0,0,0.5)',
    },
    container: {
        padding: 4,
        paddingHorizontal: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#B20000",
        borderRadius: 10
    },


    modalContent: {
        width: '100%',
        position: 'absolute',
        top: 70,
        backgroundColor: '#131212',
        height: height * 0.20,
        paddingHorizontal: 20
    },
    firstText: {
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#FFFFFF",
    },
    secondText: {
        fontSize: 11,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#FFFFFF",

    },
    thirdText: {
        fontSize: 11,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#1D4ED8",
    },


})

export default TrendingModal
