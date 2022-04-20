import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert, useWindowDimensions, Image} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Logo from '../../../assets/images/Logo.png';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import { isMobile, isDesktop } from "react-device-detect";

const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUp = () => {
    const {control, handleSubmit, watch} = useForm();
    const pwd = watch('password');
    const {height} = useWindowDimensions();
    //const navigation = useNavigation();

    const onRegisterPressed = async data => {
        const {name, password, email, phone_number} = data;
        console.warn(name);
    };

    const onSignInPress = () => {
        showMessage({
            message: "Simple message",
            type: "danger",
        });
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={styles.logo}
                    resizeMode="contain"
                />
                {!isDesktop && (
                    <>
                        <Text style={styles.title}>Bine ai venit!</Text>
                        <Text style={styles.subTitle}>Completează formularul de mai jos pentru a te înregistra.</Text>
                    </>
                )}
                <View style={styles.container}>
                    {isDesktop && (
                        <Text style={styles.titleInside}>Inregistrare</Text>
                    )}
                    <CustomInput
                        name="name"
                        control={control}
                        inputName={"Nume complet"}
                        required={true}
                        onC
                        placeholder="Erichman"
                        rules={{
                            required: 'Name is required',
                            minLength: {
                                value: 3,
                                message: 'Name should be at least 3 characters long',
                            },
                            maxLength: {
                                value: 24,
                                message: 'Name should be max 24 characters long',
                            },
                        }}
                    />
                    <CustomInput
                        name="email"
                        control={control}
                        inputName={"Email"}
                        required={true}
                        placeholder="Email"
                        rules={{
                            required: 'Email is required',
                            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
                        }}
                    />
                    <CustomInput
                        name="phone_number"
                        control={control}
                        inputName={"Telefon"}
                        required={false}
                        placeholder="0760355689"
                        rules={{
                            minLength: {
                                value: 10,
                                message: 'Phone number should be at least 10 characters long',
                            },
                            maxLength: {
                                value: 12,
                                message: 'Phone number should be max 12 characters long',
                            },
                        }}
                    />
                    <CustomInput
                        name="password"
                        control={control}
                        inputName={"Parola"}
                        required={true}
                        placeholder="Password"
                        secureTextEntry
                        rules={{
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Password should be at least 8 characters long',
                            },
                        }}
                    />
                    <CustomInput
                        name="password-repeat"
                        control={control}
                        type={"password"}
                        inputName={"Repeta parola"}
                        required={true}
                        placeholder="Repeat Password"
                        secureTextEntry
                        rules={{
                            validate: value => value === pwd || 'Password do not match',
                        }}
                    />

                    <CustomButton
                        text="Înregistrează-te!"
                        onPress={handleSubmit(onRegisterPressed)}
                    />

                    <Text style={styles.text}>
                        Ai deja un cont?{' '}
                        <Text style={styles.link} onPress={onSignInPress}>
                            Autentifică-te!
                        </Text>
                    </Text>

                </View>
            </View>
            <FlashMessage position="bottom" />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 32,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        color: '#FFFFFF',
        margin: 10,
    },
    titleInside: {
        fontSize: 25,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        color: '#333333',
        margin: 10,
        display: "flex",
        alignItems: 'center',
        textAlign: "center"
    },
    subTitle: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingBottom: 20,
        marginVertical: 0,
    },
    text: {
        color: '#A0AEC0',
        marginVertical: 5,
        display: "flex",
        alignItems: 'center',
        textAlign: "center",
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
    },
    link: {
        color: '#2D3748',
        textDecorationLine: "underline"
    },
    logo: {
        width: '100%',
    },
});

export default SignUp;
