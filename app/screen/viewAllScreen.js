import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useAuth from '../auth/useAuth';
import Screen from '../components/screen';
import AppText from '../components/text';
import colors from '../config/colors';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import AppTextInput from '../components/textInput';
import Cart from '../api/cart';
import useApi from '../hooks/useApi';
import AppButton from '../components/button';
import Card from '../components/card';
import listingMedecine from '../api/medecine';
import ActivityIndicator from '../components/activityIndicator';

function ViewAllScreen({navigation}) {
    const {user, logOut} = useAuth();
    const {data, error, loading, request: loadMedecines} = useApi(listingMedecine.getMedecine);
    const cartApi = useApi(Cart.getCart);

    useEffect(() => {
        loadMedecines();
        cartApi.request();
    }, []);

    return (
        <>
            <ActivityIndicator visible={loading} />
            <Screen style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row'}}>
                        <AppText style={{ fontSize: 23 }}>Hi, </AppText>
                        <AppText style={{ fontSize: 23, fontWeight: 'bold' }}>{user.fname}</AppText>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row'}} onPress={() => {cartApi.data.my_cart?.medecines ? navigation.navigate('Cart') : navigation.navigate('CheckOut')}}>
                        <MaterialCommunityIcons name="cart-outline" size={30} color={colors.primary} />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', marginTop: 30}}>
                    <AppTextInput placeholder="Search a medecine" width="85%" />
                    <TouchableOpacity onPress={() => logOut()}>
                        <MaterialCommunityIcons name="shield-search" size={28} color={colors.primary} style={{ marginTop: 15 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.top}>
                    <View style={styles.title}>
                        <AppText style={{ fontSize: 20, fontWeight: 'bold' }}>All Medecines</AppText>
                    </View>
                </View>
                {error && <>
                    <AppText>Couldn't retrieve the listings</AppText>
                    <AppButton textColor="white" bgColor="primary" text="Retry" onPress={loadMedecines} />
                </>}
                <FlatList
                    data={data.medecines}
                    keyExtractor={(medecine) => medecine.id.toString()}
                    renderItem={({item}) => (
                        <Card
                            imageUrl={item.file_url}
                            price={"RWF" + item.price}
                            name={item.name}
                            onPress={() => navigation.navigate("Details", item)}
                        />
                    )}

                />
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    description: {
        marginTop: 15,
        alignItems: 'center'
    },
    itemContainer: {
        backgroundColor: colors.light,
        borderRadius: 10,
        marginHorizontal: 3,
        elevation: 2,
        marginVertical: 5,
        paddingHorizontal: 7,
        paddingVertical: 15
    },
    itemName: {
        fontSize: 13,
        fontWeight: 'bold',
    },
    itemPrice: {
        marginTop: 10,
        fontSize: 16,
        color: colors.primary,
        fontWeight: 'bold'
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    scrollViewWrapper: {
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: 20,
        paddingBottom: 40
    },
    container: {
        backgroundColor: colors.background,
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    top: {
        marginTop: 30
    }
})

export default ViewAllScreen;