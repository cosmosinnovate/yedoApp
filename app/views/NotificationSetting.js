import React,
{
  useContext,
  useState
} from 'react';
import {TouchableOpacity, View, Switch} from 'react-native';
import AppText from '../components/AppText';
import colors from '../components/colors';
import AppButton from '../components/AppButton';
import {removeToken} from '../redux/token';
import {useDispatch} from 'react-redux';
import {logout, setAuth} from '../redux/authSlice';

function NotificationSetting(props) {
  const [notification, setNotification] = useState(false);
  const [verifyWithEmail, setVerifyWithEmail] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
    removeToken();
  }

  return (
    <View style={{
      flex: 1,
      width: "100%",
      flexDirection: 'column',
      marginTop: 10,
    }}>

      {/* App notification */}
      <View style={{
        marginBottom: 10,
        backgroundColor: colors.white,
        padding: 10,
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <View style={{
            flexDirection: 'column',
            flex: 1
          }}>
            <AppText textAlign='left'>Notification</AppText>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <Switch value={notification} onValueChange={newValue => setNotification(newValue)}></Switch>
          </View>
        </View>

        {/* Email check box */}
        <View style={{
          marginBottom: 40,
          backgroundColor: colors.white,
          marginTop: 10,
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <View style={{
              flexDirection: 'column',
              flex: 1
            }}>
              <AppText textAlign='left'>Email</AppText>
            </View>
            <View style={{justifyContent: 'flex-end'}}>
              <Switch value={verifyWithEmail} onValueChange={newValue => setVerifyWithEmail(newValue)}></Switch>
            </View>
          </View>
        </View>


        <View style={{alignContent: 'center', marginBottom: 10}}>
          <AppButton
            label={'Logout'}
            background={colors.primary}
            width={200} color={colors.white}
            onPress={handleLogout}
          />
        </View>
      </View>

    </View >

  );
}

export default NotificationSetting;