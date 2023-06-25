import { View, Text, Platform, KeyboardAvoidingView, StyleSheet } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, MessageText, Bubble, InputToolbar } from 'react-native-gifted-chat'
import MyPlant from '../Api/MyPlant'
import Constants from 'expo-constants';
import { storeChatData, getChatData, removeChatData } from '../helper/localStorage'
import { renderInputToolbar, renderActions, renderComposer, renderSend } from '../components/TextInputChat';
import {
    renderAvatar,
    renderBubble,
    renderSystemMessage,
    renderMessage,
    renderMessageText,
    renderCustomView,
} from '../components/MessageContainer';
const ChatWithAiScreen = ({ navigation }: { navigation: any }) => {
    const [isTyping, setIsTyping] = useState(false)
    const min = 100000;
    const max = 100;
    const tempChat: any = []
    const [messages, setMessages] = useState([])

    const getMessage = async () => {
        try {
            const messageList: any = await getChatData();
            if (messageList && messageList.length > 0) {
                tempChat.push(...messageList)
                setMessages(messageList.reverse())
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getMessage()

    }, [])

    const callAiApi = async (model: string, message: string) => {
        setIsTyping(true)
        const random = min + (Math.random() * (max - min));
        try {
            const response: any = await MyPlant.postQuestionByCohere(model, message);
            const answer = response.data.answer
            setIsTyping(false)
            setMessages(previousMessages => {
                const newMessage = {
                    _id: random,
                    text: answer,
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'User',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                }
                tempChat.push(newMessage)
                storeChatData(JSON.stringify(tempChat))
                return GiftedChat.append(previousMessages, [newMessage])
            })

            return response
        } catch (error) {
            console.error(error)
        }
    }


    const onSend = useCallback((messages = []) => {
        storeChatData(JSON.stringify(tempChat))
        callAiApi('command-light', messages[0].text)
        setMessages(previousMessages => {
            tempChat.push(messages[0])
            return GiftedChat.append(previousMessages, messages)

        })
    }, [])

    const renderBubble = (props: any) => {
        const { currentMessage: { user: currText } } = props; if (currText._id === 1) {
            return <Bubble {...props}
                wrapperStyle={{
                    left: {
                        elevation: 2,

                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 3 },
                        shadowOpacity: 0.3,
                        shadowRadius: 3,
                    },
                    right: {
                        shadowColor: '#000',
                        elevation: 2,
                        shadowOffset: { width: 0, height: 3 },
                        shadowOpacity: 0.5,
                        shadowRadius: 5,

                    }
                }}

            />
        }

        return <Bubble

            {...props}

            wrapperStyle={{
                left: {
                    elevation: 2,
                    backgroundColor: '#fef0dd',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                },
                right: {
                    shadowColor: '#000',
                    elevation: 2,
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                    backgroundColor: '#fef0dd'
                }
            }}
            timeTextStyle={{
                left: {
                    color: '#000',
                },
                right: {
                    color: '#000',
                },
            }}
        />
    }

    return (

        <View style={{
            flex: 1,
        }}>
            <GiftedChat
                isTyping={isTyping}
                placeholder='Type your message here...'
                alwaysShowSend={true}
                renderBubble={renderBubble}
                renderInputToolbar={renderInputToolbar}
                renderComposer={renderComposer}
                renderMessageText={renderMessageText}
                renderSend={renderSend}
                messages={messages}
                renderAvatarOnTop={true}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                    name: 'User',
                    avatar: 'https://placeimg.com/140/140/any',


                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fff',
        padding: 8,
    },
    checkboxView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        flex: 1,
    }
});

export default ChatWithAiScreen