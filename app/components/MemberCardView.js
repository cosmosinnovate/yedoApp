import React, { Component } from 'react'
import { TouchableHighlight, View } from 'react-native'
import ImageIcon from './ImageIcon'
import AppText from './AppText'
import Icons from '../assets/Icons'
import colors from './colors'
import { Swipeable } from 'react-native-gesture-handler'

export default function MemberCardView({
    member,
    onPress=() => {},
    padding,
    renderRightActions,
    color='#000' }
) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={false}
                onPress={() => onPress}>
                <View
                    style={{
                        flexDirection: 'row',
                        padding: padding,
                        alignItems: 'center',
                        backgroundColor: colors.white,
                    }}>
                    <ImageIcon source={Icons.userImage1} width={50} height={50} />
                    <View style={{ marginLeft: 10 }}>
                        <AppText weight={'600'} color='#000'>{member.firstName} {''} {member.lastName} {' |'} {member.role}</AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}
