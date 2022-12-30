import React, { useState } from 'react';
import { Button, TextInput, TouchableOpacity, View, StyleSheet, Switch } from 'react-native';
import AppText from '../components/AppText';
import AppButton from "../components/AppButton";
import colors from '../components/colors';
import ImageIcon from '../components/ImageIcon';
import icons from "../assets/Icons";
import Icons from '../assets/Icons';
import Screen from '../components/Screen';


function CreateTaskView({}) {
    const [isRepeat, setIsRepeat]=useState(false);
    const [addToCalendar, setAddToCalendar]=useState(false);
    const [addTime, setAddTime]=useState(false);

    const [isVisible, setIsVisible]=useState(false);
    const [time, setTime]=useState(new Date());

    const showTimePicker=() => {
        setIsVisible(true);
    };

    const hideTimePicker=() => {
        setIsVisible(false);
    };

    const handleConfirm=time => {
        setTime(time);
        hideTimePicker();
    };


    return (
        <Screen>
            <View style={{
                flex: 1,
                width: "100%",
            }}>
                {/* Nav bar */}
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    paddingHorizontal: 20,
                    alignContent: "center"

                }}>
                    <TouchableOpacity>
                        <AppText weight='500' mV={10} size="18" color={colors.black}>Cancel</AppText>
                    </TouchableOpacity>
                    <AppText weight='500' mV={10} size="18">Details</AppText>
                    <TouchableOpacity>
                        <AppText weight='500' mV={10} size="18" color={colors.black}>Done</AppText>
                    </TouchableOpacity>
                </View>

                {/* Content */}
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', padding: 20 }}>
                    {/* Text area */}
                    <TextInput placeholder='What you planning to do?' multiline
                        style={{
                            backgroundColor: '#FFF',
                            paddingTop: 10, paddingHorizontal: 10,
                            paddingBottom: 10,
                            borderRadius: 10,
                            fontSize: 12,
                            minHeight: 100
                        }} />
                    <View style={{ marginVertical: 10 }}>
                        <AppText size={14}>Add Tags</AppText>
                        <TextInput placeholder='#mytag' style={{
                            backgroundColor: '#FFF',
                            padding: 10,
                            marginTop: 10,
                            borderRadius: 10,
                            color: colors.black
                        }} />
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <AppText size={14}>Add Category</AppText>
                        <TextInput placeholder='#mytag' style={{
                            backgroundColor: '#FFF',
                            padding: 10,
                            marginTop: 10,
                            borderRadius: 10,
                            color: colors.black
                        }} />
                    </View>

                    <View style={{
                        marginVertical: 10,
                        backgroundColor: colors.white,
                        padding: 10,
                        borderRadius: 10
                    }}>
                        {/* Date */}
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 10
                        }}>
                            <View style={{ flexDirection: 'column' }}>
                                <ImageIcon source={Icons.calendar} />
                            </View>
                            <View style={{
                                flexDirection: 'column',
                                marginLeft: 10,
                                flex: 1
                            }}>
                                <AppText size={14} color={colors.primary}>Date</AppText>
                                <AppText size={14} color={colors.black}>Friday,
                                    June 4,
                                    2020</AppText>
                            </View>
                            <View style={{ justifyContent: 'flex-end' }}>
                                <Switch value={addToCalendar} onValueChange={newValue => setAddToCalendar(newValue)}></Switch>
                            </View>
                        </View>

                        {/* Time */}
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <View style={{ flexDirection: 'column' }}>
                                <ImageIcon source={Icons.time} />
                            </View>
                            <View style={{
                                flexDirection: 'column',
                                marginLeft: 10,
                                flex: 1
                            }}>
                                <AppText size={14} color={colors.primary}>Time</AppText>
                                <AppText size={14} color={colors.black}>2:00 PM</AppText>
                            </View>
                            <View style={{ justifyContent: 'flex-end' }}>
                                <Switch value={addTime} onValueChange={newValue => setAddTime(newValue)}></Switch>
                            </View>
                        </View>
                    </View>
                    {/* <View>
                        <Button title="Select Time" onPress={showTimePicker} />
                        <Date
                            isVisible={isVisible}
                            mode="time"
                            date={time}
                            onConfirm={handleConfirm}
                            onCancel={hideTimePicker}
                        />
                    </View> */}

                </View>
            </View>
        </Screen>
    );
}

export default CreateTaskView;



