import { View, Text, Dimensions, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Coin from '../../assets/image/coin.png'
import Icon from '../../assets/image/Best3.png'
import Notification from '../../assets/image/notification.png'

const { width, height } = Dimensions.get('window')
interface BoostModalProps {
    setModal: (value: boolean) => void;
    modal: boolean;
}
const BoostModal2 = ({ setModal, modal }: BoostModalProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const timeBoost = [
        {
            time: "1 hr",
            jigs: "30 jigs"
        },
        {
            time: "2 hr",
            jigs: "30 jigs"
        },
        {
            time: "3 hr",
            jigs: "30 jigs"
        },
        {
            time: "5 hr",
            jigs: "30 jigs"
        },
        {
            time: "8 hr",
            jigs: "30 jigs"
        },
        {
            time: "9 hr",
            jigs: "30 jigs"
        }
    ]
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
                        <Text style={[styles.firstText, { color: "#777777" }]}>Balance:</Text>
                        <Text style={styles.firstText}>1000 Jigs</Text>
                        <Image source={Coin} />
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image source={Icon} style={{ height: 40, width: 40 }} />
                        <Text style={styles.secondText}>Boost this post!</Text>
                        <Text style={styles.thirdText}>Post will boosted to the top of everyone feed
                        for an hour</Text>
                    </View>
                    <View style={styles.secondContainer}>
                        <Text style={styles.fourthText}>Text (optional)</Text>
                    </View>
                    <View style={[styles.container, { justifyContent: "space-between" , marginTop: 20}]}>
                        {timeBoost.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.innerContainer,
                                    {
                                        backgroundColor: selectedIndex === index ? '#1D4ED8' : '#212223',
                                    }
                                ]}
                                onPress={() => setSelectedIndex(index)}
                            >
                                <Text style={styles.fifthText}>{item.time}</Text>
                                <Text style={[styles.sixthText,
                                     {
                                        color: selectedIndex === index ? '#FFFFFF' : '#777777',
                                    }
                                ]}>{item.jigs}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={[styles.container, { marginHorizontal: 20, marginVertical: 10, justifyContent: 'center'}]}>
                        <Image source={Notification}/>
                        <Text style={styles.seventhText}>@Anonymous will be notified about your support to this post</Text>
                    </View>
                    <TouchableOpacity style={styles.thirdContainer}>


                        <Text
                            style={{
                                color: '#FFFFFF',
                                fontWeight: "500",
                                fontSize: 16,
                                textAlign: 'center',

                            }}
                        >
                            Boost
                        </Text>
                    </TouchableOpacity>
                  

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
        height: 40,
        width: 50,
        borderRadius: 10,
        backgroundColor: "#212223",
        elevation: 8,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 4
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    container: {
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    secondContainer: {
        borderWidth: 1,
        borderColor: "#2D2929",
        marginHorizontal: 20,
        borderRadius: 10,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 15
    },
    secondInnerContainer: {
        flex: 1,
        borderColor: "#474B4E",
        borderBottomWidth: 0.5,
        height: 50,
        justifyContent: 'center'
    },
    modalContent: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#1E1E1E',
        elevation: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: height * 0.55,
    },
    firstText: {
        fontSize: 10,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#FFFFFF",
    },
    secondText: {
        fontSize: 18,
        fontWeight: "600",
        fontStyle: "normal",
        color: "#FFFFFF",
        marginTop: 7
    },
    thirdText: {
        fontSize: 12,
        fontWeight: "600",
        fontStyle: "normal",
        color: "#777777",
    },
    fourthText: {
        fontSize: 14,
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
    sixthText: {
        fontSize: 9,
        fontWeight: "400",
        fontStyle: "normal",
        color: "#777777",
    },
    seventhText: {
        fontSize: 11,
        fontWeight: "400",
        fontStyle: "normal",
        color: "#777777",
    },
    eighthText: {
        fontSize: 11,
        fontWeight: "400",
        fontStyle: "normal",
        color: "#777777",
        marginTop: 5,
        textAlign: "center"
    },
})

export default BoostModal2
