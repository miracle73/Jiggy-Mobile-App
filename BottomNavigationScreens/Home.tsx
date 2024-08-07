import { View, Text, SafeAreaView, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { EvilIcons, AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import TrendingModal from '../components/modal/Trending'
import HomeAll from './HomeAll'
import HomeDiscover from './HomeDiscover'
import School from './School'
import { useGetUserDetailMutation } from '../Api'
import CreatePost from '../components/modal/CreatePost'
import SideBarModal from '../components/modal/Sidebar'
import { useSelector } from 'react-redux';
import { RootState } from '../Store';

const Home = () => {
  const { isSignedIn, email } = useSelector((state: RootState) => state.user)
  const [modal, setModal] = useState(false)
  const [secondModal, setSecondModal] = useState(false)
  const [thirdModal, setThirdModal] = useState(false)
  const [userDetail] = useGetUserDetailMutation();
  const [activeTab, setActiveTab] = useState('All');
  const [user, setUser] = useState(null)
  console.log(isSignedIn)
  // const navigation = useNavigation<NavigationProp>();
  const handleTabPress = (tab: any) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await userDetail({}).unwrap();
        console.log(data)
        setUser(data)
      } catch (error) {
        console.error('Failed to fetch user Details:', error);
      }
    };

    fetchPosts();
  }, [userDetail]);
  const school = user?.institution == 1 ? 'FUTO' : 'FPNO'
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#131212',
      paddingTop: 50
    }}>
      <StatusBar style="light" />
      {thirdModal && <SideBarModal modal={thirdModal} setModal={setThirdModal} />}
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.navigation}>
          <View style={styles.innerNavigation}>
            <TouchableOpacity onPress={() => setThirdModal(true)}>
              <EvilIcons name="navicon" size={25} style={{ color: '#FFFFFF', opacity: 0.4 }} />
            </TouchableOpacity>
            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "flex-start", gap: 16, alignItems: "center", paddingHorizontal: 10, }}>
              {['All', school, 'Discover'].map((tab) => (
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

          </View>
          <TouchableOpacity onPress={() => setModal(true)}>
            <AntDesign name="search1" size={25} style={{ color: '#FFFFFF', opacity: 0.4 }} />
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 5, }}>
          {activeTab === 'All' && <HomeAll />}
          {activeTab === school && <School />}
          {activeTab === 'Discover' && <HomeDiscover />}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", paddingBottom: 20 }}>
          <TouchableOpacity style={styles.simpleContainer} onPress={() => setSecondModal(true)}>
            <Text style={styles.firstText}>Create Post</Text>
            <AntDesign name="plus" size={15} style={{ color: '#FFFFFF', opacity: 0.4 }} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {modal && <TrendingModal modal={modal} setModal={setModal} />}
      {secondModal && <CreatePost modal={secondModal} setModal={setSecondModal} />}


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 4,
    borderColor: '#1E1E1E',
    paddingHorizontal: 10,
    paddingBottom: 15
  },
  firstText: {
    color: '#FFFFFF',
    fontWeight: "500",
    fontSize: 14,
  },

  innerNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',

  },
  simpleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F33F5E",
    gap: 8,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 8

  },


})
export default Home