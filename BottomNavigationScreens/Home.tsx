import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { EvilIcons, AntDesign } from '@expo/vector-icons'
import Union from '../assets/image/Best.png'

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
        <Image source={Union} style={{}}/>
        <Text style={styles.thirdText}>Anonymous Boosted this post</Text>
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
  innerNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',

  }
})
export default Home