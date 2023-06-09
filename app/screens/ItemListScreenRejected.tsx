import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import firebase from '../firebase/firebaseConfig';
import { ActivityIndicator } from 'react-native-paper';

import AuctionItem from '../components/AuctionItem';
const db = firebase.db


const ItemListScreenRejected = ({ navigation }: { navigation: any }) => {
    const activityIndicator = () => {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                height: '100%'
            }}>
                <ActivityIndicator
                    style={{ flex: 1 }}
                    size="large"
                    color="#0000ff" />
            </View>
        )
    }




    const [items, setItems] = useState<any[]>([])
    const getCollection = async () => {
        const emptyArray: any[] = []
        const querySnapshot = (await getDocs(collection(db, "ItemData")))
        querySnapshot.docs.reverse().map(doc => {
            emptyArray.push({ id: doc.id, ...doc.data() });
        })
        if (emptyArray.length > 0) {
            const filteredArray = emptyArray.filter(item => item.isActive === "rejected")
            setItems(filteredArray)
        }

    }
    // call getCollection() when the component is on focus

    navigation.addListener('focus', () => {
        getCollection()
    })



    useEffect(() => {
        getCollection()
    }, [])

    const goToDetails = (item: any) => {
        //console.log(item)
        navigation.navigate('ItemDetailsScreen', { item: item })
    }


    return (

        <View style={{
            flex: 1,
        }}>
            {items && items?.length == 0 ? activityIndicator() : <FlatList
                data={items}
                renderItem={({ item }) => (
                    <AuctionItem
                        description={item.description}
                        image={item.imageUri}
                        status={item.isActive}
                        price={item.startPrice}
                        OnPress={() => {
                            goToDetails(item)
                        }}
                    />
                )}
                keyExtractor={(item) => item.id}
                scrollEnabled={true}
                scrollEventThrottle={16}
            />}



        </View>
    )
}

export default ItemListScreenRejected