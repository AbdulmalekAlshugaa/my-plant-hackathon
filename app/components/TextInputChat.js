/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Image } from 'react-native';
import { InputToolbar, Actions, Composer, Send } from 'react-native-gifted-chat';
import Ionicons from '@expo/vector-icons/Ionicons';
export const renderInputToolbar = (props) => (
    <InputToolbar
        {...props}
        containerStyle={{
            paddingTop: 4,

        }}
        primaryStyle={{ alignItems: 'center' }}
    />
);

export const renderActions = (props) => (
    <Actions
        {...props}
        containerStyle={{
            width: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 4,
            marginRight: 4,
            marginBottom: 0,
        }}

        optionTintColor="#222B45"
    />
);

export const renderComposer = (props) => (
    <Composer
        {...props}
        textInputProps={
            {
                autoCorrect: true,
            }
        }
        textInputStyle={{
            backgroundColor: '#EDF1F7',
            borderWidth: 1,
            borderRadius: 20,
            borderColor: '#E4E9F2',
            paddingTop: 8.5,
            paddingHorizontal: 12,
            marginLeft: 0,
        }}
    />
);

export const renderSend = (props) => (
    <Send
        {...props}
        disabled={!props.text}
        containerStyle={{
            width: 32,
            height: 32,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 4,
            backgroundColor: '#222B45',
            borderRadius: 16,
        }}
    >
        <Ionicons name="caret-forward-outline" size={32} color="green" />

    </Send>
);
