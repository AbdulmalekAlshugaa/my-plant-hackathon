import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import api from '../Api/MyPlant';
import MyComponent from '../components/MyPlantCard';
import { ActivityIndicator } from 'react-native-paper';
import { COLORS } from '../constants/them';


const MyPlants = ({ navigation }: { navigation: any }) => {
    const [loading, setLoading] = useState(false)
    const [articles, setArticles] = useState([])

    const localArray = [
        {
            "image": require('../../assets/heart_1.jpg'),

        },
        {
            "image": require('../../assets/heart_2.jpg'),

        },
        {
            "image": require('../../assets/leaves_3.jpg'),

        },
        {
            "image": require('../../assets/nature_4.jpg'),

        }
    ]

    // lest merge the two array


    const activityIndicator = () => {
        if (articles.length == 0)
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
                        color={COLORS.lime} />
                </View>
            )

    }

    const getRecommendationCassiasApi = async () => {
        setLoading(true)
        const response = await api.getRecommendationCassias()
        setArticles(response.data.articles)

        setLoading(false)
    }


    useEffect(() => {

        getRecommendationCassiasApi();

    }, []);

    return (

        <View style={{
            flex: 1,
        }}>
            {loading ? activityIndicator() :
                <FlatList
                    data={articles}
                    renderItem={({ item, index }) => (
                        <MyComponent
                            created_at={item.created_at}
                            onPress={() => {
                                navigation.navigate("ItemDetailsScreen", {
                                    item: item
                                });
                            }
                            }
                            title={item.title}
                            description={item.short_description}
                            image={localArray[index].image}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    scrollEnabled={true}
                    scrollEventThrottle={16}
                />}


        </View>
    )
}

export default MyPlants