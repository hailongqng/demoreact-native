import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { AssetImage } from '../../../assets';

const SectionBottom = () => {
  return (
    <View style={style.container}>
      <Item color="#6495ED" ic={AssetImage.Hub} label="HUB" name="Hub" />
      <Item
        color="#ADFF2F"
        ic={AssetImage.Traning}
        label="Đào tạo"
        name="Traning"
      />
      <Item
        color="#FFE4B5"
        ic={AssetImage.LearnOnline}
        label="Học trực tuyến"
        name="LearnOnline"
      />
    </View>
  );
};

const Item = ({color, ic, label, name}) => {
  const width = Dimensions.get('window').width / 3 - 32;
  const navigation = useNavigation();
  return (
    <TouchableNativeFeedback
      onPress={() => navigation.navigate(name)}
      disabled={true}>
      <View style={{width: width, height: 120}}>
        <View
          style={{
            backgroundColor: color,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image style={{height: 60, width: 60}} source={ic} />
        </View>
        <Text style={{fontSize: 14, textAlign: 'center', marginTop: 4}}>
          {label}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 120,
    margin: 16,
    justifyContent: 'space-between',
  },
});

export default SectionBottom;
