import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { COLORS } from '../constants/them';


interface CustomItemProps {
  description: string;
  image: string;
  price: string;
  status: string;
  OnPress: () => void;

}

const CustomCard = ({ description, image, price, status, OnPress }: CustomItemProps
) => {
  return (
    <View style={styles.cardContainer}>
      <Card
        onPress={OnPress}
        style={{ marginHorizontal: 10 }}
        contentStyle={{ padding: 10 }}
        collapsable={true}
      >
        <Card.Content
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text variant="titleLarge">Status</Text>
          <Text style={{
            color: status === "active" ? COLORS.black : COLORS.red
          }} selectionColor={COLORS.black} variant="bodyMedium">{status}</Text>
        </Card.Content>
        <Card.Cover
          resizeMode='cover'
          source={{ uri: image }} />
        <Card.Content>
          <Text variant="titleLarge">{price + "\tYER"}</Text>
          <Text variant="bodyMedium">{description}</Text>
        </Card.Content>
      </Card>
    </View >
  )
}

export default CustomCard

const styles = StyleSheet.create({

  cardContainer: {
    margin: 10,

    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },


})