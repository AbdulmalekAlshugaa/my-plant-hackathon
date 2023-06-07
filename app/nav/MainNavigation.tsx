import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, ItemListScreen, ItemDetailsScreen } from '../screens';
import { Button } from 'react-native';
import * as RootNavigation from './RootNavigation';

const Stack = createNativeStackNavigator();

function MainNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                headerShown: true,
            }}>
            <Stack.Screen name="LoginScreen"
                options={{
                    title: 'Login',
                }}
                component={LoginScreen} />
            <Stack.Screen
                name="ItemListScreen"
                component={ItemListScreen}
                options={{
                    title: 'Items',
                    headerBackVisible: false,
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