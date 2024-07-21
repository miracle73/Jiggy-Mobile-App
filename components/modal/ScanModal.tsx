import { View, Text, Dimensions, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Upload from '../../assets/image/upload.png'
import Icon from '../../assets/image/jiggy.png'
import Cancel from '../../assets/image/cancel.png'
import Scan from '../../assets/image/scan.png'

const { width, height } = Dimensions.get('window')
interface BoostModalProps {
    setModal: (value: boolean) => void;
    modal: boolean;
}
const ScanModal = ({ setModal, modal }: BoostModalProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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
                    <View style={styles.container}>
                        <Text style={styles.firstText}>Scan QR code</Text>
                        <Image source={Cancel} />
                    </View>
                    <View style={styles.secondContainer}>
                        <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-end" }}>
                            <Image source={Upload} />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "flex-start" }}>
                            <Image source={Icon} />
                        </View>
                        <Text style={styles.secondText}>ID: 29383842</Text>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Image source={Scan} style={{marginTop: 10}} />
                        </View>
                        <Text style={styles.thirdText}>Open jiggy and scan the code. lets chat anonymously!</Text>

                    </View>
                    <TouchableOpacity style={styles.thirdContainer}>
                        <Text style={styles.fourthText}>Scan</Text>
                    </TouchableOpacity>


                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    thirdContainer: {
        height: 50,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#F33F5E',
        paddingHorizontal: 10,
        marginTop: 10
    },
   
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',

    },
    secondContainer: {
        backgroundColor: "#181818",
        borderRadius: 30,
        height: 350,
        marginTop: 15,
        paddingHorizontal: 20,
        paddingTop: 10
    },
 
    modalContent: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#1E1E1E',
        elevation: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: height * 0.68,
        paddingHorizontal: 20,
        paddingTop: 20
    },
    firstText: {
        fontSize: 20,
        fontWeight: "600",
        fontStyle: "normal",
        color: "#FFFFFF",
    },
    secondText: {
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#72777A",
        marginTop: 7,
        textAlign: "center"
    },
    thirdText: {
        fontSize: 11,
        fontWeight: "400",
        fontStyle: "normal",
        textAlign: "center",
        color: "#72777A",
        marginTop: 10
    },
    fourthText: {
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#FFFFFF",
    },
    fifthText: {
        fontSize: 12,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#FFFFFF",
    },
   
})

export default ScanModal
