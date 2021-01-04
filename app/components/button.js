import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

const AppButton = ({bgColor, onPress, style, text, textColor, width = '100%'}) => {
    return (
        <TouchableOpacity style={[styles.buttonContainer, style, { backgroundColor: colors[bgColor], width}]} onPress={onPress}>
            <Text style={[styles.text, { color: colors[textColor]}]}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        marginVertical: 20,
        borderRadius: 30,
        padding: 7,
        
    },
    text: {
        fontSize: 16,
        fontWeight: '700'
    }
})

export default AppButton;