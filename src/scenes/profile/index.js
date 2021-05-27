import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import TxtAddress from './components/txtAddress';
import TxtBirthDay from './components/txtBirthday';
import TxtLabel from './components/txtLabel';
import TxtParent from './components/txtParents';
import TxtStudentPhone from './components/txtPhone';
import TxtPhoneParent from './components/txtPhoneParent';

const ProfileScreen = ({navigation}) => {
  const [birthDay, setBirthDay] = useState('');
  const [title, setTitle] = useState('Hồ sơ sinh viên');
  const [address, setAddress] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [parent, setParent] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [update, setUpdate] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerTitleAlign: 'center',
    });
  });

  return (
    <SafeAreaView
      style={{backgroundColor: '#fff', flex: 1, paddingHorizontal: 16}}>
      {update ? (
        <TouchableWithoutFeedback
          onPress={() => {
            //TODO Hander api update proffile
          }}>
          <Text style={style.txtUpdate}>Lưu</Text>
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback
          onPress={() => {
            setUpdate(true);
            setTitle('Cập nhật thông tin')
          }}>
          <Image
            style={{height: 24, width: 24, alignSelf: 'flex-end'}}
            source={require('../../assets/images/ic_edit.png')}
          />
        </TouchableWithoutFeedback>
      )}

      <KeyboardAvoidingView contentContainerStyle={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={style.card}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{height: 58, width: 48, marginRight: 8, marginLeft: 4}}
                source={{
                  uri: 'https://vhub.vanlanguni.edu.vn/images/logoVLU.png',
                }}
              />
              <View
                style={{justifyContent: 'center', flex: 1, marginRight: 26}}>
                <Text style={{fontSize: 14, fontWeight: '800'}}>
                  TRƯỜNG ĐẠI HỌC VĂN LANG
                </Text>
                <View
                  style={{width: '100%', height: 1, backgroundColor: '#000'}}
                />
                <Text style={{fontSize: 16}}>Đạo đức - Ý chí - Sáng tạo</Text>
              </View>
            </View>
            <Text style={style.titleCard}>{'THẺ SINH VIÊN'}</Text>
            <Text style={style.labelStudent}>{'NGÀNH HỌC NGÔN NỮ ANH'}</Text>
            <Image
              style={style.imgStudent}
              source={{
                uri:
                  'https://znews-photo.zadn.vn/w660/Uploaded/zbvunua/2020_08_10/bia2.jpg',
              }}
            />
            <Text style={[style.labelStudent, {color: 'red'}]}>
              {'NGUYỄN THỊ A'}
            </Text>
            <Text style={style.labelStudent}>{'KHÓA HỌC: 2015-2019'}</Text>
            <Text style={style.labelStudent}>{'MSSS: 123VL32992'}</Text>
          </View>
          {update ? (
            <TxtDetail title="Cập nhật Thông tin chi tiết" />
          ) : (
            <TxtDetail title="Thông tin chi tiết" />
          )}
          {update ? (
            <UpdateStudent
              setBirthDay={setBirthDay}
              setAddress={setAddress}
              setStudentPhone={setStudentPhone}
              setParent={setParent}
              setParentPhone={setParentPhone}
            />
          ) : (
            <StudentDetail />
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const TxtDetail = ({title}) => {
  return <Text style={style.titleDetail}>{title}</Text>;
};

const UpdateStudent = ({
  setBirthDay,
  setAddress,
  setStudentPhone,
  setParent,
  setParentPhone,
}) => {
  return (
    <View>
      <TxtBirthDay onChange={text => setBirthDay(text)} />
      <TxtAddress onChange={text => setAddress(text)} />
      <TxtStudentPhone onChange={text => setStudentPhone(text)} />
      <TxtParent onChange={text => setParent(text)} />
      <TxtPhoneParent onChange={text => setPhoneParent(text)} />
    </View>
  );
};

const StudentDetail = () => {
  return (
    <View>
      <TxtLabel label="Ngày sinh:" value="1/2/2020" />
      <TxtLabel label="Quê quán:" value="123, Định Quán, Đồng Nai" />
      <TxtLabel label="Điện thoại:" value="098456789" />
      <TxtLabel
        label="Người bảo lãnh(liên lạc khi cần):"
        value="Nguyễn Văn A"
      />
      <TxtLabel
        label="Điện thoại người bảo lãnh:"
        value="098456789"
        marginBottom={50}
      />
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center',
    borderRadius: 20,
    elevation: 2,
    marginTop: 16,
    paddingTop: 20,
    paddingBottom: 12,
  },
  titleDetail: {
    textDecorationLine: 'underline',
    fontSize: 18,
    marginTop: 24,
  },
  labelStudent: {
    fontSize: 15,
    color: '#000',
    marginTop: 4,
    alignSelf: 'center',
  },
  imgStudent: {
    height: 230,
    width: 175,
    marginVertical: 4,
    alignSelf: 'center',
  },
  titleCard: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 20,
    alignSelf: 'center',
  },
  txtUpdate: {
    alignSelf: 'flex-end',
    textDecorationLine: 'underline',
    color: 'blue',
    fontSize: 16,
  },
});

export default ProfileScreen;
