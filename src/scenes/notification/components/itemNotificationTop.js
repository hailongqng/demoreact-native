import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from '../styles';
import ButtonNavigate from '../../../component/button';
import { AssetImage } from '../../../assets';

const ItemNotificationTop = props => {
  return (
    <ButtonNavigate routeName="NotificationDetail">
      <View style={{flexDirection: 'row', marginHorizontal: 16}}>
        <View style={styles.bgNoti}>
          <Text style={styles.labelNoti}>{props.label}</Text>
        </View>
        <View style={{flex: 1, marginLeft: 20}}>
          <Text style={styles.titleNoti}>{props.title}</Text>
          <Text style={styles.contentNoti}>{props.content}</Text>
        </View>
        <Image style={styles.imgArrowRight} source={AssetImage.ArrowRight} />
      </View>
    </ButtonNavigate>
  );
};

export default ItemNotificationTop;
