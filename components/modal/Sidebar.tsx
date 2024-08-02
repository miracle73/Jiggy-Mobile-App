import { View, Text, Dimensions, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import RoundedImage from '../../assets/image/roundedImage.png'
import Icon from '../../assets/image/Best3.png'
import Camera from '../../assets/image/camera.png'
import FiveStar from '../../assets/image/Five-star.png'

const { width, height } = Dimensions.get('window')
interface ConversationModalProps {
    setModal: (value: boolean) => void;
    modal: boolean;
}
const SideBarModal = ({ setModal, modal }: ConversationModalProps) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
            visible={modal}
            onRequestClose={() => {
                setModal(!modal);
            }}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>

                
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    thirdContainer: {
        height: 50,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#F33F5E',
        paddingHorizontal: 10,
        marginTop: 20,
        marginHorizontal: 20
    },
    innerContainer: {
        height: 50,
        width: 100,
        borderRadius: 20,
        backgroundColor: "#262424",
        elevation: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    container: {
        gap: 4,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    secondContainer: {

        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 15
    },

    modalContent: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#1E1E1E',
        elevation: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: height * 0.40,
        paddingHorizontal: 20
    },
    firstText: {
        fontSize: 12,
        fontWeight: "700",
        fontStyle: "normal",
        color: "#FFFFFF",
    },
    secondText: {
        fontSize: 10,
        fontWeight: "700",
        fontStyle: "normal",
        color: "#777777",

    },
    thirdText: {
        fontSize: 16,
        fontWeight: "600",
        fontStyle: "normal",
        color: "#FFFFFF",
    },
    fourthText: {
        fontSize: 12,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#777777",
    },
    fifthText: {
        fontSize: 12,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#FFFFFF",
    },
  
})

export default SideBarModal
