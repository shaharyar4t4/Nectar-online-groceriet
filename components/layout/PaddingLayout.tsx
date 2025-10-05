import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';

type Iprops = PropsWithChildren<{
    paddingHorizontal?: number;
}>
const PaddingLayout = ({ children, paddingHorizontal }: Iprops) => {
    return (
        <View style={{ paddingHorizontal: paddingHorizontal ? paddingHorizontal : 30, width: "100%" }}>
            {children}
        </View>
    )
}

export default PaddingLayout