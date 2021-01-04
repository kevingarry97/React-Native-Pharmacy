import React, { useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import CheckOut from '../api/checkOut';
import ActivityIndicator from '../components/activityIndicator';
import Screen from '../components/screen';
import AppText from '../components/text';
import colors from '../config/colors';
import useApi from '../hooks/useApi';

const checkOutScreen = () => {
    const { data, error, loading, request: loadCheck } = useApi(CheckOut.viewCheckout);

    useEffect(() => {
        loadCheck();
    },[]);

    return (
        <>
            <ActivityIndicator visible={loading} />
            <Screen style={styles.container}>
                {error && <>
                    <AppText>Couldn't get the Checkout</AppText>
                    <AppButton textColor="white" bgColor="primary" text="Retry" onPress={loadCheck} />
                </>}
                <AppText style={styles.checkOut}>Check Out</AppText>
                <AppText style={{ fontSize: 12, marginLeft: 10}}>You have in total {data.Medecines_ordered?.length} medecine(s)</AppText>
                <View style={{ marginTop: 40}}>
                    <FlatList 
                        data={data?.Medecines_ordered}
                        keyExtractor={(medecine) => medecine.id.toString()}
                        renderItem={({item}) => (
                            <>  
                                <View style={{ flex: 1, flexDirection: 'row'}}>
                                    <Image source={{ uri: item.file_url}} style={{ width: 80, height: 90}} />
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10}}>
                                        <View>
                                            <AppText style={{ fontSize: 17, fontWeight: 'bold'}}>{item.name}</AppText>
                                            <View style={{ marginTop: 20}}>
                                                <AppText style={{ fontSize: 13}}>Quantity: <Text style={{fontWeight: 'bold', fontSize: 15}}>{item.pivot.items}</Text></AppText>
                                                <AppText>{item.description}</AppText>
                                            </View>
                                            
                                        </View>
                                        <View>
                                            <AppText style={{ color: colors.primary, fontWeight: 'bold'}}>Rwf {item.price}</AppText>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ marginTop: 30, flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10}}>
                                    <AppText style={{ fontWeight: 'bold', fontSize: 19}}>Total Costs</AppText>
                                    <View style={{ paddingBottom: 3, borderStyle: 'solid', borderColor: colors.primary, borderBottomWidth: 4}}>
                                        <AppText style={{ fontWeight: 'bold', fontSize: 16, color: colors.primary}}>Rwf {data?.total_to_pay}</AppText>
                                    </View>
                                </View>
                            </>
                        )}
                    />
                </View>
                    
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    checkOut: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20
    }
})
export default checkOutScreen;