import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './text';
import colors from '../config/colors';

const SmallText = ({textStyle, title, style, onPress}) => {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <AppText style={[styles.text, textStyle]}>{title}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 13,
        color: colors.medium
    } 
})

export default SmallText;