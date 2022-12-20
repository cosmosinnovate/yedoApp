import React,
{ useState } from 'react';
import { Button, TextInput, TouchableOpacity, View, StyleSheet, Switch } from 'react-native';
import AppText from '../components/AppText';
import AppButton from "../components/AppButton";
import colors from '../components/colors';
import ImageIcon from '../components/ImageIcon';
import icons from "../assets/Icons";
import Icons from '../assets/Icons';

function ProfileView(props) {
    return (
        <View style={{
            flex: 1,
            width: "100%",
        }}>
            <View style={{ flexDirection: 'column' }}>
                <View style={{

                    flexDirection: 'column',
                    marginBottom: 5,
                    padding: 10,
                    backgroundColor: colors.white
                }}>
                    <AppText>Name</AppText>
                    <TextInput placeholder='Name' />
                </View>


                <View style={{
                    flexDirection: 'column',
                    marginBottom: 5,
                    padding: 10,
                    backgroundColor: colors.white
                }}>
                    <AppText>Email</AppText>
                    <TextInput placeholder='john.doe@gmail.com' />
                </View>

                <View style={{
                    flexDirection: 'column',
                    marginBottom: 40,
                    padding: 10,
                    backgroundColor: colors.white
                }}>
                    <AppText>Phone number</AppText>
                    <TextInput placeholder='(245) 232-2321' />
                </View>

                <TouchableOpacity style={{
                    flexDirection: 'column',
                    marginBottom: 5,
                    padding: 10,
                    backgroundColor: colors.white
                }}>
                    <AppText>Members</AppText>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    flexDirection: 'column',
                    padding: 10,
                    backgroundColor: colors.white
                }}>
                    <AppText>Private Settings</AppText>
                </TouchableOpacity>
            </View>
        </View>

    );
}

export default ProfileView;