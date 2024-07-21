import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'


const MessageRandom = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "center", }}>
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 4 }}>
            <FontAwesome name="signal" size={12} color="#0C9229" />
            <Text style={styles.secondText}>100 people online</Text>
            <View style={{ height: 3, width: 3, borderRadius: 3, backgroundColor: "#0C9229" }}></View>
          </View>
        </View>
        <Text style={[styles.firstText, { marginTop: 200 }]}>Get ready to meet new people and  have fun.</Text>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 8 }}>
          <TouchableOpacity style={styles.roundedContainer}>
            <Text style={styles.firstText}>Start chatting</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

    paddingHorizontal: 20,
    flex: 1,


  },
  roundedContainer: {
    height: 40,
    width: "45%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F33F5E",
    borderRadius: 18
  },
  secondContainer: {

  },

  firstText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",

  },
  secondText: {
    fontWeight: "600",
    fontSize: 12,
    color: "#FFFFFF",
  },

})

export default MessageRandom