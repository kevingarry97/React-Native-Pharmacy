import React from 'react';
import { Image, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import AppText from './text';

const Card = ({name, imageUrl, price, onPress, style}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.card, style]}>
                <Image source={{ uri: imageUrl}} style={styles.image} />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{name}</AppText>
                    <AppText style={styles.subTitle}>{price}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginVertical: 20,
        elevation: 5,
    },
    image: {
        width: "100%",
        height: 200,
    },
    detailsContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subTitle: {
        color: colors.primary,
        fontWeight: "bold",
    },
    title: {
        color: colors.medium,
        fontWeight: 'bold',
        fontSize: 19,
        paddingBottom: 10,
    },
})

export default Card;