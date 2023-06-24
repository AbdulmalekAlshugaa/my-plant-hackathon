import { View, Text, FlatList, Platform, KeyboardAvoidingView } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

const ChatWithAiScreen = ({ navigation }: { navigation: any }) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello Abdulmalik',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Chatbot',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])
    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        )
    }, [])

    const renderUsername = () => {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'red'
            }}>
                <Text>Chatbot</Text>
            </View>

        )

    }
    return (

        <View style={{
            flex: 1,
        }}>
            <GiftedChat
                isTyping={false}
                placeholder='Type your message here...'
                alwaysShowSend={true}
                renderUsername={renderUsername}
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
            {
                Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />
            }
        </View>
    )
}

export default ChatWithAiScreen