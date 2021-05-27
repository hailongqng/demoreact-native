import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList, Text, View, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {AssetImage} from '../../assets';
import Swipeout from 'react-native-swipeout';
import swipeOutBtn from '../chat/component/swipeOutBtn';
const Data = [
  {
    id: 1,
    name: 'Nguyễn Trần Lý Rảnh Rỗi Tên Dài',
    number: '2',
    avatar: '',
    avatarURL: AssetImage.AvatarURL,
    avatarBase64: '',
    messenger: 'Tin nhắn này chỉ mang tính chất minh họa',
    realTime: '1:00',
  },
  {
    id: 2,
    name: 'Nguyễn Văn A',
    // avatar: AssetImage.Avatar,
    // avatarURL: AssetImage.AvatarURL,
    avatarBase64: AssetImage.AvatarBase64,
    number: '3',
    messenger: 'alo alo',
    realTime: '10:00',
  },
  {
    id: 3,
    name: 'Nguyễn Văn A',
    avatar: AssetImage.Avatar,
    avatarURL: AssetImage.AvatarURL,
    avatarBase64: AssetImage.AvatarBase64,
    number: '4',
    messenger: 'alo alo',
    realTime: '2:00',
  },
  {
    id: 4,
    name: 'Nguyễn Văn A',
    avatar: '',
    avatarURL: '',
    avatarBase64: AssetImage.AvatarBase64,
    number: '5',
    messenger: 'alo alo',
    realTime: '3:00',
  },
  {
    id: 5,
    name: 'Nguyễn Văn A',
    avatar: AssetImage.Avatar,
    avatarURL: AssetImage.AvatarURL,
    avatarBase64: AssetImage.AvatarBase64,
    number: '1',
    messenger: 'alo alo',
    realTime: '4:00',
  },
  {
    id: 6,
    name: 'Nguyễn Văn A',
    // avatar: AssetImage.Avatar,
    avatarURL: AssetImage.AvatarURL,
    avatarBase64: AssetImage.AvatarBase64,
    number: '1',
    messenger: 'alo alo',
    realTime: '23:59',
  },
];
const ListMessenger = () => {
  const navigation = useNavigation();
  return (
    <FlatList
    renderItem={({item}) => {
      return <Item item={item} navigation={navigation} />;
    }}
      key={item => item.id}
      data={Data}
      style={styles.messengerContainer}
    />
  );
};
const Item = ({item,navigation}) => {
  return (
    <Swipeout
      backgroundColor={'white'}
      right={swipeOutBtn}
      autoClose={true}
      close={true}>
      <View style={styles.messengerRow}>
        <View style={styles.avatarContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileChat')}>
            <Image
              style={styles.avatar}
              source={item.avatar || item.avatarURL || item.avatarBase64}
            />
          </TouchableOpacity>

          <Text style={styles.notificationNewMessenger}>{item.number}</Text>
        </View>
        <TouchableOpacity
          style={styles.nameAndTextMessengerContainer}
          onPress={() => navigation.navigate('MessengerContent')}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
            {item.name}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textMessenger}>
            {item.messenger}
          </Text>
        </TouchableOpacity>
        <View style={styles.timeContainer}>
          <Text style={styles.textTime}>{item.realTime}</Text>
        </View>
      </View>
    </Swipeout>
  );
};
export default ListMessenger;
