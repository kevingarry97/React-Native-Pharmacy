import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Screen from '../components/screen';
import Pharmacy from '../assets/images/pharmacies.svg';
import AppText from '../components/text';
import colors from '../config/colors';
import AppButton from '../components/button';

const WelcomeScreen = ({navigation}) => {
    return (
        <Screen style={styles.container}>
            <View style={styles.header}>
                <AppText style={styles.title}>Find a nearby</AppText>
                <AppText style={[styles.title, { color: colors.primary, textAlign: 'center'}]}>Pharmacy</AppText>
            </View>
            <Pharmacy width={250} height={230} />
            <View style={styles.bottom}>
                <AppButton bgColor="primary" textColor="light" text="Login" onPress={() => navigation.navigate('Login')} />
                <AppButton style={styles.registerButton} bgColor="background" textColor="primary" text="Register" onPress={() => navigation.navigate('Register')} />
                <AppText style={styles.bottomText}>We are a trusted app.</AppText>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    bottom: {
        width: '100%',
        position: 'absolute',
        bottom: 10,
        textAlign: 'center'
    },
    bottomText: { 
        textAlign: 'center', 
        marginTop: 10 
    },
    header: {
        position: 'absolute',
        top: 50
    },
    registerButton: {
        borderWidth: 1,
        borderColor: colors.primary,
        marginTop: -5
    },
    title: {
        textAlign: 'center',
        fontSize: 23,
        fontWeight: '700'
    }
})

export default WelcomeScreen;