import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {boxShadow, scaleSize} from '../../styles/mixins';
import {useNavigation} from '@react-navigation/native';
import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph';
import {styles} from './styles';
import { AssetImage } from '../../assets';

let navigation;
const config = {
  hasYAxisBackgroundLines: true,
  yAxisBackgroundLineStyle: {
    strokeWidth: 1,
    color: 'black',
  },
  xAxisLabelStyle: {
    rotation: 0,
    fontSize: 12,
    width: 70,
    yOffset: 4,
    xOffset: -20,
    position: 'right',
  },
  yAxisLabelStyle: {
    rotation: 0,
    fontSize: 13,
    // prefix: '$',
    xOffset: 0,
    // decimals: 2,
    height: 40,
  },
};

const PaymentScreen = ({navigation}) => {
  navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewInfo}>
          <ItemPayment title="Số tiền đã đóng" value="150,000,000đ" />
          <ItemPayment title="Số môn đã đóng" value="15" />
          <ItemPayment title="Số tín chỉ đã đóng" value="50" />
        </View>

        <View style={styles.viewPayment}>
          <ItemPayment title="Số tiền đang đợi đóng HF" value="15,000,000đ" />
          <HorizontalBarGraph
            data={[20, 45, 28, 80]}
            labels={['Jan', 'Feb', 'Mar', 'Apr']}
            width={300}
            height={300}
            barWidthPercentage={0.5}
            baseConfig={config}
            style={styles.chart}
            barColor={'green'}
          />
          <TouchableOpacity
            onPress={() => {
              // go to screen payment
            }}>
            <View style={styles.viewButton}>
              <Text style={styles.textButton}> {'THANH TOÁN'}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={{margin: 20}}>{'Các dịch vụ khác'}</Text>
        <FlatList
          nestedScrollEnabled
          data={Data}
          renderItem={Item}
          key={item => item.id}
          numColumns={4}
          style={{marginTop: 4, marginBottom: 20, marginLeft: 4}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const ItemPayment = props => {
  return (
    <View style={{flexDirection: 'row', margin: 10}}>
      <Text style={{fontSize: 15, textAlign: 'left'}}>{props.title}</Text>
      <Text style={{fontSize: 15, textAlign: 'right', flex: 1, color: 'blue'}}>
        {props.value}
      </Text>
    </View>
  );
};

const Item = ({item}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        // navigation.navigate(item.name)
        console.log(item.id);
      }}>
      <View style={styles.item}>
        <Image style={{height: 40, width: 48}} source={item.src} />
        <Text style={{fontSize: 10, textAlign: 'center', marginTop: 8}}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Data = [
  {id: 1, title: 'Căn teen', src: AssetImage.Course, name: 'Library'},
  {id: 2, title: 'Bảo hiểm', src: AssetImage.Profile, name: 'Payment'},
  {id: 3, title: 'Gửi xe', src: AssetImage.Profile, name: 'Payment'},
  {id: 4, title: 'Cấp giấy tờ', src: AssetImage.Profile, name: 'Chatbot'},
];
export default PaymentScreen;
