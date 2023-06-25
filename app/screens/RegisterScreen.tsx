import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Formik } from 'formik';
import TextInputReactPaper from '../components/TextInputReactPaper'
import { Button } from 'react-native-paper'
import { showMessage } from "react-native-flash-message";
import AuthApi from '../Api/AuthApi';
import { storeAuthData } from '../helper/localStorage';
import { COLORS, SIZES } from '../constants/them';

const RegisterScreen = ({ navigation }: { navigation: any }) => {

    const [loading, setLoading] = useState(false)
    const LoginForm = () => {
        const submitLoginParam = async (values: any) => {
            console.log(values)

            setLoading(true)
            const response = await AuthApi.createAccount(values.userName, values.password, values.firstName, "NULL", "ADMIN@MAIL.COM");
            setLoading(false)
            console.log(response)
            if (response.ok) {
                console.log(response)
                storeAuthData(response?.data?.aiToken || "")
                navigation.navigate("FeedTaps")
                showMessage({
                    message: "success",
                    description: "Account Created",
                    type: "success",
                });
            } else {
                showMessage({
                    message: response?.data?.errors[0]?.message || "Account Creation Failed",
                    description: "Account Creation Failed",
                    type: "danger",
                });
            }

        }

        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
            }}>
                <Formik
                    initialValues={{ firstName: '', userName: '', password: '' }}
                    onSubmit={values => {
                        submitLoginParam(values)
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            <TextInputReactPaper
                                label="name"
                                placeholder="name"
                                onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                                value={values.firstName}
                            />
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
                                    create account
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
                                navigation.navigate("LoginScreen")
                            }
                        }

                        loading={false}
                        style={[styles.button, {
                            backgroundColor: COLORS.lime,
                        }]}
                        mode="contained">
                        Login
                    </Button>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
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
        fontSize: 64,
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

export default RegisterScreen