import React,
{ useState } from 'react';
import { TouchableOpacity, View, Switch } from 'react-native';
import AppText from '../components/AppText';
import colors from '../components/colors';
import Screen from '../components/Screen';

function SettingView(props) {
    const [notification, setNotification]=useState(false);
    const [verifyWithEmail, setVerifyWithEmail]=useState(false);
    return (
        <View style={{
            flex: 1,
            width: "100%",
            flexDirection: 'column',
            marginTop: 10,
        }}>
            <View style={{
                marginBottom: 10,
                backgroundColor: colors.white,
                padding: 10,
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

            <TouchableOpacity
                style={{
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

    );
}

export default SettingView;