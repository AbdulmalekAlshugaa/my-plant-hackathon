import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, ItemListScreen, ItemDetailsScreen } from '../screens';

const Stack = createNativeStackNavigator();

function MainNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                headerShown: true,
            }}
        >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="ItemListScreen" component={ItemListScreen} />
            <Stack.Screen name="ItemDetailsScreen" component={ItemDetailsScreen} />
        </Stack.Navigator>

    );
}

export default MainNavigation;