import React from "react"
import { Text } from 'react-native'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function MyText({ children, style }) {
    let [fontsLoaded] = useFonts({
        'Open Sans': require('../assets/font/OpenSans-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <Text style={{ fontFamily: 'Open Sans', }}  >
                {children}
            </Text>
        )
    }

}