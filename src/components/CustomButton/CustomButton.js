import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor, spacerTop, spacerBottom}) => {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor} : {},
            ]}>
            <Text
                style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor ? {color: fgColor} : {},
                ]}>
                {text}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        marginTop: 30,
        marginBottom: 10,
        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#F2994A',
        borderRadius: 8,
        fontFamily: "Abel",
        fontStyle: "normal",
        fontSize: 10
    },

    text: {
        fontWeight: '400',
        color: 'white'

    }
});

export default CustomButton;
