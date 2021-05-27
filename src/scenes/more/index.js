import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import Divider from '../../component/divider';
import ItemNotification from './components/itemNotification';
import ItemNotificationTop from './components/itemNotificationTop';
import ListItem from './components/listItem';
import {styles} from './styles';

let Data = [
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

const MoreScreen = ({navigation}) => {
  const [closeBottom, setCloseBottom] = React.useState(false);
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

        {closeBottom ? (
          <ListNotification data={Data} />
        ) : (
          <ListNotification data={Data[0]} />
        )}

        {closeBottom ? <View /> : <ListBottom onPress={() => setCloseBottom(true)}/>}
      </ScrollView>
    </SafeAreaView>
  );
};

const ListNotification = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={item => {
        return <ItemNotification data={item} />;
      }}
      key={item => item.id}
    />
  );
};

const ListBottom = ({onPress}) => {
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        marginTop: 8,
      }}>
      <View style={{backgroundColor: '#D3D3D3', width: '100%', height: 1}} />
      <TouchableWithoutFeedback onPress={() => onPress()}>
        <Image
          style={{
            height: 28,
            width: 28,
            alignSelf: 'flex-end',
            marginHorizontal: 16,
            marginTop: 8,
          }}
          source={require('../../assets/images/ic_clear.png')}
        />
      </TouchableWithoutFeedback>

      <ListItem />
    </View>
  );
};

export default MoreScreen;
