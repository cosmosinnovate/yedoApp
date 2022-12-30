import { Button, View } from 'react-native';
import MemberView from '../views/MemberView';
import SignupView from '../views/SignupView';
import SettingView from "../views/SettingView";
import { createStackNavigator } from '@react-navigation/stack';
import ProfileView from '../views/ProfileView';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppText from '../components/AppText';
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
            color={value==='Todo'? colors.white:colors.black}
            onPress={() => onPress('Todo')}
            background={value==='Todo'? colors.primary:colors.gray}
            label='To do'>
        </AppSelectButton>
        <View style={{ flex: 1, marginHorizontal: 10 }}>
            <AppSelectButton
                fontWeight={fontWeight.medium}
                color={value==='Completed'? colors.white:colors.black}
                onPress={() => onPress('Completed')}
                background={value==='Completed'? colors.primary:colors.gray}
                label='Completed'>
            </AppSelectButton>
        </View>
        <AppSelectButton
            fontWeight={fontWeight.medium}
            color={value==='Continuous'? colors.white:colors.black}
            onPress={() => onPress('Continuous')}
            background={value==='Continuous'? colors.primary:colors.gray}
            label='Continuous'>
        </AppSelectButton>
    </View>
);


export default CategoryNavigator;
