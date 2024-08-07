import { View, Text, Dimensions, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../assets/image/secondJiggy.png'
import Icon from '../../assets/image/Best3.png'
import Camera from '../../assets/image/camera.png'
import FiveStar from '../../assets/image/Five-star.png'
import { MaterialIcons } from '@expo/vector-icons'
import { RootState, AppDispatch } from '../../Store';
import { useDispatch } from 'react-redux';
import { logout } from '../../UseReducer'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';



type RootStackParamList = {
    Login: undefined;

};
type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;


const { width, height } = Dimensions.get('window')
interface ConversationModalProps {
    setModal: (value: boolean) => void;
    modal: boolean;
}
const SideBarModal = ({ setModal, modal }: ConversationModalProps) => {
    const dispatch = useDispatch()
    const navigation = useNavigation<NavigationProp>();
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
                    <Image source={Logo} style={{marginTop: 40}} />
                    <Text style={styles.secondText}>Feature</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 10, paddingTop: 30, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.firstText}>Agl</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={20} style={{ color: '#777777' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.firstText}>Campus news</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={20} style={{ color: '#777777' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.firstText}>Ads center</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={20} style={{ color: '#777777' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.firstText}>Story map</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={20} style={{ color: '#777777' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.firstText}>Find</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={20} style={{ color: '#777777' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center' }} onPress={() => {dispatch(logout()); navigation.navigate("Login")}}>
                        <Text style={styles.firstText}>Logout</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={20} style={{ color: '#777777' }} />
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
        width: '50%',
        height: height * 1,
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#1E1E1E',
        elevation: 10,
        paddingHorizontal: 20
    },
    firstText: {
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#FFFFFF",
    },
    secondText: {
        fontSize: 30,
        fontWeight: "600",
        fontStyle: "normal",
        color: "#777777",
        marginTop: 10

    },
 
  

})

export default SideBarModal
