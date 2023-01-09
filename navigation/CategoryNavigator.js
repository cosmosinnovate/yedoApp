import { View } from 'react-native';
import colors from '../components/colors';
import AppSelectButton from '../components/AppSelectButton';
import fontWeight from '../components/fontWeight'

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
            label='All'>
        </AppSelectButton>
        <View style={{ flex: 1, marginHorizontal: 10 }}>
            <AppSelectButton
                fontWeight={fontWeight.medium}
                color={value==='Family'? colors.white:colors.black}
                onPress={() => onPress('Family')}
                background={value==='Family'? colors.primary:colors.gray}
                label='Family'>
            </AppSelectButton>
        </View>
        <View style={{ flex: 1, marginHorizontal: 10 }}>
            <AppSelectButton
                fontWeight={fontWeight.medium}
                color={value==='Personal'? colors.white:colors.black}
                onPress={() => onPress('Personal')}
                background={value==='Personal'? colors.primary:colors.gray}
                label='Personal'>
            </AppSelectButton>
        </View>
        <AppSelectButton
            fontWeight={fontWeight.medium}
            color={value==='Work'? colors.white:colors.black}
            onPress={() => onPress('Work')}
            background={value==='Work'? colors.primary:colors.gray}
            label='Work'>
        </AppSelectButton>
    </View>
);


export default CategoryNavigator;
