import React, { PropsWithChildren } from 'react';

import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type MainLayoutProps = PropsWithChildren<{

}>;

const MainLayout: React.FC<MainLayoutProps> = ({children }) => {
   const theme = useTheme();
    return (
        
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }} edges={[ 'left', 'right']}>
                <StatusBar/>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>

    )
}

export default MainLayout;