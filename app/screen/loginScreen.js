import React from 'react';
import * as Yup from 'yup';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AuthenticateButton from '../components/authenticateButton';
import Screen from '../components/screen';
import AppText from '../components/text';
import SmallText from '../components/smallText';
import Auth from '../api/auth';
import colors from '../config/colors';
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/form';
import useApi from '../hooks/useApi';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
    phone_no: Yup.string().required().label("Phone No"),
    password: Yup.string().required().min(4).label("Password")
})

const LoginScreen = ({navigation}) => {
    const loginApi = useApi(Auth.login);
    const { login } = useAuth();

    const handleSubmit = async ({phone_no, password}) => {
        const response = await loginApi.request(phone_no, password);
        if(!response.ok) return;

        login(response.data.access_token);
    }

    return (
        <>
            <Image source={require('../assets/images/bg1.png')} style={{ position: 'absolute', height: '70%'}} />
            <Screen style={styles.container}>
                <Image source={require('../assets/images/pharmacy.png')} style={styles.logoImg} />
                <AppText style={styles.text}>Find nearby Pharmacy's</AppText>
                <View style={styles.formContainer}>
                    <AppText style={styles.text}>
                        Sign In & Enjoy &nbsp;
                        <MaterialCommunityIcons style={styles.icon} name="account-arrow-right" size={20} color={colors.primary} />
                    </AppText>
                    <ErrorMessage error="Invalid Email / Password" visible={loginApi.error} />
                    <AppForm 
                        initialValues={{phone_no: '', password: ''}}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false} 
                            placeholder="Phone number format (250 7......)" 
                            keyboardType="numeric"
                            name="phone_no"    
                        />
                        <AppFormField
                            autoCapitalize="none"
                            autoCorrect={false} 
                            placeholder="Password" 
                            name="password"
                            secureTextEntry     
                        />
                        <SubmitButton title="Login" />
                    </AppForm>
                </View>
                <SmallText title="Forgot password ?" onPress={() => console.log("Forgeting password!")} />
                <AuthenticateButton style={{ marginTop: 30 }} text="Don't have an account?" button="Sign Up" onPress={() => navigation.navigate('Register')} />
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    formContainer: {
        width: '100%',
        marginTop: 50
    },
    icon: {
        marginLeft: 10
    },
    logoImg: { 
        width: 90, 
        height: 90, 
        marginBottom: 5 
    },
    text: {
        fontWeight: '700'
    }
})

export default LoginScreen;