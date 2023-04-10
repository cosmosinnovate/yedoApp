import React,
{ useState } from 'react';
import { Button, TouchableOpacity, View, StyleSheet, Switch, SectionList } from 'react-native';
import AppText from '../components/AppText';
import AppButton from "../components/AppButton";
import colors from '../components/colors';
import ImageIcon from '../components/ImageIcon';
import icons from "../assets/Icons";
import Screen from '../components/Screen';
import { AntDesign } from '@expo/vector-icons';
import AppInput from '../components/AppInput';
import route from '../navigation/route';
import { ScrollView } from 'react-native-gesture-handler';
import LineSeparator from '../components/LineSeparator';


function Profile({ navigation }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phonNumber, setPhoneNumber] = useState('')
    const [cliqueUsername, setCliqueUsername] = useState('')

    return (
        <ScrollView
            automaticallyAdjustKeyboardInsets={true}
            style={{
                padding: 10,
                flex: 1,
                width: "100%",
                flexDirection: 'column'
            }}>
            <View style={{ marginBottom: 20, alignItems: 'center' }}>
                <ImageIcon source={icons.userImage1} height={100} width={100} />
                <AppText size={16}>
                    Change Image
                </AppText>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                <AppText size={16}>
                    Group Name
                </AppText>
                <View style={{ flexDirection: 'row' }}>
                    <AppText size={16}>
                        @CosmosHouseHold
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
                        @TabanCosmos
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
                        Taban
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
                        Cosmos
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
                        cosmostaban@gmail.com
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
                    (424) 222 1313
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
                onPress={() => navigation.navigate(route.SETTING)}
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