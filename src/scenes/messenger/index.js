import React from 'react';
import {
  SafeAreaView,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import {AssetImage} from '../../assets';
import ListMessenger from './listMessenger';

const MessengerScreen = ({navigation, number}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Hộp thư',
      headerTitleAlign: 'center',
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('NewMessenger')}>
          <Image style={styles.iconNewMessenger} source={AssetImage.NewMessenger} />
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
      <ListMessenger />
    </SafeAreaView>
  );
};

export default MessengerScreen;
