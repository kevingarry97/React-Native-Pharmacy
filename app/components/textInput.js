import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import colors from '../config/colors';

const AppTextInput = ({ width = '100%', ...otherProps}) => {
    return (
        <View style={[styles.inputContainer, { width }]}>
            <TextInput placeholderTextColor={colors.medium} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 7,
        marginVertical: 5,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary
    }
})

export default AppTextInput;