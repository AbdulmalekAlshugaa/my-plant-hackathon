import React from 'react';
import { WelcomeScreen, ItemDetailsScreen, LoginScreen, RegisterScreen } from '../screens';
import { Button } from 'react-native';
import * as RootNavigation from './RootNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedTaps from './FeedNavation';

const Stack = createNativeStackNavigator();

function MainNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="WelcomeScreen"
                options={{
                    title: 'Welcome',
                }}
                component={WelcomeScreen} />
            <Stack.Screen
                name="FeedTaps"
                component={FeedTaps}
            />

            <Stack.Screen name="ItemDetailsScreen"
                options={{
                    title: 'Item Details',
                }}
                component={ItemDetailsScreen}
            />
            <Stack.Screen name="LoginScreen"
                options={{
                    title: 'Login',
                }}
                component={LoginScreen}
            />
            <Stack.Screen name="RegisterScreen"
                options={{
                    title: 'Register',
                }}
                component={RegisterScreen}
            />


        </Stack.Navigator>

    );
}

export default MainNavigation;