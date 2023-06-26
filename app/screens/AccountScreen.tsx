import { View, Text } from 'react-native'
import React from 'react'
import CommonItemSelection from '../components/CommonItemSelection'
import { COLORS } from '../constants/them'
import { getUserData, removeAuthData, removeChatData } from '../helper/localStorage'
import { showMessage } from 'react-native-flash-message'

const AccountScreen = ({ navigation }: { navigation: any }) => {
    const [userName, setUserName] = React.useState("")

    const getUserName = async () => {
        try {
            const userName = await getUserData()
            if (userName !== null) {
                setUserName(userName)
            }

        } catch (e) {
            // error reading value
        }
    }

    React.useEffect(() => {
        getUserName()
    }, [])


    return (

        <View style={{
            flex: 1,
        }}>
            <CommonItemSelection
                title={userName ? userName : "User Name"}
                isLeftEnabled={false}
                isRightEnabled={true}
                icon={'face-man'}
                size={30}
                width={50}
                height={50}
                color={COLORS.black}
            />
            <CommonItemSelection
                title={"Clear all session"}
                onPress={
                    () => {
                        removeChatData()
                        showMessage({
                            message: "Chat data cleared",
                            type: "success",
                        });



                    }
                }
                icon={'chat'}
                isLeftEnabled={false}
                isRightEnabled={true}

                size={30}
                width={30}
                height={30}
                color={COLORS.black}
            />

            <View
                style={{
                    bottom: 0,
                    position: "absolute",
                    width: "100%",
                    height: 100,

                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    elevation: 10,
                }}
            >
                <CommonItemSelection
                    title={"Logout"}
                    onPress={
                        () => {
                            removeAuthData()
                            navigation.navigate("AuthNavigation")
                        }
                    }
                    icon={'logout'}


                    isLeftEnabled={false}
                    isRightEnabled={true}

                    size={30}
                    width={30}
                    height={30}
                    color={COLORS.black}
                />


            </View>


        </View>
    )
}

export default AccountScreen