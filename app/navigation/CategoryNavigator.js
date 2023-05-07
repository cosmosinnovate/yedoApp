import { View } from 'react-native';
import colors from '../components/colors';
import AppSelectButton from '../components/AppSelectButton';
import fontWeight from '../components/fontWeight'
import { MembersIcon, PersonalIcon, WorkIcon } from '../assets/svgIcons/cliqueIcon';

const CategoryNavigator=({ onPress, value }) => (
    <View style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }}>
        <AppSelectButton
            fontWeight={fontWeight.medium}
            color={value==='All'? colors.white:colors.black}
            onPress={() => onPress('All')}
            background={value==='All'? colors.primary:colors.gray}
            label='All'
        />
        <View style={{ flex: 1, marginHorizontal: 5 }}>
            <AppSelectButton
                fontWeight={fontWeight.medium}
                color={value==='Family'? colors.white:colors.black}
                onPress={() => onPress('Family')}
                background={value==='Family'? colors.primary:colors.gray}
                label='Family'
                size={12}
                // icon={<MembersIcon color={value==='Family'? colors.white:colors.darkGray} />}
            />
        </View>
        <View style={{ flex: 1, marginHorizontal: 5 }}>
            <AppSelectButton
                fontWeight={fontWeight.medium}
                color={value==='Personal'? colors.white:colors.black}
                onPress={() => onPress('Personal')}
                background={value==='Personal'? colors.primary:colors.gray}
                label='Personal'
                size={12}
                // icon={<PersonalIcon color={value==='Personal'? colors.white:colors.darkGray} />}
                />
        </View>

        <AppSelectButton
            fontWeight={fontWeight.medium}
            color={value==='Work'? colors.white:colors.black}
            onPress={() => onPress('Work')}
            background={value==='Work'? colors.primary:colors.gray}
            label='Work'
            size={12}
            // icon={<WorkIcon color={value==='Work'? colors.white:colors.darkGray} />}
        />
    </View>
);


export default CategoryNavigator;
