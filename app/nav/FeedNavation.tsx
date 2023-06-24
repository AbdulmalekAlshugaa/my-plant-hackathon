import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountScreen, ChatWithAiScreen } from '../screens';

const Tab = createBottomTabNavigator();

function FeedTaps() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="ChatWithAiScreen" component={ChatWithAiScreen} />
            <Tab.Screen name="AccountScreen" component={AccountScreen} />
        </Tab.Navigator>
    );
}

export default FeedTaps;