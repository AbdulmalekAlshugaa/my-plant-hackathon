import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './app/nav/MainNavigation';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <NavigationContainer>
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
