import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Formik } from 'formik';
import TextInputReactPaper from '../components/TextInputReactPaper'
import { Button } from 'react-native-paper'
import { showMessage } from "react-native-flash-message";
import AuthApi from '../Api/AuthApi';
import { storeAuthData } from '../helper/localStorage';
import { COLORS, SIZES } from '../constants/them';


const LoginScreen = ({ navigation }: { navigation: any }) => {
    const [loading, setLoading] = useState(false)
    const LoginForm = () => {
        const submitLoginParam = async (values: any) => {
            console.log(values)

            setLoading(true)
            const response = await AuthApi.loginUsingUserNameAndPassword(values.userName, values.password);
            setLoading(false)

            if (response.ok) {
                storeAuthData(response?.data?.aiToken || "")
                navigation.navigate("FeedTaps")
                showMessage({
                    message: "Login Success",
                    type: "success",
                });
            } else {
                showMessage({
                    message: "Login Failed",
                    type: "danger",
                });
            }

        }

        return (
            <View style={{
                flex: 0.8,
                justifyContent: "center",
            }}>

                <Formik
                    initialValues={{ userName: '', password: '' }}
                    onSubmit={values => {
                        submitLoginParam(values)
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            <TextInputReactPaper
                                label="username"
                                placeholder="username"
                                onChangeText={handleChange('userName')}
                                onBlur={handleBlur('userName')}
                                value={values.userName}
                            />
                            <TextInputReactPaper
                                label="Password"
                                placeholder="Password"
                                secureTextEntry
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                            <TouchableOpacity onPress={handleSubmit}>
                                <Button
                                    loading={loading}

                                    style={[styles.button, {
                                        backgroundColor: "#000000",
                                    }]}
                                    mode="contained">
                                    Login
                                </Button>
                            </TouchableOpacity>

                        </View>

                    )}
                </Formik>

                <TouchableOpacity
                    style={{
                        marginBottom: SIZES.S_12,
                        bottom: 40,
                        position: "absolute",
                        width: "100%",

                    }}
                >
                    <Button
                        onPress={
                            () => {
                                navigation.navigate("RegisterScreen")
                            }
                        }

                        loading={false}
                        style={[styles.button, {
                            backgroundColor: COLORS.lime,
                        }]}
                        mode="contained">
                        Create An Account
                    </Button>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>

            <Image
                style={{
                    width: 50,
                    height: 50,
                    alignSelf: "center",
                    marginTop: 100,
                }}
                source={require("../../assets/logo.jpeg")}
            />
            {LoginForm()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    title: {
        fontSize: 10,
        fontWeight: "bold",
    },
    button: {

        borderRadius: 12,
        margin: 10,
        height: 50,
        elevation: 0,
        shadowOpacity: 0,
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
            width: 0
        },

    },
});

export default LoginScreen