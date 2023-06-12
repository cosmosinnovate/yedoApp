import React,
{ useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import AppText from '../../components/AppText';
import colors from '../../components/colors';
import { AntDesign } from '@expo/vector-icons';
import routes from '../../navigation/routes';
import { ScrollView } from 'react-native-gesture-handler';
import { AuthContext } from '../../services/store/store.context';
import useAuth from '../../hooks/hooks.useAuth';


function Profile({ navigation }) {
    const { user } = useContext(AuthContext);
    const { data } = useAuth(true);
    const key = data ? data.id : null;

    return (
        <ScrollView
            key={key}
            automaticallyAdjustKeyboardInsets={true}
            style={{
                padding: 10,
                flex: 1,
                width: "100%",
                flexDirection: 'column'
            }}>
            <View style={{ marginBottom: 20, alignItems: 'center' }}>
            <TouchableOpacity
                onPress={() => navigation.navigate(routes.EDIT_PROFILE)}
                style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                    paddingTop: 10,
                    paddingBottom: 10,
                    justifyContent: 'space-between',
                    backgroundColor: colors.white
                }}>
                <AppText size={16}><AntDesign name="edit" size={24} color="black"/></AppText>
            </TouchableOpacity>
            </View> 

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                <AppText size={16}>
                    Group
                </AppText>
                <View style={{ flexDirection: 'row' }}>
                    <AppText size={16}>
                        { data?.name ? data?.name : 'No Group Name'} 
                    </AppText>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between',  margin: 10  }}>
                <AppText size={16}>
                    User Name
                </AppText>
                <View style={{ flexDirection: 'row' }}>
                    <AppText size={16}>
                        @{data?.firstName}{data?.lastName}
                    </AppText>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between',  margin: 10  }}>
                <AppText size={16}>
                    First Name
                </AppText>
                <View style={{ flexDirection: 'row' }}>
                    <AppText size={16}>
                        {data?.firstName}
                    </AppText>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between',  margin: 10  }}>
                <AppText size={16}>
                    Last Name
                </AppText>
                <View style={{ flexDirection: 'row' }}>
                    <AppText size={16}>
                        {data?.lastName}
                    </AppText>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between',  margin: 10  }}>
                <AppText size={16}>
                    Email
                </AppText>
                <View style={{ flexDirection: 'row' }}>
                    <AppText size={16}>
                        {data?.email}
                    </AppText>
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between',  margin: 10  }}>
                <AppText size={16}>
                    Phone Number
                </AppText>
                <View style={{ flexDirection: 'row' }}>
                    <AppText size={16}>
                     {data?.phoneNo ? data?.phoneNo : 'No Phone No'}
                    </AppText>
                </View>
            </View>

            <View style={{
                flexDirection: 'column',
                marginBottom: 40,
                backgroundColor: colors.white
            }}>
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate(routes.NOTIFICATION_SETTING)}
                style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderBottomColor: colors.gray,
                    borderEndColor: colors.white,
                    borderLeftColor: colors.white,
                    borderTopColor: colors.gray,
                    borderWidth: 1,
                    justifyContent: 'space-between',
                    backgroundColor: colors.white
                }}>
                <AppText size={16}>Notification Settings</AppText>
                <AntDesign name="arrowright" size={24} color="black" />
            </TouchableOpacity>
        </ScrollView>
    );
}

export default Profile;