import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import { ImageBackground } from 'react-native'
import { COLORS, IMAGE } from '../constants/them'
import { LinearGradient } from 'expo-linear-gradient';


const WelcomeScreen = ({ navigation }: { navigation: any }) => {

    const StartForm = () => {
        return (
            <TouchableOpacity onPress={
                () => {
                    navigation.navigate("LoginScreen")
                }
            } >
                <Button

                    loading={false}
                    style={styles.button}
                    mode="contained">
                    Start
                </Button>
            </TouchableOpacity>

        )


    }
    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode='cover'
                resizeMethod='resize'
                source={IMAGE.background}

                style={styles.container}>
                <View style={styles.main}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={{
                            height: 500,
                            justifyContent: 'flex-end',
                            paddingHorizontal: 20,
                        }}
                        colors={[COLORS.transparent, COLORS.black]}
                    >
                        {StartForm()}
                    </LinearGradient>
                </View>

            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: "hidden",



    },
    main: {
        bottom: 0,
        position: "absolute",
        width: "100%",
    },
    title: {
        fontSize: 64,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: COLORS.lime,
        borderRadius: 12,
        marginStart: 10,
        marginEnd: 10,
        height: 50,
        elevation: 0,
        marginBottom: 50,


    },
});

export default WelcomeScreen