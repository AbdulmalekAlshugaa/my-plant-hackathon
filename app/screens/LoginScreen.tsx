import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Formik } from 'formik';
import TextInputReactPaper from '../components/TextInputReactPaper'
import { Button } from 'react-native-paper'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { showMessage } from "react-native-flash-message";

const LoginScreen = ({ navigation }) => {


    const LoginForm = () => {
        const [loading, setLoading] = useState(false)


        const auth = getAuth();
        const onSubmitLogin = (email: string, password: string) => {
            setLoading(true)
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setLoading(false)
                    navigation.navigate('ItemListScreen')


                })
                .catch((error) => {
                    setLoading(false)
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    showMessage({
                        message: "Error",
                        description: errorMessage,
                        type: "danger",
                        icon: "danger",
                    });


                    console.log(errorCode, errorMessage)
                });
        }

        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
            }}>


                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => onSubmitLogin(values.email, values.password)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            <TextInputReactPaper
                                label="Email"
                                placeholder="Email"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
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
                                    style={styles.button}
                                    mode="contained" onPress={handleSubmit}>
                                    Login
                                </Button>
                            </TouchableOpacity>

                        </View>
                    )}
                </Formik>


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
        backgroundColor: "#000000",
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