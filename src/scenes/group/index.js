import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import {AssetImage} from '../../assets';
import ListGroupMessenger from './listMessengerGroup';
import ListProfile from './listProfile';

const GroupScreen = ({navigation, number}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Tạo nhóm',
      headerTitleAlign: 'center',
      headerRight: () => (
        <TouchableOpacity>
          <Text
            style={styles.textContinued}
            onPress={() => navigation.navigate('newGroup')}>
            Tiếp
          </Text>
        </TouchableOpacity>
      ),
    });
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchSection}>
          <TextInput
            style={styles.textSearch}
            placeholder="Nhập tên để tìm kiếm..."
          />
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image style={styles.iconSearch} source={AssetImage.Search} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.messengerContainer}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <ListProfile />
          <ListGroupMessenger />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default GroupScreen;
