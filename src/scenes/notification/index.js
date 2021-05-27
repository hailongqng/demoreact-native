import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  FlatList
} from 'react-native';
import Divider from '../../component/divider';
import ItemNotification from './components/itemNotification';
import ItemNotificationTop from './components/itemNotificationTop';
import {styles} from './styles';

const Data = [
  {
    id: 1,
    title: 'Tổ chức văn nghệ',
    content: 'Hiện trường đang tổ chức văn nghệ mừng ngày thành lập',
  },
  {
    id: 2,
    title: 'Tổ chức văn nghệ',
    content: 'Hiện trường đang tổ chức văn nghệ mừng ngày thành lập',
  },
  {
    id: 3,
    title: 'Tổ chức văn nghệ',
    content: 'Hiện trường đang tổ chức văn nghệ mừng ngày thành lập',
  },
  {
    id: 4,
    title: 'Tổ chức văn nghệ',
    content: 'Hiện trường đang tổ chức văn nghệ mừng ngày thành lập',
  },
  {
    id: 5,
    title: 'Tổ chức văn nghệ',
    content: 'Hiện trường đang tổ chức văn nghệ mừng ngày thành lập',
  },
  {
    id: 6,
    title: 'Tổ chức văn nghệ',
    content: 'Hiện trường đang tổ chức văn nghệ mừng ngày thành lập',
  },
];

const NotificationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ItemNotificationTop
          label="VL"
          title="Trường"
          content="Thông báo cách đây 1d"
        />
        <Divider />
        <ItemNotificationTop
          label="K"
          title="Khoa CNTT"
          content="Thông báo cách đây 2d"
        />
        <Divider />
        <ItemNotificationTop
          label="H"
          title="Hoạt động"
          content="Thông báo cách đây 3d"
        />
        <View style={styles.sectionNoti}>
          <Text>Thông báo mới</Text>
          <Text style={{color: 'red'}}>Hiện có (100)</Text>
        </View>
        <FlatList
          data={Data}
          renderItem={item => {
            return (
              <ItemNotification data={item} />
            );
          }}
          key={item => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;
