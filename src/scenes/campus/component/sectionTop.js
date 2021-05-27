import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { AssetImage } from '../../../assets';
import {styles} from '../styles';

const SectionTop = ({onPress}) => {
  const [skipPay, setSkipPay] = React.useState(false);
  if (skipPay) {
    return <View />;
  } else
    return (
      <View style={styles.note}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.imgWaring} source={AssetImage.ImgWaring} />
          <Text style={styles.title}>{'Lưu ý'}</Text>
        </View>
        <Text style={styles.content}>
          {
            'Bạn đang nợ học phí học kỳ 3. Vui lòng thanh toán trước ngày 2/5/2021 để không ảnh hưởng đến kết quả học tập.'
          }
        </Text>
        <View style={styles.bottomHeader}>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.btnPayment}>{'Thanh toán'}</Text>
          </TouchableOpacity>
          <Text
            style={styles.txtSkip}
            onPress={() => setSkipPay(true)}
            title="Để sau">
            {'Để sau'}
          </Text>
        </View>
      </View>
    );
};

export default SectionTop;
