import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Cart from '../api/cart';
import AppButton from '../components/button';
import Screen from '../components/screen';
import AppText from '../components/text';
import colors from '../config/colors';
import CartContext from '../context/cartContext';
import useApi from '../hooks/useApi';

function ViewDetailScreen({route, navigation}) {
    const item = route.params;
    const cartContext = useContext(CartContext)
    const cart = useApi(Cart.addToCart);

    const handleCart = async () => {
        const response = await cart.request(item.id);
        if (!response.ok) return console.log("Error occured");

        navigation.navigate('Home')
    };

    useEffect(() => {
        console.log(cartContext);
    }, [])

    return (
        <Screen style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri: item.file_url}} style={styles.image} />
            </View>
            <View style={styles.contentContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <AppText style={styles.detailName}>{item.name}</AppText>
                    <AppText style={styles.detailPharmacyName}>{item.pharmacy.name}</AppText>
                    <View style={styles.descriptionDetail}>
                        <AppText style={styles.headers}>Description:</AppText>
                        <AppText style={styles.detailDescription}>{item.description}</AppText>
                    </View>
                    <View style={styles.detailsBottom}>
                        <AppText style={styles.detailPrice}>Rwf {item.price}</AppText>
                        <AppButton bgColor="primary" width="65%" style={{ marginTop: -5}} textColor="light" text="Add to Cart" onPress={handleCart} />
                    </View>
                </ScrollView>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
    },
    contentContainer: {
        backgroundColor: colors.white,
        borderRadius: 30,
        padding: 20,
        height: '100%'
    },
    descriptionDetail: {
        marginTop: 20,
    },
    detailsBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },
    detailDescription: {
        marginTop: 10,
        letterSpacing: .1
    },
    detailName: {
        fontSize: 25,
        fontWeight: '700'
    },
    detailPharmacyName: {
        marginTop: 5,
        fontSize: 12
    },
    detailPrice: {
        color: colors.primary,
        fontSize: 19,
        fontWeight: 'bold'
    },
    headers: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: 'bold'
    },
    image: { 
        marginTop: 30,
        width: 200, 
        height: 180,
    },
    imageContainer: {
        paddingVertical: 30,
        alignItems: 'center'
    }
})

export default ViewDetailScreen;