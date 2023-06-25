import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountScreen, ChatWithAiScreen, MyPlants } from '../screens';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function FeedTaps() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="ChatWithAiScreen"
                options={{
                    headerTitle: 'Chat with Casia',
                    tabBarLabel: 'Casia',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbox-ellipses-outline" size={32} color="green" />),
                }}
                component={ChatWithAiScreen} />

            <Tab.Screen name="MyPlants"
                options={{
                    headerTitle: 'Recommendation',
                    tabBarLabel: 'Recommendation',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="flower-outline" size={32} color="green" />),
                }}
                component={MyPlants} />

            <Tab.Screen name="AccountScreen"
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-circle-outline" size={32} color="green" />

                    ),
                }}
                component={AccountScreen} />
        </Tab.Navigator>
    );
}

export default FeedTaps;