import AsyncStorage from '@react-native-async-storage/async-storage';

const authKey = 'auth';

export const getAuthData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(authKey);
        return jsonValue != null ? jsonValue : null;
    } catch (e) {
        // error reading value
    }
};

export const storeAuthData = async (value: any) => {
    try {
        await AsyncStorage.setItem(authKey, value);

    } catch (error) {

    }

};

export const getChatData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('my-key');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
};

export const storeChatData = async (value: any) => {
    try {
        await AsyncStorage.setItem('my-key', value);
    } catch (e) {
        // saving error
    }
};

export const removeChatData = async () => {
    try {
        await AsyncStorage.removeItem('my-key');
    } catch (e) {
        // remove error
    }
}

