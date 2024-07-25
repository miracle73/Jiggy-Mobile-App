import { View, Text, SafeAreaView, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons } from '@expo/vector-icons'
import ProfileIcon from '../assets/image/ProfileIcon.png'
import Bear from '../assets/image/Bear.png'
import Hot from '../assets/image/Hot.png'
import Cup from '../assets/image/cup.png'

import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Reward: undefined;

};
type NavigationProp = StackNavigationProp<RootStackParamList, 'Reward'>;

const Profile = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#121212',
      paddingTop: 50,
      paddingHorizontal: 20
    }}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={styles.firstText}>Profile</Text>
          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 6, alignItems: "center" }}>
            <Text style={styles.secondText}>Balance:</Text>
            <Text style={[styles.secondText, { color: "#FFFFFF" }]}>1000 Jigs</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Reward")}>
          <View style={{ flexDirection: "row", gap: 6, justifyContent: "flex-end", alignItems: "center" }}>
            <Image source={ProfileIcon} />
            <View>
              <Text style={styles.thirdText}>Anonymous</Text>
              <Text style={styles.fourthText}>Darrere@gmail.com</Text>
              <Text style={styles.fifthText}>ID:20399384</Text>
            </View>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={{ flexDirection: "row", gap: 2, justifyContent: "center", alignItems: "center" }}>
              <Image source={Hot} />
              <Text style={styles.sixthText}>13k</Text>
            </View>
            <Text style={styles.seventhText}>Aura point</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.secondContainer}>
          <View style={{ flexDirection: "row", paddingVertical: 10, borderBottomWidth: 1, borderColor: "#777777", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={styles.eighthText}>My post</Text>
            <MaterialIcons name="arrow-forward-ios" size={15} color="#FFFFFF" />
          </View>
          <View style={{ flexDirection: "row", paddingVertical: 10, justifyContent: "space-between", alignItems: "center" }}>
            <Text style={styles.eighthText}>Bookmark</Text>
            <MaterialIcons name="arrow-forward-ios" size={15} color="#FFFFFF" />
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10, marginTop: 30 }}>
          <Text style={styles.firstText}>Leaderboard</Text>
          <MaterialIcons name="arrow-forward-ios" size={15} color="#FFFFFF" />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 4, paddingHorizontal: 10, marginTop: 20 }}>
          <View style={styles.thirdContainer}>
            <Text style={styles.tenthText}>2</Text>
            <View style={styles.roundedContainer}>
              <Image source={Bear} />
            </View>
            <Text style={styles.tenthText}>Anonymous</Text>
            <Text style={[styles.tenthText, { fontSize: 12, color: "#C0C0C0" }]}>2000 points</Text>
          </View>
          <View style={styles.thirdContainer}>
            <Image source={Cup} />
            <View style={styles.roundedContainer}>
              <Image source={Bear} />
            </View>
            <Text style={styles.tenthText}>Anonymous</Text>
            <Text style={[styles.tenthText, { fontSize: 12, color: "#FFC90C" }]}>2000 points</Text>
          </View>
          <View style={styles.thirdContainer}>
            <Text style={styles.tenthText}>2</Text>
            <View style={styles.roundedContainer}>
              <Image source={Bear} />
            </View>
            <Text style={styles.tenthText}>Anonymous</Text>
            <Text style={[styles.tenthText, { fontSize: 12, color: "#CDA865" }]}>2000 points</Text>
          </View>
        </View>
        <View style={styles.secondContainer}>
          <View style={{ flexDirection: "row", paddingVertical: 10, borderBottomWidth: 1, borderColor: "#777777", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={styles.eighthText}>My post</Text>
            <MaterialIcons name="arrow-forward-ios" size={15} color="#FFFFFF" />
          </View>
          <View style={{ flexDirection: "row", paddingVertical: 10, justifyContent: "space-between", alignItems: "center" }}>
            <Text style={styles.eighthText}>Bookmark</Text>
            <MaterialIcons name="arrow-forward-ios" size={15} color="#FFFFFF" />
          </View>
        </View>
        <View style={{ marginTop: 10, justifyContent: "center", alignItems: "center", }}>
          <Text style={styles.ninthText}>Leaderboard</Text>

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
    color: '#777777',
    fontWeight: "500",
    fontSize: 14,

  },
  thirdText: {
    fontWeight: "700",
    fontSize: 14,
    color: "#FFFFFF"
  },
  fourthText: {
    fontWeight: "700",
    fontSize: 11,
    color: "#777777"
  },
  fifthText: {
    fontWeight: "500",
    fontSize: 11,
    color: "#777777"
  },
  sixthText: {
    fontWeight: "500",
    fontSize: 14,
    color: "#FFFFFF"
  },
  seventhText: {
    fontWeight: "500",
    fontSize: 8,
    color: "#777777"
  },
  eighthText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#FFFFFF"
  },
  ninthText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#B20000"
  },
  tenthText: {
    fontWeight: "500",
    fontSize: 11,
    color: "#FFFFFF"
  },
  secondContainer: {

    paddingHorizontal: 10,
    backgroundColor: "#1E1E1E",
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 15

  },
  thirdContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    gap:4,
    paddingHorizontal: 10,
    backgroundColor: "#1E1E1E",
    paddingVertical: 15,
    borderRadius: 12
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    backgroundColor: "#1E1E1E",
    paddingVertical: 15,
    marginTop: 20,
    paddingBottom: 30,
    borderRadius: 15


  },
  roundedContainer: {
    height: 36,
    width: 36,
    borderRadius: 25
  },

})
export default Profile