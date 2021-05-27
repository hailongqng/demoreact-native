import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList, Text, Pressable} from 'react-native';
import {styles} from './styles';
const Data = [
  {
    id: 1,
    nameButton: 'Tất cả',
    navigate:'Search'
  },
  {
    id: 2,
    nameButton: 'Học phí',
    navigate:'Search'
  },
  {
    id: 3,
    nameButton: 'Học Bổng',
    navigate:'Search'
  },
  {
    id: 4,
    nameButton: 'Quy định',
    navigate:'Search'
  },
  {
    id: 5,
    nameButton: 'Nhà trường',
    navigate:'Search'
  },
  {
    id: 6,
    nameButton: 'Tìm người yêu',
    navigate:'Search'
  },
];
const ListButton = () => {
  const navigation = useNavigation();
  return (
    <FlatList
    renderItem={({item}) => {
      return <Item item={item} navigation={navigation} />;
    }}
      showsHorizontalScrollIndicator={false}
      key={item => item.id}
      data={Data}
      horizontal={true}
      style={styles.buttonContainer}
    />
  );
};
const Item = ({item,navigation}) => {
  return (
    <Pressable
      onPress={() => navigation.navigate(item.navigate)}
      style={styles.buttonSearch}>
      <Text style={styles.textButton}>{item.nameButton}</Text>
    </Pressable>
  );
};
export default ListButton;
