import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
 
interface Iprops{
  children?: React.ReactNode;
  method?: ()=> void;
}

const Primarybutton = ({children, method}: Iprops) => {
  return (
    <Button labelStyle={{fontSize:16}}style={styles.btnstyle} mode="contained" onPress={method? method: ()=>{}}>
      {children? children: "Click Here"}
    </Button>  )
}

export default Primarybutton

const styles = StyleSheet.create({
    btnstyle:{
      borderRadius:19,
      width: "100%",
      paddingVertical: 8,
      color: "#fff"
    }
}); 