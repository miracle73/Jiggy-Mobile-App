import { View, Text, SafeAreaView, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { EvilIcons, AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import Union from '../assets/image/Best.png'
import Picture from '../assets/image/Picture.png'
import Message from '../assets/image/message.png'
import Best from '../assets/image/Best2.png'
import Icon from '../assets/image/Best3.png'
import Background from '../assets/image/post.png'
import Background2 from '../assets/image/Background2.png'
import Background3 from '../assets/image/Background3.png'
import { LinearGradient } from 'expo-linear-gradient';
import Heart from '../assets/image/Heart.png'
import PostImage from '../assets/image/postImage.png'

const Profile = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#131212',
      paddingTop: 50
    }}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.navigation}>
          <View style={styles.innerNavigation}>
            <EvilIcons name="navicon" size={25} style={{ color: '#FFFFFF', opacity: 0.4 }} />
            <Text style={styles.firstText}>All</Text>
            <Text style={[styles.secondText, { marginLeft: 8 }]}>IMSU</Text>
            <Text style={styles.secondText}>Discover</Text>
          </View>
          <AntDesign name="search1" size={25} style={{ color: '#FFFFFF', opacity: 0.4 }} />
        </View>


        <View style={styles.firstContainer}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
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

          <View style={[styles.innerNavigation, { width: '100%' }]}>

            <View style={[styles.simpleContainer, { gap: 4, borderRightWidth: 1, borderRightColor: '#C4C4C4' }]}>
              <Entypo name="arrow-bold-up" size={25} color="#F33F5E" />
              <Text style={[styles.eighthText, { marginLeft: 2 }]}>803</Text>
              <MaterialCommunityIcons name="arrow-down-bold-outline" size={25} color="#C4C4C4" style={{ marginRight: 8 }} />
            </View>
            <View style={[styles.simpleContainer, { gap: 4, borderRightWidth: 1, borderRightColor: '#C4C4C4' }]}>
              <Image source={Message} />
              <Text style={[styles.eighthText, { color: "#FFFFFF", marginRight: 8 }]}>4682</Text>
            </View>
            <View style={styles.simpleContainer}>
              <Image source={Best} />
              <Text style={[styles.eighthText, { color: "#FFFFFF" }]}>20</Text>
            </View>
            <AntDesign name="upload" size={25} color="#FFFFFF" style={{ marginLeft: 15 }} />
          </View>

        </View>
        <View style={styles.secondContainer}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 8,
            paddingTop: 10
          }}>
            <Image source={Union} style={{}} />
            <Text style={styles.thirdText}>Anonymous Boosted this post</Text>
          </View>

          <ImageBackground
            source={Background}
            style={styles.thirdContainer}
            imageStyle={{ borderRadius: 7 }}
          >

            <View style={[styles.innerNavigation, { width: '100%', justifyContent: 'center', gap: 4, }]}>

              <View style={{ height: 26, width: 26, borderRadius: 13 }}>
                <Image source={Picture} />
              </View>
              <View>
                <Text style={styles.fifthText}>Anonymous</Text>
                <Text style={styles.thirdText}>12h ago . IMSU</Text>
              </View>

            </View>
            <Text
              style={{
                color: '#E3E3E3',
                fontWeight: "700",
                fontSize: 14,
                textAlign: 'center',
                marginTop: 20
              }}
            >
              I was so horny
            </Text>

          </ImageBackground>
          <View style={[styles.innerNavigation, { width: '100%', marginBottom: 10 }]}>

            <View style={[styles.simpleContainer, { gap: 4, borderRightWidth: 1, borderRightColor: '#C4C4C4' }]}>

              <MaterialCommunityIcons name="arrow-up-bold-outline" size={25} color="#C4C4C4" />
              <Text style={[styles.eighthText, { marginLeft: 2, color: '#B20000' }]}>803</Text>
              <Entypo name="arrow-bold-down" size={25} color="#B20000" />
            </View>
            <View style={[styles.simpleContainer, { gap: 4, borderRightWidth: 1, borderRightColor: '#C4C4C4' }]}>
              <Image source={Message} />
              <Text style={[styles.eighthText, { color: "#FFFFFF", marginRight: 8 }]}>4682</Text>
            </View>
            <View style={styles.simpleContainer}>
              <Image source={Icon} />
              <Text style={[styles.eighthText, { color: "#FFFFFF" }]}>20</Text>
            </View>
            <AntDesign name="upload" size={25} color="#FFFFFF" style={{ marginLeft: 15 }} />
          </View>
        </View>

        <View style={styles.firstContainer}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
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

          <View style={{
            backgroundColor: '#1A1151', height: 20, width: 30, borderRadius: 10, flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5
          }}>
            <Text style={styles.seventhText}>Poll</Text>
          </View>


        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 20, marginBottom: 5, marginTop: 10 }}>
          <Text style={styles.ninthText}>Sure</Text>
          <Text style={styles.tenthText}>61 Vote</Text>
        </View>
        <View style={styles.fourthContainer}>
          <View style={styles.fifthContainer}>

          </View>
        </View>
        <View style={{ borderWidth: 1, borderColor: "#34C759", borderRadius: 3, paddingBottom: 20, paddingTop: 10, marginVertical: 15, marginBottom: 25, backgroundColor: "#1E1E1E", marginHorizontal: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 20, marginBottom: 5 }}>
            <Text style={[styles.ninthText, { color: "#34C759" }]}>Fill</Text>
            <Text style={[styles.tenthText, { color: "#FFFFFF" }]}>30 Voted</Text>
          </View>
          <View style={[styles.fourthContainer, { backgroundColor: "#777777" }]}>
            <View style={[styles.fifthContainer, { backgroundColor: "#34C759" }]}>

            </View>
          </View>
          <View style={{
              position: 'absolute',
              top: 45,
              left: 240,
              flexDirection: "row",
              gap: 8,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 3
            }}>
             
              <View style={{ backgroundColor: "#F33F5E", height: 35, width: 80, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 1, borderRadius: 14 }}>
                <Text style={[styles.sixthText, { fontSize: 10 }]}>Create post</Text>
                <Entypo name="plus" size={15} color="#FFFFFF" />
              </View>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  fifthContainer: {
    height: 10,

    borderRadius: 14,
    backgroundColor: "#F33F5E",
    width: "50%"
  },
  fourthContainer: {
    height: 10,
    marginHorizontal: 20,
    borderRadius: 16,
    backgroundColor: "#1E1E1E"
  },
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

  ninthText: {
    color: '#FFFFFF',
    fontWeight: "600",
    fontSize: 14,
  },
  tenthText: {
    color: '#777777',
    fontWeight: "500",
    fontSize: 12,
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
    paddingVertical: 5
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
    paddingHorizontal: 20

  },
  thirdContainer: {
    height: 150,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingTop: 10
  },
})
export default Profile