import React from 'react';
import {SafeAreaView, Image, StatusBar} from 'react-native';
import IvNotication from '../../component/notification';
import SectionBottom from './component/sectionBottom';
import ListItem from './component/listItem';
import NewsEvent from './component/newsEvent';
import SectionTop from './component/sectionTop';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import {AssetImage} from '../../assets/index';

const CampusScreen = ({navigation}) => {
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Điểm danh',
      headerTitleAlign: 'center',
      headerLeft: () => (
        <Image
          style={{height: 24, width: 24, marginLeft: 16}}
          source={AssetImage.ImgQrCode}
        />
      ),
      headerRight: () => (
        <IvNotication
          number={2}
          onPress={() => {
            navigation.push('NotificationStack');
          }}
        />
      ),
    });
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="#fff"  barStyle ='dark-content' />
        <SectionTop
          onPress={() => {
            navigation.navigate('Payment');
          }}
        />
        <ListItem />
        <NewsEvent
          onPress={() => {
            navigation.navigate('NewEvent');
          }}
        />
        <SectionBottom />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CampusScreen;
