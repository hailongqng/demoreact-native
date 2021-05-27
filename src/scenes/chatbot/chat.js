import React from 'react';
import {styles} from './styles';
import {Text, View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Data = [
  {
    id: 1,
    content: 'Bắt đầu',
    rule: 1,
  },
  {
    id: 2,
    content: 'Hello',
    rule: 2,
  },
  {
    id: 3,
    content: '#hd',
    rule: 2,
  },
  {
    id: 4,
    content: 'Hello',
    rule: 1,
  },
];
const Chat = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      style={styles.chatBoxContainer}
      renderItem={({item}) => {
        return <Item item={item} navigation={navigation} />;
      }}
      key={item => item.id}
      data={Data}
    />
  );
};
const Item = ({item,navigation}) => {
  const isMyMessenger = () => {
    return item.rule === 1;
  };
  return (
    <View
      style={[
        styles.chatBox,
        {
          backgroundColor: isMyMessenger() ? '#e5e5e5' : 'blue',
          marginRight: isMyMessenger() ? 150 : 10,
          marginLeft: isMyMessenger() ? 10 : 150,
          alignItems: isMyMessenger() ? 'flex-start' : 'flex-end',
        },
      ]}>
      <Text
        style={[
          {
            color: isMyMessenger() ? 'black' : 'white',
            marginRight: isMyMessenger() ? 0 : 10,
            marginLeft: isMyMessenger() ? 10 : 0,
          },
        ]}>
        {item.content}
      </Text>
    </View>
  );
};
export default Chat;
