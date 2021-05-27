import React from 'react';
import {styles} from './styles';
import {Text, View} from 'react-native';
const HeaderChat = () => {
  return (
    <View style={styles.admonitionContainer}>
      <Text style={styles.admonitionText}>
        Cảm ơn bạn đã kết nối với bộ phận chăm sóc khách hàng, để bắt đầu soạn
        #hd, và làm theo hướng dẫn để đặt câu hỏi
      </Text>
    </View>
  );
};
export default HeaderChat;
