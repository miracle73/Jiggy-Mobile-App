import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Frame from '../assets/image/Frame.png';
import Search from '../assets/image/search.png';
import MessageAll from './MessageAll';
import MessageRandom from './MessageRandom';
import MessageRequest from './MessageRequest';
import ScanModal from '../components/modal/ScanModal';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Chat: undefined;

};
type NavigationProp = StackNavigationProp<RootStackParamList, 'Chat'>;

const Message = () => {
  const [activeTab, setActiveTab] = useState('Request');
  const [modal, setModal] = useState(false)
  const navigation = useNavigation<NavigationProp>();
  const handleTabPress = (tab: any) => {
    setActiveTab(tab);
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#131212', paddingTop: 50 }}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.navigation}>
          <Text style={styles.firstText}>Message</Text>
          <View style={{ flexDirection: "row", justifyContent: "center", gap: 16, alignItems: "center" }}>
            <TouchableOpacity onPress={() => setModal(true)}>
              <Image source={Frame} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
              <Image source={Search} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "flex-start", gap: 16, alignItems: "center", paddingHorizontal: 10, }}>
          {['All', 'Request', 'Random'].map((tab) => (
            <TouchableOpacity key={tab} onPress={() => handleTabPress(tab)}>
              <Text style={{
                color: activeTab === tab ? '#F33F5E' : '#777777',
                fontWeight: '600' as '600',
                fontSize: 15,
                textDecorationLine: activeTab === tab ? 'underline' : 'none',
              }}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ paddingTop: 10 }}>
          {activeTab === 'All' && <MessageAll />}
          {activeTab === 'Request' && <MessageRequest />}
          {activeTab === 'Random' && <MessageRandom />}
        </View>
      </ScrollView>
      {modal && <ScanModal modal={modal} setModal={setModal} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fifthContainer: {
    height: 10,
    borderRadius: 14,
    backgroundColor: "#F33F5E",
    width: "50%",
  },
  fourthContainer: {
    height: 10,
    marginHorizontal: 20,
    borderRadius: 16,
    backgroundColor: "#1E1E1E",
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderColor: '#1E1E1E',
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  firstText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 20,
  },
  innerNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
  },
  firstContainer: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 10,
    paddingVertical: 5,
  },
  simpleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondContainer: {
    borderBottomWidth: 4,
    borderTopWidth: 4,
    borderColor: '#1E1E1E',
    paddingHorizontal: 20,
  },
  thirdContainer: {
    height: 150,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});

export default Message;
