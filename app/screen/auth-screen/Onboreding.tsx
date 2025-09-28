import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Onboreding = () => {
  return (
    <View style={styles.container}>
          <Text style={styles.txt}>Hello World</Text>
        </View>
  )
}

export default Onboreding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: darkTheme.colors.background,
  },
  txt: {
    fontSize: 24,
    fontFamily: "Gilroy-Medium",
    // color: darkTheme.colors.primary,
  }
}); 
