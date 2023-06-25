import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import api from '../Api/MyPlant';
import MyComponent from '../components/MyPlantCard';
import { ActivityIndicator } from 'react-native-paper';
import { COLORS } from '../constants/them';

const MyPlants = ({ navigation }: { navigation: any }) => {
    const [loading, setLoading] = useState(false)
    const [articles, setArticles] = useState([])

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
            {articles && articles?.length == 0 ? activityIndicator() :
                <FlatList
                    data={articles}
                    renderItem={({ item }) => (
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
                            image={item.image_s3_uri}
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