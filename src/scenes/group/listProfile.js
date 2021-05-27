import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import {AssetImage} from '../../assets';
const Data = [
  {
    id: 1,
    name: 'Trần Hoàng Hải Long',
    avatar: AssetImage.Avatar,
    avatarURL: '',
    avatarBase64: '',
  },
  {
    id: 2,
    name: 'Tên Dài Quá Nên Hiện Không Hết',
    avatar: '',
    avatarURL: AssetImage.AvatarURL,
    avatarBase64: '',
  },
  {
    id: 3,
    name: 'Nguyễn Văn C',
    avatar: '',
    avatarURL: '',
    avatarBase64: AssetImage.AvatarBase64,
  },
  {
    id: 4,
    name: 'Nguyễn Văn D',
    avatar: AssetImage.Avatar,
  },
  {
    id: 5,
    name: 'Nguyễn Văn E',
    avatar: AssetImage.Avatar,
  },
];
const ListProfile = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return <Item item={item} navigation={navigation} />;
      }}
      key={item => item.id}
      data={Data}
      style={styles.userContainer}
    />
  );
};
const Item = ({item,navigation}) => {
  return (
    <TouchableOpacity
      style={styles.infoUserContainer}
      onPress={() => navigation.navigate('ProfileChat')}>
      <Image
        style={styles.avatarUser}
        source={item.avatar || item.avatarURL || item.avatarBase64}
      />
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textName}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};
export default ListProfile;
