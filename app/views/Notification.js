import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import LineSeparator from '../components/LineSeparator';
import ListItemDelete from '../components/ListItemDelete';
import MemberCardView from '../components/MemberCardView';
import colors from '../components/colors';
import AppText from '../components/AppText';

const data = [
  {
    id: 1,
    firstName: "Bree",
    lastName: "Jules",
    role: "Admin",
    profileUrl: "",
  },
  {
    id: 2,
    firstName: "Taban",
    lastName: "Cosmos",
    role: "Admin",
    profileUrl: "",
  },
  {
    id: 3,
    firstName: "Zuri",
    lastName: "Cosmos",
    role: "Member",
    profileUrl: "",
  },
];

function Notification({navigation}) {
  return (
    <View>
      <AppText></AppText>
      <FlatList
        data={data}
        horizontal={false}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={<LineSeparator />}
        renderItem={({item}) => <MemberCardView
          padding={15}
          member={item}
          renderRightActions={() => <ListItemDelete />}
          onPress={() => {
            // Do something here?
          }} />}
      />
    </View>
  );
}

export default Notification;
