import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

const AppText = ({children, style}) => {
    return (
        <Text style={[styles.textFormat, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    textFormat: {
        color: colors.medium,
        fontSize: 15
    }
})

export default AppText;