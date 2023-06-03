import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import { COLORS, SIZES } from '../constants/them';


interface TextInputReactPaperProps {
    label: string;
    placeholder?: string;
    multiline?: boolean;
}

const TextInputReactPaper = ({
    label,
    placeholder,
    multiline,
    ...props
}: TextInputReactPaperProps) => {
    return (
        <View
            style={styles.container}>
            <TextInput
                style={styles.TextInput}
                label={label}
                mode="outlined"
                allowFontScaling={true}
                placeholderTextColor={COLORS.gray}
                multiline={multiline}
                outlineColor={COLORS.transparent}
                activeOutlineColor={COLORS.black}
                placeholder={placeholder}
                theme={{
                    colors: {
                        primary: COLORS.black,
                        text: COLORS.black,
                        placeholder: COLORS.gray,
                        background: COLORS.transparent,
                    },
                    roundness: 10,
                }
                }
                {...props}
            />
        </View>
    );
};

export default TextInputReactPaper;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        elevation: 5,
        marginHorizontal: SIZES.S_10,
        marginVertical: SIZES.S_4,
        borderRadius: SIZES.S_5,
    },
    TextInput: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.S_5,
    }
});
