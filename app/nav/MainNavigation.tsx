import React from 'react';
import { LoginScreen, ItemListScreenAccepted, ItemDetailsScreen } from '../screens';
import { Button } from 'react-native';
import * as RootNavigation from './RootNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedTaps from './FeedNavation';

const Stack = createNativeStackNavigator();

function MainNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                headerShown: true,
            }}>
            <Stack.Screen
                name="LoginScreen"
                options={{
                    title: 'Login',
                }}
                component={LoginScreen} />
            <Stack.Screen
                name="FeedTaps"

                component={FeedTaps}
                options={{
                    title: 'Items',
                    headerBackVisible: false,
                    headerShown: false,
                    headerRight: () => (
                        <Button
                            onPress={() => {
                                // Do something
                                RootNavigation.navigateTo('LoginScreen');
                            }}
                            title="Logout"
                            color="red"
                        />
                    ),
                }}
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