import React,
{ useContext,
useState } from 'react';
import { Button, TouchableOpacity, View, StyleSheet, Switch, SectionList } from 'react-native';
import AppText from '../components/AppText';
import AppButton from "../components/AppButton";
import colors from '../components/colors';
import ImageIcon from '../components/ImageIcon';
import icons from "../assets/Icons";
import Screen from '../components/Screen';
import { AntDesign } from '@expo/vector-icons';
import AppInput from '../components/AppInput';
import routes from '../navigation/routes';
import { ScrollView } from 'react-native-gesture-handler';
import LineSeparator from '../components/LineSeparator';
import { AuthContext } from '../services/store/store.context';
import useAuth from '../hooks/useAuth';


function Profile({ navigation }) {
    const { user } = useContext(AuthContext);
    const { data } = useAuth(true);
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('')
    // const [email, setEmail] = useState('')
    // const [phonNumber, setPhoneNumber] = useState('')
    // const [cliqueUsername, setCliqueUsername] = useState('')


    return (
        <ScrollView
            automaticallyAdjustKeyboardInsets={true}
            style={{
                padding: 10,
                flex: 1,
                width: "100%",
                flexDirection: 'column'
            }}>
            {/* <View style={{ marginBottom: 20, alignItems: 'center' }}>
                <ImageIcon source={icons.userImage1} height={100} width={100} />
                <AppText size={16}>
                    Change Image
                </AppText>
            </View>  */}

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                <AppText size={16}>
                    Group
                </AppText>
                <View style={{ flexDirection: 'row' }}>
                    <AppText size={16}>
                        { data?.name ? data?.name : 'No Group Name'} 
                    </AppText>
                    <ImageIcon source={icons.rightArrow} />
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
                    <ImageIcon source={icons.rightArrow} />
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
                    <ImageIcon source={icons.rightArrow} />
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
                    <ImageIcon source={icons.rightArrow} />
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
                    <ImageIcon source={icons.rightArrow} />
                </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between',  margin: 10  }}>
                <AppText size={16}>
                    Phone Number
                </AppText>
                <View style={{ flexDirection: 'row' }}>
                    <AppText size={16}>
                     {user ? data?.phoneNo : 'No Phone No'}
                    </AppText>
                    <ImageIcon source={icons.rightArrow} />
                </View>
            </View>

            <View style={{
                flexDirection: 'column',
                marginBottom: 40,
                backgroundColor: colors.white
            }}>
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate(routes.SETTING)}
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