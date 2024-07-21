import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Bear from '../assets/image/Bear.png'

const  MessageRandom = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.roundedContainer}>
          <Image source={Bear} />
        </View>
        <View style={styles.secondContainer}>
          <View style={{ width: "50%" }}>
            <Text style={styles.firstText}>Anonymous m.</Text>
            <Text style={styles.secondText}>Hi there!</Text>
          </View>
          <View style={{ justifyContent:  "center", alignItems: "flex-end"
          }}>
            <Text style={styles.thirdText}>9.56 AM</Text>
            <View style={styles.thirdContainer}>
              <Text style={styles.fourthText}>2</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
  firstText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#FFFFFF"
  },
  secondText: {
    fontWeight: "600",
    fontSize: 15,
    color: "#777777"
  },
  thirdText: {
    fontWeight: "600",
    fontSize: 14,
    color: "#FFFFFF"
  },
  fourthText: {
    fontWeight: "600",
    fontSize: 8,
    color: "#FFFFFF"
  }
})

export default MessageRandom