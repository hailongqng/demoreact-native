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
    title: 'Thư viện',
    src: AssetImage.Library,
    name: 'Library',
  },
  {
    id: 2,
    title: 'Hồ sơ học tập',
    src: AssetImage.Study,
    name: 'Payment',
  },
  {
    id: 3,
    title: 'Đăng ký môn học',
    src: AssetImage.Register,
    name: 'Payment',
  },
  {
    id: 4,
    title: 'Tình trạng học tập',
    src: AssetImage.Status,
    name: 'Payment',
  },
  {
    id: 5,
    title: 'Nộp học phí',
    src: AssetImage.Payment,
    name: 'Payment',
  },
  {
    id: 6,
    title: 'Dịch vụ việc làm',
    src: AssetImage.Service,
    name: 'Payment',
  },
  {
    id: 7,
    title: 'Đăng ký môn học',
    src: AssetImage.Service,
    name: 'Payment',
  },
  {
    id: 8,
    title: 'Khảo sát',
    src: AssetImage.Survey,
    name: 'Payment',
  },
];

const ListItem = () => {
  navigation = useNavigation();
  return (
    <FlatList
      nestedScrollEnabled
      data={Data}
      renderItem={Item}
      key={item => item.id}
      numColumns={4}
      style={{marginTop: 24, marginBottom: 20}}
    />
  );
};

const Item = ({item}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(item.name)}>
      <View style={style.item}>
        <Image style={{height: 40, width: 48}} source={item.src} />
        <Text style={{fontSize: 10}}>{item.title}</Text>
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
