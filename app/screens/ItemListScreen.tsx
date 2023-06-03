import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import firebase from '../firebase/firebaseConfig';

import AuctionItem from '../components/AuctionItem';
const db = firebase.db


const ItemListScreen = ({ navigation }) => {



    const [items, setItems] = useState<any[]>([])
    const getCollection = async () => {
        const emptyArray: any[] = []
        const querySnapshot = (await getDocs(collection(db, "ItemData")))
        querySnapshot.docs.reverse().map(doc => {
            emptyArray.push({ id: doc.id, ...doc.data() });
        })
        setItems(emptyArray)
    }
    useEffect(() => {
        getCollection()
    }, [])

    const goToDetails = (item: any) => {
        //console.log(item)
        navigation.navigate('ItemDetailsScreen', { item: item })
    }


    return (

        <View>

            <FlatList
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
            />

        </View>
    )
}

export default ItemListScreen