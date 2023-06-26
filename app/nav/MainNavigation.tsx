import React from 'react';
import { WelcomeScreen, ItemDetailsScreen, LoginScreen, RegisterScreen, AccountScreen } from '../screens';
import { Button } from 'react-native';
import * as RootNavigation from './RootNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedTaps from './FeedNavation';
import AuthNavigation from './AuthNavigation';

const Stack = createNativeStackNavigator();

function MainNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="FeedTaps"
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
            <Stack.Screen
                options={{
                    headerShown: false,
                }
                }
                name="FeedTaps"
                component={FeedTaps}
            />

            <Stack.Screen name="ItemDetailsScreen"

                options={{

                    title: 'Item Details',
                }}

                component={ItemDetailsScreen}
            />

            <Stack.Screen name="AuthNavigation"
                options={{
                    headerShown: false,
                    title: 'Register',
                }}
                component={AuthNavigation}
            />



        </Stack.Navigator>

    );
}

export default MainNavigation;