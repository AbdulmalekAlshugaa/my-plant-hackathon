import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ItemListScreenAccepted, ItemListScreenRejected } from '../screens';

const Tab = createBottomTabNavigator();

function FeedTaps() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Active" component={ItemListScreenAccepted} />
            <Tab.Screen name="Rejected" component={ItemListScreenRejected} />
        </Tab.Navigator>
    );
}

export default FeedTaps;