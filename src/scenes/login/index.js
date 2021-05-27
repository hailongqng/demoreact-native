import React from 'react';
import { SafeAreaView, Text, TouchableHighlight, View, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { scaleSize } from '../../styles/mixins';

const LoginScreen = ({ navigation }) => (
  <SafeAreaView style={{ backgroundColor: 'gray', flex: 1,}}>
    {/* <ScrollView> */}
      <Image
        style={styles.imageBackground}
        source={{ uri: 'https://dean1665.vn/uploads/school/van-lang.jpg' }}
      />
      <View style={{ backgroundColor: 'gray', flex: 1}}>

        <View style={{ flexDirection: 'column', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ height: 50, paddingTop: 10, color: 'white', fontSize: 24, fontWeight: '700' }}>{'Đại học Văn Lang'}</Text>
          <Text style={{ height: 50, color: 'white', fontStyle: 'italic' }}>{'Đạo đức - Ý chí - Sáng tạo'}</Text>

        </View>

        <TouchableOpacity style={{ padding: 20 }}
          onPress={() => {
            navigation.navigate('SignInScreen')
          }}>
          <View style={{ backgroundColor: '#3366CC', borderRadius: 10, padding: 15, flexDirection: 'row', justifyContent: 'center', shadowOpacity: 5 }}>
            <Text style={{ paddingLeft: 20, paddingRight: 20, color: 'white', fontSize: 18, fontWeight: '600' }} numberOfLines={2} ellipsizeMode='tail'>{'ĐĂNG NHẬP VỚI TÀI KHOẢN'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 20 }}
          onPress={() => {
            navigation.navigate('QRCode')
          }}>
          <View style={{ backgroundColor: '#CC0000', borderRadius: 10, padding: 15, flexDirection: 'row', justifyContent: 'center', shadowOpacity: 5 }}>
            <Text style={{ paddingLeft: 20, paddingRight: 20, color: 'white', fontSize: 18, fontWeight: '600' }} numberOfLines={2} ellipsizeMode='tail'>{'ĐĂNG NHẬP VỚI OFFICE 365'}</Text>
          </View>
        </TouchableOpacity>

      </View>

      <View style={{ backgroundColor: 'gray', paddingBottom: 0, paddingLeft: 20, paddingRight: 20, height: 60, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', padding: 0, color: 'white' }}>{'Copyright @2020 by PSC \n Free Edition'}</Text>
      </View>

    {/* </ScrollView> */}

  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  imageBackground: {
    resizeMode: 'stretch',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
  },
});

export default LoginScreen;



