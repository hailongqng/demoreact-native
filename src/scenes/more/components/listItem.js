import React from 'react';
import {
  FlatList,
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { AssetImage } from '../../../assets';

const width = Dimensions.get('window').width;
let navigation;

const Data = [
  {
    id: 1,
    title: 'Lịch học',
    src: AssetImage.Library,
    name: 'Library',
  },
  {
    id: 2,
    title: 'Lich thi',
    src: AssetImage.Study,
    name: 'Payment',
  },
  {
    id: 3,
    title: 'Bảng điểm',
    src: AssetImage.Register,
    name: 'Payment',
  },
  {
    id: 4,
    title: 'Chatbot',
    src: AssetImage.Library,
    name: 'Payment',
  },
  {
    id: 5,
    title: 'Thanh toán học phí',
    src: AssetImage.Payment,
    name: 'Payment',
  },
  {
    id: 6,
    title: 'Hố sơ sinh viên',
    src: AssetImage.Service,
    name: 'Payment',
  },
  {
    id: 7,
    title: 'Các chương trình học',
    src: AssetImage.Service,
    name: 'Payment',
  },
  {
    id: 8,
    title: 'Đăng ký học lại',
    src: AssetImage.Library,
    name: 'Payment',
  },
];

const ListItem = () => {
  navigation = useNavigation();
  return (
    <FlatList
      data={Data}
      renderItem={Item}
      key={item => item.id}
      numColumns={4}
      style={{marginTop: 4, marginBottom: 20, marginLeft: 4}}
    />
  );
};

const Item = ({item}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(item.name)}>
      <View style={style.item}>
        <Image style={{height: 40, width: 48}} source={item.src} />
        <Text style={{fontSize: 10, textAlign: 'center', marginTop: 8}}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  item: {
    width: width / 4,
    alignItems: 'center',
    paddingVertical: 12,
    paddingRight: 16,
  },
});

export default ListItem;
