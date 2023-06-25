import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './app/nav/MainNavigation';
import FlashMessage, { showMessage } from "react-native-flash-message";
import { navigationRef } from './app/nav/RootNavigation';
import { LoginScreen } from './app/screens';


export default function App() {
    const [isLogged, setIsLogged] = React.useState(false)
    return (
        <View style={styles.container}>

            <NavigationContainer
                ref={navigationRef} >
                {isLogged ? <MainNavigation /> : <MainNavigation />}

            </NavigationContainer>
            <FlashMessage
                position="top" />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});
