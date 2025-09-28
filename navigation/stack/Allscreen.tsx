
import Onboreding from '@/app/screen/auth-screen/Onboreding';
import MainLayout from '@/components/layout/Mainlayout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

export type RootStackParamList = {
   Onboreding: undefined,
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const AllScreen = () => {
    return (
        <MainLayout>
            <Stack.Navigator initialRouteName='Onboreding' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Onboreding" component={Onboreding} />
                {/* <Stack.Screen name="Home" component={Home} /> */}
            </Stack.Navigator>
        </MainLayout>
    
  )
}

export default AllScreen