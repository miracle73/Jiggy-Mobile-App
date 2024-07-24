import { View, Text, SafeAreaView, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { EvilIcons, AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import Arrow from '../assets/image/arrow-square.png'
import Message from '../assets/image/message2.png'
import { LinearGradient } from 'expo-linear-gradient';


const Notification = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#121212',
      paddingTop: 60,
      paddingHorizontal: 20
    }}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.firstText}>Notification</Text>
        <Text style={styles.secondText}>Today</Text>
        <View style={{marginTop: 10}}>
          <View style={styles.container}>
            <View style={styles.roundedContainer}>
              <Image source={Arrow} />
            </View>
            <View style={styles.secondContainer}>
              <View style={{ width: "50%" }}>
                <Text style={styles.thirdText}>Upvote</Text>
                <Text style={styles.fourthText}>Someone Upvote on your post: Around 
                Heavy ball floor these languag....</Text>
              </View>
              <View style={{
                justifyContent: "center", alignItems: "flex-end"
              }}>
                <Text style={styles.fifthText}>9.56 AM</Text>
                
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.roundedContainer}>
              <Image source={Message} />
            </View>
            <View style={styles.secondContainer}>
              <View style={{ width: "50%" }}>
                <Text style={styles.thirdText}>Comment</Text>
                <Text style={styles.fourthText}>Someone commented on your post: Around 
                Heavy ball floor these languag....</Text>
              </View>
              <View style={{
                justifyContent: "center", alignItems: "flex-end"
              }}>
                <Text style={styles.fifthText}>9.56 AM</Text>
                
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
    fontWeight: "600",
    fontSize: 20,
  },
  secondText: {
    color: '#FFFFFF',
    fontWeight: "600",
    fontSize: 16,
    marginTop: 5
  },
  thirdText: {
    fontWeight: "700",
    fontSize: 14,
    color: "#FFFFFF"
  },
  fourthText: {
    fontWeight: "400",
    fontSize: 12.5,
    color: "#777777"
  },
  fifthText: {
    fontWeight: "400",
    fontSize: 12,
    color: "#868686"
  },
  sixthText: {
    fontWeight: "600",
    fontSize: 8,
    color: "#FFFFFF"
  },
  secondContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    marginLeft: 8

  },
  thirdContainer: {
    width: 12,
    height: 15,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 4,
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#1E1E1ECC",
    paddingVertical: 10


  },
  roundedContainer: {
    height: 36,
    width: 36,
    borderRadius: 25
  },

})
export default Notification