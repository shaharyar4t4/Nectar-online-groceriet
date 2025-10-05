import React from 'react';
import { Button } from 'react-native-paper';
 
interface Iprops{
  children?: React.ReactNode;
  method?: ()=> void;
}

const Primarybutton = ({children, method}: Iprops) => {
  return (
    <Button mode="contained" onPress={method? method: ()=>{}}>
      {children? children: "Click"}
    </Button>  )
}

export default Primarybutton