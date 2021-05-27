import React from 'react';
import {View, Text} from 'react-native';
import ButtonNavigate from '../../../component/button';

const ItemNotification = props => {
  const item = props.data;
  return (
    <ButtonNavigate routeName="NotificationDetail">
      <View style={{marginHorizontal: 16, marginTop: 12, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>
            {item.item.title}
          </Text>
          <Text style={{fontSize: 14, color: '#808080'}}>
            {item.item.content}
          </Text>
          <Text style={{fontSize: 13, color: '#808080'}}>11:00 2/06/2021</Text>
        </View>
      </View>
    </ButtonNavigate>
  );
};

export default ItemNotification;
