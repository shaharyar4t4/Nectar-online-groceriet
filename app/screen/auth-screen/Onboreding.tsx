import MainLayout from '@/components/layout/Mainlayout';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';



const Onboreding = () => {
  const theme = useTheme();
  return (
    
          <MainLayout>
            <View style = {[styles.container,{backgroundColor: theme.colors.background}]}>
              <Text style={[styles.txt,{color: theme.colors.surface}]}>Hello World</Text>
            </View>
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
