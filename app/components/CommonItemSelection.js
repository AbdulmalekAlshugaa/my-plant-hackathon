import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Card, Text, Avatar } from 'react-native-paper';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from '../constants/them';

const CommonItemSelection = ({
    title,
    subTitle,
    icon,
    onPress,
    customTextStyle,
    size = 24,
    color = COLORS.white,
    customSubText,
    isLeftEnabled = true,
    isRightEnabled = false,
    width = 35,
    height = 35,
    cardBackGround = COLORS.white
}) => {
    const leftIcon = (
        <MaterialCommunityIcons
            name={icon}
            size={size}
            color={color}
            style={{
                backgroundColor: COLORS.secondary,
                padding: 2,
                borderRadius: 2,
            }}
        />
    );
    const rightIcon = (
        <View
            style={{
                backgroundColor: COLORS.secondary,
                width: width,
                height: height,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
            }}>
            <MaterialCommunityIcons
                name={icon}
                size={size}
                color={color}
                allowFontScaling={true}
            />
        </View>
    );
    return (
        <Card
            onPress={onPress}
            style={{
                margin: 5,
                marginEnd: 10,
                marginStart: 10,
                padding: 10,
                paddingVertical: 18,
                borderRadius: 10,
                backgroundColor: cardBackGround
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                    }}>
                    {isRightEnabled && rightIcon}
                    <Text
                        style={[
                            {

                                alignItems: 'center',
                                marginStart: 2,
                            },
                            customTextStyle,
                        ]}
                        variant="bodyMedium">
                        {title}
                    </Text>
                </View>

                {subTitle && (
                    <Text
                        style={[
                            {

                                alignItems: 'center',
                                color: COLORS.primary,
                            },
                            customSubText,
                        ]}
                        variant="bodyMedium">
                        {subTitle}
                    </Text>
                )}

                {isLeftEnabled && leftIcon}
            </View>
        </Card>
    );
};

export default CommonItemSelection;

const styles = StyleSheet.create({});
