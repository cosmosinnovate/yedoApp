import React,
{ useState } from 'react';
import { Button, TextInput, TouchableOpacity, View, StyleSheet, Switch } from 'react-native';
import AppText from '../components/AppText';
import AppButton from "../components/AppButton";
import colors from '../components/colors';
import ImageIcon from '../components/ImageIcon';
import icons from '../assets/Icons';

function MemberView(props) {
    return (
        <View style={{
            flex: 1,
            width: "100%",
        }}>
            <View style={{ flexDirection: 'column' }}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    marginBottom: 5,
                    alignItems: 'center',
                    padding: 10,
                    backgroundColor: colors.white
                }}>
                    <View style={{ marginRight: 10 }}>
                        <ImageIcon source={icons.userImage1} width={50} height={50} />
                    </View>
                    <AppText>Taban Cosmos | Admin</AppText>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    flexDirection: 'row',
                    marginBottom: 5,
                    alignItems: 'center',
                    padding: 10,
                    backgroundColor: colors.white
                }}>
                    <View style={{ marginRight: 10 }}>
                        <ImageIcon source={icons.userImage1} width={50} height={50} />
                    </View>
                    <AppText>Taban Cosmos | Member</AppText>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    flexDirection: 'row',
                    marginBottom: 5,
                    alignItems: 'center',
                    padding: 10,
                    backgroundColor: colors.white
                }}>
                    <View style={{ marginRight: 10 }}>
                        <ImageIcon source={icons.userImage1} width={50} height={50} />
                    </View>
                    <AppText>Taban Cosmos | Member</AppText>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    flexDirection: 'row',
                    marginBottom: 5,
                    alignItems: 'center',
                    padding: 10,
                    backgroundColor: colors.white
                }}>
                    <View style={{ marginRight: 10 }}>
                        <ImageIcon source={icons.userImage1} width={50} height={50} />
                    </View>
                    <AppText>Taban Cosmos | Member</AppText>
                </TouchableOpacity>


                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: 10,
                    margin: 20,
                    borderRadius: 40,
                    backgroundColor: colors.white
                }}>
                    <AppText>Invite Family</AppText>
                    <ImageIcon source={icons.plus} />
                </TouchableOpacity>
            </View>
        </View>

    );
}

export default MemberView;
