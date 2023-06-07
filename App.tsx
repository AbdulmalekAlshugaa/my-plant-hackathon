import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './app/nav/MainNavigation';
import FlashMessage, { showMessage } from "react-native-flash-message";
import { navigationRef } from './app/nav/RootNavigation';

export default function App() {
    return (
        <View style={styles.container}>
            <FlashMessage
                position="top" />
            <StatusBar style="auto" />
            <NavigationContainer
                ref={navigationRef}
            >
                <MainNavigation />
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});