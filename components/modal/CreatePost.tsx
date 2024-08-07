import { View, Text, Dimensions, Modal, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useCreatePostMutation } from '../../Api';
const { width, height } = Dimensions.get('window');

interface ConversationModalProps {
    setModal: (value: boolean) => void;
    modal: boolean;
}

const CreatePost = ({ setModal, modal }: ConversationModalProps) => {
    const [headline, setHeadline] = useState('');
    const [content, setContent] = useState('');
    const [contentType, setContentType] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [createPost] = useCreatePostMutation();

    const handleSubmit = async () => {
        const data = {
            headline,
            content,
            content_type: contentType,
            privacy: true,
        };
        try {
            await createPost(data).unwrap();
            setModal(false);
        } catch (error) {
            alert('There was an error, try again');
            console.log(error);
        }
    };

    const handleAddClick = () => {
        setShowOptions(true);
    };

    const handleOptionSelect = (type: string) => {
        setContentType(type);
        setShowOptions(false);
    };

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
                    <View style={{ flexDirection: 'row', paddingTop: 20, justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setModal(false)}>
                            <Entypo name="cross" size={20} style={{ color: '#FFFFFF' }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleSubmit}>
                            <Text style={styles.secondText}>Post</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={{ flex: 1, color: '#FFFFFF', marginLeft: 5, borderBottomWidth: 1, borderBottomColor: '#1E1E1E' }}
                        placeholderTextColor="#777777"
                        placeholder={'Headline'}
                        onChangeText={(text) => {
                            setHeadline(text);
                        }}
                        value={headline}
                    />
                    <TextInput
                        style={{ flex: 1, color: '#FFFFFF', marginLeft: 5 }}
                        placeholderTextColor="#777777"
                        placeholder={'Body text (optional)'}
                        onChangeText={(text) => {
                            setContent(text);
                        }}
                        value={content}
                    />
                    {!showOptions && 
                      <View style={{ flexDirection: 'row', paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                      <TouchableOpacity style={styles.firstContainer} onPress={handleAddClick}>
                          <Text style={styles.firstText}>Add</Text>
                          <AntDesign name="plus" size={15} style={{ color: '#FFFFFF', opacity: 0.4 }} />
                      </TouchableOpacity>
                  </View> }
                  
                    {showOptions && (
                        <View style={{ flexDirection: 'row', paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center' }}>
                            <TouchableOpacity
                                style={[styles.firstContainer, { borderColor: '#B20000' }]}
                                onPress={() => handleOptionSelect('Happy')}
                            >
                                <Text style={[styles.firstText, { color: '#B20000' }]}>Happy</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.firstContainer, { borderColor: '#FF9500' }]}
                                onPress={() => handleOptionSelect('Politics')}
                            >
                                <Text style={[styles.firstText, { color: '#FF9500' }]}>Politics</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.firstContainer, { borderColor: '#34C759' }]}
                                onPress={() => handleOptionSelect('Confession')}
                            >
                                <Text style={[styles.firstText, { color: '#34C759' }]}>Confession</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.firstContainer, { borderColor: '#5AC8FA' }]}
                                onPress={() => handleOptionSelect('Religious')}
                            >
                                <Text style={[styles.firstText, { color: '#5AC8FA' }]}>Religious</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    firstContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.15,
        borderColor: '#FFFFFF',
        gap: 8,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    modalContent: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#1E1E1E',
        elevation: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: height * 0.4,
        paddingHorizontal: 20,
    },
    firstText: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 14,
    },
    secondText: {
        fontSize: 14,
        fontWeight: '700',
        fontStyle: 'normal',
        color: '#F33F5E',
    },
});

export default CreatePost;
