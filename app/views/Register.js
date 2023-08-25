import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import colors from '../components/colors';
import { CloseIcon } from '../assets/svgIcons/cliqueIcon';
import EmailInput from '../components/EmailInput';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import routes from '../navigation/routes';
import Spinner from '../components/Spinner';
import { register } from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux'
import PasswordInput from '../components/PasswordInput';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validateRegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(4, 'Password too short').required('Password is required'),
})

function Register({ navigation }) {
    const { loading, success, error } = useSelector(state => state.auth);
    const dispatch = useDispatch();


    async function submitForm(values) {
        console.log(values)
        dispatch(register(values))
        navigation.navigate(routes.CONFIRM_CODE);
    }

    return (
        <Screen>
            <View style={style.main}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start'
                }} >
                    <View style={{}}>
                        <TouchableOpacity onPress={() => navigation.pop()} >
                            <CloseIcon />
                        </TouchableOpacity>
                    </View>
                </View>

                <Formik
                    initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
                    validationSchema={validateRegisterSchema}
                    onSubmit={submitForm}
                    validateOnBlur={true}
                    validateOnChange={true}
                    >

                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

                        <View style={{
                            flex: 1,
                            alignContent: "center",
                            // justifyContent: "center",
                            marginTop: 50,
                        }}>
                            <AppText style={{
                                alignSelf: 'center',
                                fontSize: 30,
                                fontWeight: '500',
                                marginBottom: 20
                            }}>Sign Up</AppText>

                            {error ? <AppText style={{
                                alignSelf: 'center',
                                fontSize: 18,
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: 20
                            }}>{error}</AppText> : <View />}

                            <AppInput
                                placeholder='First Name'
                                onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                                value={values.firstName}
                                error={errors.firstName && touched.firstName ? errors.firstName : ''}
                            />

                            <AppInput
                                placeholder='Last Name'
                                onChangeText={handleChange('lastName')}
                                onBlur={handleBlur('lastName')}
                                value={values.lastName}
                                error={errors.lastName && touched.lastName ? errors.lastName : ''}
                            />

                            <EmailInput
                                placeholder='Email'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                error={errors.email && touched.email ? errors.email : ''}
                            />

                            <PasswordInput
                                placeholder='Password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                error={errors.password && touched.password ? errors.password : ''}
                            />

                            <AppButton
                                label={loading ? <Spinner /> : 'Sign Up'}
                                background={colors.primary}
                                color={colors.white}
                                onPress={handleSubmit}
                            />

                            <View style={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'row', marginVertical: 20
                            }}>

                                <AppText color={colors.black}>Got an account?</AppText>

                                <TouchableOpacity
                                    style={{ marginLeft: 10 }}
                                    onPress={() => navigation.navigate(routes.LOGIN)}>
                                    <AppText color={colors.black}>Login here</AppText>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>

            </View>
        </Screen>
    );
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 15,
    },
    button: {
        flexDirection: "row",
        borderRadius: 25,
        height: 40,
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
    },
});

export default Register;