import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';

const AuthenticateButton = ({button, onPress, style, text}) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.button}>{button}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        color: colors.primary,
        fontWeight: '700',
        fontSize: 13.2,
        paddingLeft: 5
    },
    container: {
        flexDirection: 'row'
    },
    text: {
        color: colors.medium
    }
})

export default AuthenticateButton;