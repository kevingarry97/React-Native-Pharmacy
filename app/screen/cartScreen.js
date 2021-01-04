import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import AppButton from '../components/button';
import Screen from '../components/screen';
import AppText from '../components/text';
import useApi from '../hooks/useApi';
import Cart from '../api/cart';
import CheckOut from '../api/checkOut';
import ActivityIndicator from '../components/activityIndicator';
import ListingsItem from './listingsItem';

const CartScreen = ({navigation}) => {
    const [NberOfMedecines, setValue] = useState([]);
    const [Id, setId] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const { data, error, loading, request: loadCart } = useApi(Cart.getCart);
    const checkApi = useApi(CheckOut.addToCheckOut);

    const handleIncrement = () => {
        console.log("Clicked");
        setValue((currentValue) => [...currentValue, quantity]);
    }
    const handleCheckout = async () => {
        if(Id.length == 0) return data.my_cart?.medecines.map(item => setId((currentId) => [...currentId, item.id]))

        console.log(Id);
        console.log(NberOfMedecines);
        const response = await checkApi.request(Id, NberOfMedecines);
        if(!response.ok) {
            console.log('Error posting');
        }

        console.log(response.data);
        navigation.navigate('CheckOut');
    }

    useEffect(() => {
        loadCart();
    }, []);

    return ( 
        <>
            <ActivityIndicator visible={loading || checkApi.loading} />
            <Screen style={styles.container}>
                {error || checkApi.error && <>
                    <AppText>Couldn't get the Cart</AppText>
                    <AppButton textColor="white" bgColor="primary" text="Retry" onPress={loadCart} />
                </>}
                <FlatList
                    data={data.my_cart?.medecines}
                    keyExtractor={(message) => message.id.toString()}
                    renderItem={({ item }) => (
                    <ListingsItem
                        name={item.name}
                        price={item.price}
                        imageUrl={item.file_url}
                        onPress={() => console.log("Message selected", item)}
                        handleIncrement={handleIncrement}
                        setQuantity={setQuantity}
                    />
                    )}
                />
                <AppButton textColor="white" bgColor="primary" text="Check Out" onPress={handleCheckout} />
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
        paddingHorizontal: 10
    },
})
 
export default CartScreen;