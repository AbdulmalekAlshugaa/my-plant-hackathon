import { View, Text } from 'react-native'
import React from 'react'
import CommonItemSelection from '../components/CommonItemSelection'
import { COLORS } from '../constants/them'
import { removeAuthData } from '../helper/localStorage'

const AccountScreen = ({ navigation }: { navigation: any }) => {

    return (

        <View style={{
            flex: 1,
        }}>
            <CommonItemSelection
                title={"Abdulmalik"}
                isLeftEnabled={false}
                isRightEnabled={true}
                icon={'face-man'}
                size={30}
                width={50}
                height={50}
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