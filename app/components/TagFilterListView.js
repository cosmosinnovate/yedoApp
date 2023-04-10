import { FlatList, ScrollView, View } from 'react-native';
import Icons from '../assets/Icons';
import AppText from './AppText';
import colors from './colors';
import ImageIcon from './ImageIcon';
import TagFilterView from './TagFilterView';
import { AntDesign } from '@expo/vector-icons';

export default function TagFilterListView() {
    return (
        <View style={{ flexDirection: 'column', marginVertical: 20 }}>
            <View style={{ flexDirection: 'row', marginBottom: 20, }}>
                <View style={{ marginRight: 10 }}>
                    <ImageIcon source={Icons.filter} />
                </View>
                <AppText>Category Filter</AppText>
            </View>
            <ScrollView style={{flexDirection: 'row'}} horizontal>
                <AntDesign name='left' size={24} color='black' style={{ alignSelf: 'center' }} />
                <FlatList horizontal
                    data={[1, 2, 3, 4, 4, 4]}
                    renderItem={() => 
                    <View>
                        <TagFilterView title='Birthday' />
                    </View>}
                    keyExtractor={item => item.id}
                />

                <AntDesign name='right' size={24} color='black' style={{ alignSelf: 'center' }} />
            </ScrollView>
        </View>
    )
}

