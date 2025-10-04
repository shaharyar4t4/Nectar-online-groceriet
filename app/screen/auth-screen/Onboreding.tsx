import MainLayout from '@/components/layout/Mainlayout';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';



const Onboreding = () => {
  const theme = useTheme();
  return (
    
          <MainLayout>
            {/* <View style = {[styles.container,{backgroundColor: theme.colors.background}]}>
              <Text style={[styles.txt,{color: theme.colors.surface}]}>Hello World</Text>
            </View> */}
            <ImageBackground source={require("../../../assets/images/background-img.png")} style={styles.container} resizeMode='cover'/>
          </MainLayout>
       
  )
}

export default Onboreding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  txt: {
    fontSize: 24,
    fontFamily: "Gilroy-Medium",
    
  }
}); 
