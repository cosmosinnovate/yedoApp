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
import { useDispatch } from 'react-redux'
import { authRegistration } from '../services/api/api.client.auth';
import { storeToken } from '../services/token';



function Register({ navigation }) {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (email) setError("")
    });
    
    async function submitRegister() {
        // Pass this data to CREATE_GROUP
        const paramData = {
            email: email,
            firstName: firstName,
            lastName: lastName
        };
        setLoading(loadingState => !loadingState);
        const { data } = await authRegistration(paramData);
        console.log(data)
        if (data?.data.statusCode === 201) {
            await storeToken(data?.data?.jwToken);
            dispatch(register(data?.data))
            navigation.navigate(routes.CONFIRM_CODE);
        } else {
            setError(data.message);
        }
        // if (email && firstName && lastName) {
        //     navigation.navigate(routes.CREATE_GROUP, { paramData });
        // } else {
        //     setError('Please fill out all fields')
        // }
        setLoading(loadingState => !loadingState);
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
                        onChangeText={(text) => setFirstName(text)}
                        error={error}
                        value={firstName}
                    />

                    <AppInput
                        placeholder='Last Name'
                        onChangeText={(text) => setLastName(text)}
                        value={lastName}
                    />

                    <EmailInput
                        placeholder='Email'
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />



                    <AppButton
                        label={loading ? <Spinner /> : 'Sign Up'}
                        background={colors.primary}
                        color={colors.white}
                        onPress={() => submitRegister()}
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