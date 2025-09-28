import React, { PropsWithChildren } from 'react';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type MainLayoutProps = PropsWithChildren<{

}>;

const MainLayout: React.FC<MainLayoutProps> = ({children }) => {
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