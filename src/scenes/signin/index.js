import React, {useState} from 'react';
import { SafeAreaView, Text, TouchableHighlight, View, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { scaleSize } from '../../styles/mixins';

// const [username, setUserName, password, setPassword] = useState('');

const SignInScreen = ({ navigation }) => (
  
  <SafeAreaView style={{flex: 1}}>
    <ScrollView>
      <Image
        style={styles.imageBackground}
        source={{ uri: 'https://dean1665.vn/uploads/school/van-lang.jpg' }}
      />
      <View style={{ height: '75%' }}>

        <View style={{ flexDirection: 'column', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ height: 50, paddingTop: 10, color: 'black', fontSize: 24, fontWeight: '700' }}>{'Đại học Văn Lang'}</Text>
          <Text style={{ height: 50, color: 'black', fontStyle: 'italic' }}>{'Đạo đức - Ý chí - Sáng tạo'}</Text>

        </View>

        <View style={{ flexDirection: 'column', alignContent: 'center', justifyContent: 'center', alignItems: 'center', flex: 1, }}>
          <TextInput style={{height: 50, paddingLeft: 10, paddingRight: 10, width: '80%', borderRadius: 10, borderWidth: 0.75}}
          placeholder='Tên đăng nhập' 
          maxLength={20}
          // onChangeText={username => setUserName(username)}
          ></TextInput>
        </View>

         <View style={{ flexDirection: 'column', alignContent: 'center', justifyContent: 'center', alignItems: 'center', flex: 1, }}>
          <TextInput style={{height: 50, paddingLeft: 10, paddingRight: 10, width: '80%', borderRadius: 10, borderWidth: 0.75}} 
          placeholder='Mật khẩu' maxLength={20}
          // onChangeText={password => setPassword(password)}
          ></TextInput>
        </View>

        <TouchableOpacity style={{ padding: 20 }}
          onPress={() => {
            navigation.navigate('App')
          }}>
          <View style={{ backgroundColor: '#3366CC', borderRadius: 10, padding: 15, flexDirection: 'row', justifyContent: 'center', shadowOpacity: 2 }}>
            <Text style={{ paddingLeft: 20, paddingRight: 20, color: 'white', fontSize: 18, fontWeight: '600' }} numberOfLines={2} ellipsizeMode='tail'>{'ĐĂNG NHẬP'}</Text>
          </View>
        </TouchableOpacity>

        

      </View>
    </ScrollView>

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

export default SignInScreen;



