import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { EvilIcons, AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import Union from '../assets/image/Best.png'
import Picture from '../assets/image/Picture.png'
import Message from '../assets/image/message.png'
import Best from '../assets/image/Best2.png'

const Home = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#131212',
      paddingTop: 50
    }}>
      <StatusBar style="light" />
      <View style={styles.navigation}>
        <View style={styles.innerNavigation}>
          <EvilIcons name="navicon" size={25} style={{ color: '#FFFFFF', opacity: 0.4 }} />
          <Text style={styles.firstText}>All</Text>
          <Text style={[styles.secondText, { marginLeft: 8 }]}>IMSU</Text>
          <Text style={styles.secondText}>Discover</Text>
        </View>
        <AntDesign name="search1" size={25} style={{ color: '#FFFFFF', opacity: 0.4 }} />
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 10,
        paddingTop: 10
      }}>
        <Image source={Union} style={{}} />
        <Text style={styles.thirdText}>Anonymous Boosted this post</Text>
      </View>
      <Text style={[styles.fourthText, {paddingHorizontal: 10, marginTop: 5}]}>Have a great day with my amazing client all the way
        from NewYork</Text>
      <View style={styles.firstContainer}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // gap: 8,


        }}>
          <View style={[styles.innerNavigation, { justifyContent: 'flex-start', gap: 4 }]}>

            <View style={{ height: 26, width: 26, borderRadius: 13 }}>
              <Image source={Picture} />
            </View>
            <View>
              <Text style={styles.fifthText}>Anonymous</Text>
              <Text style={styles.thirdText}>12h ago . IMSU</Text>
            </View>

          </View>
          <Entypo name="dots-three-horizontal" size={12} style={{ color: '#FFFFFF', marginRight: 15 }} />
        </View>
        <Text style={styles.sixthText}>Have a great day with my amazing client all
          the way from NewYork</Text>
        <Text style={[styles.fourthText, { fontSize: 12, paddingHorizontal: 0, marginTop: 5 }]}>Have a great day with my amazing client all the way
          from NewYork</Text>
        <View style={{
          backgroundColor: '#3300FF', height: 20, width: 30, borderRadius: 10, flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5
        }}>
          <Text style={styles.seventhText}>DM</Text>
        </View>
        <View style={[styles.innerNavigation, { width: '100%', }]}>
        
          <View style={[styles.simpleContainer, { gap: 4, borderRightWidth: 1, borderRightColor: '#C4C4C4' }]}>
            <Entypo name="arrow-bold-up" size={25} color="#F33F5E" />
            <Text style={[styles.eighthText, { marginLeft: 2 }]}>803</Text>
            <MaterialCommunityIcons name="arrow-down-bold-outline" size={25} color="#C4C4C4" style={{ marginRight: 8}} />
          </View>
          <View style={[styles.simpleContainer, {gap: 4, borderRightWidth: 1, borderRightColor: '#C4C4C4' }]}>
            <Image source={Message} />
            <Text style={[styles.eighthText, { color: "#FFFFFF", marginRight: 8 }]}>4682</Text>
          </View>
          <View style={styles.simpleContainer}>
            <Image source={Best} />
            <Text style={[styles.eighthText, { color: "#FFFFFF" }]}>20</Text>
          </View>
          <AntDesign name="upload" size={25} color="#FFFFFF" style={{ marginLeft: 15 }}/>
        </View>
      
      </View>

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
    color: '#F33F5E',
    fontWeight: "600",
    fontSize: 16,
  },
  secondText: {
    color: '#FFFFFF',
    fontWeight: "600",
    fontSize: 14,
  },
  thirdText: {
    color: '#FFFFFF',
    fontWeight: "700",
    fontSize: 10,
    opacity: 0.5
  },
  fourthText: {
    color: '#FFFFFF',
    fontWeight: "300",
    fontSize: 14,
    opacity: 0.6,
    paddingHorizontal: 20
  },
  fifthText: {
    color: '#FFFFFF',
    fontWeight: "700",
    fontSize: 12,

  },
  sixthText: {
    color: '#FFFFFF',
    fontWeight: "500",
    fontSize: 16,
  },
  seventhText: {
    color: '#FFFFFF',
    fontWeight: "500",
    fontSize: 11,
    
  },
  eighthText: {
    color: '#F33F5E',
    fontWeight: "700",
    fontSize: 14,
  },
  innerNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',

  },
  firstContainer: {
    borderWidth: 1,
    borderColor: '#C4C4C4',
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 15,
    opacity: 0.7,
    marginTop: 10,
    paddingVertical: 5
  },
  simpleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  }
})
export default Home