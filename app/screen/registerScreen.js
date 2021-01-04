import React, { useState } from 'react';
import * as Yup from 'yup';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AuthenticateButton from '../components/authenticateButton';
import Screen from '../components/screen';
import AppText from '../components/text';
import colors from '../config/colors';
import { AppForm, AppFormField, SubmitButton } from '../components/form';
import User from '../api/register';
import Auth from '../api/auth';
import useApi from '../hooks/useApi';
import useAuth from '../auth/useAuth';
import AppButton from '../components/button';

const validationSchema = Yup.object().shape({
    fname: Yup.string().required().label('First name'),
    lname: Yup.string().required().label('Last name'),
    location: Yup.string().required().label('Location'),
    phone_no: Yup.string().required().label('Phone number'),
    password: Yup.string().required().label('Password'),
    password_confirmation: Yup.string().required().label('Confirm Password')
})

const RegisterScreen = ({navigation}) => {
    const auth = useAuth();
    const userApi = useApi(User.register);
    const loginApi = useApi(Auth.login);

    const handleSubmit = async (userInfo) => {
        const response = await userApi.request(userInfo);
        if(!response.ok) return console.log(response.data);
        
        const res = await loginApi.request(userInfo.phone_no, userInfo.password);
        auth.login(res.data.access_token);
    }

    return (
        <>
            <Screen style={styles.container}>
                {userApi.error && <>
                    <AppText>Couldn't get the Cart</AppText>
                    <AppButton textColor="white" bgColor="primary" text="Retry" onPress={handleSubmit} />
                </>}
                <View style={{alignSelf: 'center', marginTop: 30}}>
                    <Image source={require('../assets/images/pharmacy.png')} style={{ width: 100, height: 100}} />
                    <AppText style={styles.text}>Find nearby Pharmacy's</AppText>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.formContainer}>
                        <AppText style={styles.text}>
                            Sign Up & Enjoy &nbsp;
                            <MaterialCommunityIcons style={styles.icon} name="account-arrow-right" size={20} color={colors.primary} />
                        </AppText>
                        <AppForm
                            initialValues={{fname: '', lname: '', location: '', phone_no: '', password: '', password_confirmation: ''}}
                            onSubmit={handleSubmit}
                            validationSchema={validationSchema}
                        >
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false} 
                                placeholder="First name:"
                                name="fname"
                            />
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false} 
                                placeholder="Last name:"
                                name="lname"
                            />
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false} 
                                placeholder="Location:"
                                name="location"
                            />
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false} 
                                placeholder="Phone number" 
                                keyboardType="numeric"
                                name="phone_no"
                            />
                            <AppFormField 
                                autoCapitalize="none"
                                autoCorrect={false} 
                                placeholder="Password"
                                secureTextEntry
                                name="password"
                            />
                            <AppFormField
                                autoCapitalize="none"
                                autoCorrect={false} 
                                placeholder="Confirm Password"
                                secureTextEntry
                                name="password_confirmation"
                            />
                            <SubmitButton title="Register Now" />
                        </AppForm>
                        <AuthenticateButton style={{ alignSelf: 'center'}} text="Already have an Account?" button="Sign In" onPress={() => navigation.navigate('Login')} />
                    </View>
                </ScrollView>
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        paddingLeft: 10,
        justifyContent: 'center'
    },
    formContainer: {
        backgroundColor: colors.white,
        elevation: 5,
        borderTopLeftRadius: 30,
        padding: 30,
        flex: 1,
        marginTop: 10,
    },
    text: {
        fontWeight: '700',
        marginBottom: 20
    }
})

export default RegisterScreen;