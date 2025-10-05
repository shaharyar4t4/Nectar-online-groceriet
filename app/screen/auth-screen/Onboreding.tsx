import MainLayout from '@/components/layout/Mainlayout';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text } from 'react-native';
import { useTheme } from 'react-native-paper';



const Onboreding = () => {
  const theme = useTheme();
  return (
    
          <MainLayout>
            {/* <View style = {[styles.container,{backgroundColor: theme.colors.background}]}>
              <Text style={[styles.txt,{color: theme.colors.surface}]}>Hello World</Text>
            </View> */}
            <ImageBackground source={require("../../../assets/images/background-img.png")} style={styles.container} resizeMode='cover'>
            <Image source={require('../../../assets/images/mainlogo.png')}/>
            <Text style={styles.headertxt}>Welcome</Text>
            <Text style={styles.headertxt}>to our store</Text>
            <Text style={styles.subtxt}>Ger your groceries in as fast as one hour</Text>
            </ImageBackground>
          </MainLayout>
       
  )
}

export default Onboreding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    
  },
  mainlogo:{
    width: 50,
    height: 50,
    resizeMode:"contain",
    marginBottom:20,
  },
  headertxt: {
    fontSize: 48,
    color: "#fff",
    fontFamily: "Gilroy-SemiBold",
  },
  subtxt:{
    fontSize: 16,
    fontFamily: "Gilroy-Medium",
    color: "#FCFCFCB2"
  }
}); 
