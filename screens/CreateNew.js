import React, { useEffect, useState } from 'react';
import { Button, TextInput, TouchableOpacity, View, StyleSheet, Switch, Modal } from 'react-native';
import AppText from '../components/AppText';
import AppButton from "../components/AppButton";
import colors from '../components/colors';
import ImageIcon from '../components/ImageIcon';
import icons from '../assets/Icons';
import Screen from '../components/Screen';
import MemberCardView from '../components/MemberCardView'
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import AppInput from '../components/AppInput';
import AppInputArea from '../components/AppInputArea';
import route from '../navigation/route';

import font from '../components/fontWeight';


function CreateNew({ navigation }) {
    const [title, setTitle]=useState('');
    const [endDate, setEndDate]=useState('');
    const [endTime, setEndTime]=useState('');
    const [category, setCategory]=useState('');
    const [startDate, setStartDate]=useState('');
    const [startTime, setStartTime]=useState('');
    const [timeToggle, setTimeToggle]=useState(false);
    const [dateToggle, setDateToggle]=useState(false);
    const [description, setDescription]=useState('');


    useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    style={styles.close}
                    onPress={() => navigation.navigate(route.HOME)}>
                    <AntDesign name='close' size={26} />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <AppButton
                    disabled={title ? false: true}
                    color={colors.white}
                    background={colors.primary}
                    width={80} label='Create' />
            ),
        });
    }, [navigation, title]);

    return (
        <ScrollView 
            horizontal={false}
            contentContainerStyle={styles.content}
            style={{ backgroundColor: colors.white }}>
            <AppInput
                label={'Title'}
                placeholder='What is on your mind?'
                onChangeText={(text) => setTitle(text)}
                value={title}
            />
            <AppInputArea
                label={'Description'}
                placeholder='Add more description'
                onChangeText={(text) => setDescription(text)}
                value={description}
            />
            <AppInput
                label={'Category'}
                placeholder='Add category eg. Food, fish'
                onChangeText={(text) => setCategory(text)}
                value={category}
            />

            {/* Date */}
            <View style={{
                marginBottom: 10,
                backgroundColor: colors.white,
                marginTop: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <View style={{
                        flexDirection: 'column',
                        flex: 1
                    }}>
                        <AppText size={16}>Add start date and end date</AppText>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <Switch value={dateToggle} onValueChange={newValue => setDateToggle(newValue)}></Switch>
                    </View>
                </View>
            </View>
            <AppInput
                label={'Start date'}
                placeholder='Jan 1, 2023'
                onChangeText={(text) => setStartDate(text)}
                value={startDate}
            />
            <AppInput
                label={'End date'}
                placeholder='Jan 1, 2023'
                onChangeText={(text) => setEndDate(text)}
                value={endDate}
            />

            {/* Time */}
            <View style={{
                marginBottom: 10,
                backgroundColor: colors.white,
                marginTop: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <View style={{
                        flexDirection: 'column',
                        flex: 1
                    }}>
                        <AppText size={16}>Add start time and end time</AppText>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <Switch value={timeToggle} onValueChange={newValue => setTimeToggle(newValue)}></Switch>
                    </View>
                </View>
            </View>
            <AppInput
                label={'Start time'}
                placeholder='10:20 AM'
                onChangeText={(text) => setStartTime(text)}
                value={startTime}
            />
            <View style={{ paddingBottom: 100 }}>
                <AppInput
                    label={'End time'}
                    placeholder='12:20 PM'
                    onChangeText={(text) => setEndTime(text)}
                    value={endTime}
                />
            </View>
                        <View style={{ paddingBottom: 100 }}>
                <AppInput
                    label={'End time'}
                    placeholder='12:20 PM'
                    onChangeText={(text) => setEndTime(text)}
                    value={endTime}
                />
            </View>
                        <View style={{ paddingBottom: 100 }}>
                <AppInput
                    label={'End time'}
                    placeholder='12:20 PM'
                    onChangeText={(text) => setEndTime(text)}
                    value={endTime}
                />
            </View>
        </ScrollView>
    );
}



const styles=StyleSheet.create({
    content: {
        padding: 20,
        flex: 1,
        width: '100%',
    },
    topBar: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
});

export default CreateNew;



