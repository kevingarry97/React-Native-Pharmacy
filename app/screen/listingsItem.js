import React, { Component, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/button';
import { AppFormField } from '../components/form';
import AppText from '../components/text';
import AppTextInput from '../components/textInput';
import colors from '../config/colors';

const ListingsItem = ({imageUrl, name, price, handleIncrement, setQuantity}) => {

    return ( 
        <View style={styles.cartContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Image source={{uri: imageUrl}} style={{ width: 100, height: 100}} />
                    <View style={styles.contentContainer}>
                        <AppText style={styles.title}>{name}</AppText>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                            <View style={{ marginLeft: 20}}>
                                <AppTextInput 
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholder="Quantity"
                                    keyboardType="numeric"
                                    onChangeText={(text) => setQuantity(text)}
                                />
                            </View>
                            <AppButton textColor="primary" text="+" onPress={handleIncrement} />
                        </View>
                            
                        
                        
                    </View>
                </View>
                <View>
                    <AppText style={styles.price}>Rwf {price}</AppText>
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        marginHorizontal: 20,
        justifyContent: 'space-between'
    },
    cartContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    counter: {
        fontWeight: 'bold',
    },
    price: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 10,
        color: colors.primary
    },
    title: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 19
    }
})
 
export default ListingsItem;