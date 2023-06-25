import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './app/nav/MainNavigation';
import FlashMessage, { showMessage } from "react-native-flash-message";
import { navigationRef } from './app/nav/RootNavigation';
import AuthNavigation from './app/nav/AuthNavigation';
import { getAuthData } from './app/helper/localStorage';

export default function App() {
    const [isLogged, setIsLogged] = React.useState(false)
    const getAuthToken = async () => {
        try {
            const token = await getAuthData()
            if (token !== null) {
                setIsLogged(true)
            }
        } catch (e) {
            // error reading value
        }
    }
    React.useEffect(() => {
        getAuthToken()
    }, [])

    return (
        <View style={styles.container}>

            <NavigationContainer
                ref={navigationRef} >
                {isLogged ? <MainNavigation /> : <AuthNavigation />}

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
