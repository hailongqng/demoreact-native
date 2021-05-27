import React from 'react';
import {styles} from './styles';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Accordions from './accordion';
import {AssetImage} from '../../assets';
import ListButton from './listButton';
const HelpScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainerHelp}>
        <View style={styles.searchSection}>
          <TextInput
            style={styles.textSearch}
            placeholder="Nhập từ khóa để tìm kiếm..."
          />
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image style={styles.iconSearch} source={AssetImage.Search} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <ListButton />
        <View style={styles.textResult}>
          <Text style={styles.textName}> Kết quả: (#)</Text>
        </View>
        <Accordions />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpScreen;
