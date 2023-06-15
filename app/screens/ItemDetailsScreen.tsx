import { View, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RouteProp } from '@react-navigation/native';
import AuctionItem from '../components/AuctionItem';
import { Button } from 'react-native-paper';
import FlashMessage, { showMessage } from "react-native-flash-message";
import { getFirestore, collection, doc, updateDoc, getDocs } from 'firebase/firestore';
import firebase from '../firebase/firebaseConfig';
const db = firebase.db

const ItemDetailsScreen = ({ route, navigation }: { route: any, navigation: any }) => {
    const data = route.params;
    const [loading, setLoading] = useState(false)
    const [rejectedLoading, setRejectedLoading] = useState(false)

    const updateParameter = async (documentId: string, updatedData: object) => {
        if (updatedData?.isActive == 'active' || updatedData?.isActive == 'Pending') {
            setLoading(true)
        } else {
            setRejectedLoading(true)
        }



        try {
            const db = getFirestore();
            const docRef = doc(db, 'ItemData', documentId);
            await updateDoc(docRef, updatedData).then(() => {
                showMessage({
                    message: "Success",
                    description: "Item Updated",
                    type: "success",
                    icon: "success",
                });

                navigation.goBack()
                setLoading(false)
                setRejectedLoading(false)
            });

        } catch (error) {
            showMessage
                ({
                    message: "Error",
                    description: "Error updating parameter",
                    type: "danger",
                    icon: "danger",
                });


            console.error('Error updating parameter:', error);
            setLoading(false)
            setRejectedLoading(false)
        }
    };

    const Accept = () => {
        updateParameter(data.item.id, { isActive: "active" })
    }
    const Reject = () => {
        updateParameter(data.item.id, { isActive: 'rejected' })
    }
    useEffect(() => {

    }, [])
    return (
        <>

            <View style={styles.container} >
                <FlashMessage position="top" />
                <AuctionItem
                    status={data.item.isActive}
                    description={data.item.description}
                    image={data.item.imageUri}
                    price={data.item.startPrice}
                    OnPress={() => {
                        console.log("pressed")
                    }
                    }
                />
            </View>

            <View
                shouldRasterizeIOS
                style={styles.buttonContainer}
            >

                <Button
                    loading={rejectedLoading}
                    mode="contained" style={styles.button2} onPress={() => Reject()}>
                    Reject
                </Button>

                <Button
                    loading={loading}
                    mode="contained"
                    style={styles.button}
                    onPress={() => Accept()}>
                    Accept
                </Button>


            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    buttonContainer: {
        bottom: 0,

        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,


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
    button2: {
        backgroundColor: "red",
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

export default ItemDetailsScreen