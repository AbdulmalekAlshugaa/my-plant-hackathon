import React from 'react';
import { WelcomeScreen, ItemDetailsScreen } from '../screens';
import { Button } from 'react-native';
import * as RootNavigation from './RootNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedTaps from './FeedNavation';

const Stack = createNativeStackNavigator();

function MainNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="WelcomeScreen"
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
        </Stack.Navigator>

    );
}

export default MainNavigation;