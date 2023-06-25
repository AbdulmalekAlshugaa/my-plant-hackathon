import React from 'react';
import { WelcomeScreen, ItemDetailsScreen, LoginScreen, RegisterScreen, AccountScreen } from '../screens';
import { Button } from 'react-native';
import * as RootNavigation from './RootNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedTaps from './FeedNavation';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="WelcomeScreen"
            screenOptions={{
                headerShown: true,
            }}>
            <Stack.Screen
                name="WelcomeScreen"
                options={{
                    headerShown: false,
                    title: 'Welcome',

                }}
                component={WelcomeScreen} />

            <Stack.Screen name="LoginScreen"
                options={{
                    headerShown: false,
                    title: 'Login',
                }}
                component={LoginScreen}
            />
            <Stack.Screen name="RegisterScreen"
                options={{
                    headerShown: false,
                    title: 'Register',
                }}
                component={RegisterScreen}
            />



        </Stack.Navigator>

    );
}

export default AuthNavigation;