import React, { Component } from 'react'
import { TouchableHighlight, View } from 'react-native'
import ImageIcon from './ImageIcon'
import AppText from './AppText'
import Icons from '../assets/Icons'
import colors from './colors'

export default function MemberCardView({
    member,
    onPress=() => {},
    padding,
    color='#000' }
) {
    console.log(member.firstName);
    return (
        <TouchableHighlight
            underlayColor={false}
            onPress={() => onPress}>
            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: 2,
                    padding: padding,
                    alignItems: 'center',
                    backgroundColor: colors.white,
                    borderBottomWidth: 1,
                    borderBottomColor: colors.gray,
                    
                }}>
                <ImageIcon source={Icons.userImage1} width={50} height={50} />
                <View style={{ marginLeft: 10 }}>
                    <AppText size={16} weight={'600'} color='#000'>{member.firstName} {''} {member.lastName} {' |'} {member.role}</AppText>
                </View>
            </View>
        </TouchableHighlight>
    )
}
