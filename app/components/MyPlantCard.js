import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph, Text } from 'react-native-paper';



const MyComponent = ({
    title,
    onPress,
    description,
    image,
    created_at,
}) => (
    <Card
        onPress={onPress}
        style={{
            marginStart: 10,
            marginEnd: 10,
            marginBottom: 10,

        }}>
        <Card.Cover source={{ uri: image }} />
        <Card.Content>
            <Title
                style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                }}
            >{title}</Title>
            <Paragraph
            >{description}</Paragraph>

            <Text
                style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: 'gray',
                    marginTop: 10,
                }}
            >
                {created_at && created_at.split('T')[0]}
            </Text>

        </Card.Content>


    </Card>
);

export default MyComponent;