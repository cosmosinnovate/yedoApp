import React,
{ useState } from 'react';
import { Button, TextInput, TouchableOpacity, View, StyleSheet, Switch } from 'react-native';
import AppText from '../components/AppText';
import AppButton from "../components/AppButton";
import colors from '../components/colors';
import ImageIcon from '../components/ImageIcon';
import icons from '../assets/Icons';

function SettingView(props) {
    const [notification, setNotification]=useState(false);
    const [verifyWithEmail, setVerifyWithEmail]=useState(false);
    return (
        <View style={{
            flex: 1,
            width: "100%",
        }}>
            <View style={{ flexDirection: 'column' }}>
                <View style={{
                    marginBottom: 10,
                    backgroundColor: colors.white,
                    padding: 10,
                    borderRadius: 10
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            flexDirection: 'column',
                            flex: 1
                        }}>
                            <AppText size={18}>Notification</AppText>
                        </View>
                        <View style={{ justifyContent: 'flex-end' }}>
                            <Switch value={notification} onValueChange={newValue => setNotification(newValue)}></Switch>
                        </View>
                    </View>
                </View>

                <View style={{
                    marginBottom: 40,
                    backgroundColor: colors.white,
                    padding: 10,
                    borderRadius: 10
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            flexDirection: 'column',
                            flex: 1
                        }}>
                            <AppText size={18}>Verify with email</AppText>
                        </View>
                        <View style={{ justifyContent: 'flex-end' }}>
                            <Switch value={verifyWithEmail} onValueChange={newValue => setVerifyWithEmail(newValue)}></Switch>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: 10,
                    margin: 20,
                    borderRadius: 40,
                    backgroundColor: colors.white
                }}>
                    <AppText>Log out</AppText>
                    {/* <ImageIcon source={icons.plus} /> */}
                </TouchableOpacity>
            </View>
        </View>

    );
}

export default SettingView;