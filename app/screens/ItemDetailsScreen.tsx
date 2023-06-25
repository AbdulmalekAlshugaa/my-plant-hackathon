import { View, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { WebView } from 'react-native-webview';
import MyComponent from '../components/MyPlantCard';
import { ScrollView } from 'react-native-gesture-handler';
import { SIZES } from '../constants/them';


const ItemDetailsScreen = ({ route, navigation }: { route: any, navigation: any }) => {
    const { item } = route.params;
    const [loading, setLoading] = useState(false)
    const [articles, setArticles] = useState([])
    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')


    console.log(item.description)
    navigation.setOptions({ title: item.title, });


    return (
        <View style={styles.container}>

            <MyComponent
                created_at={item.created_at}
                onPress={() => {
                    navigation.navigate("ItemDetailsScreen", {
                        item: item
                    });
                }
                }
                title={item.title}
                image={item.image_s3_uri}
                description={item.short_description}
            />
            <WebView

                riginWhitelist={['*']}
                style={{
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'transparent',
                    margin: 10,
                    shadowColor: 'rgba(0,51,160,0.15)',
                    shadowRadius: 15,
                    elevation: 15,
                    shadowOffset: { width: 5, height: 5 },
                    shadowOpacity: 0.26,

                }}
                source={{ html: item.description }}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginBottom: SIZES.S_10

    },



});

export default ItemDetailsScreen