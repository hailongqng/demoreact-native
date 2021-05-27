// Generation of QR Code in React Native
// https://aboutreact.com/generation-of-qr-code-in-react-native/

// import React in our code
import React, {useState, useRef} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Share,
  Dimensions,
} from 'react-native';

import QRCode from 'react-native-qrcode-svg';

const GenerateQRCode = () => {
  const [inputText, setInputText] = useState('');
  const [qrvalue, setQrvalue] = useState('');
  let myQRCode = useRef();

  const shareQRCode = () => {
    myQRCode.toDataURL(dataURL => {
      // console.log(dataURL);
      let shareImageBase64 = {
        title: 'React Native',
        url: `data:image/png;base64,${dataURL}`,
        subject: 'Share Link', //  for email
      };
      Share.share(shareImageBase64).catch(error => console.log(error));
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{'Generation of QR Code'}</Text>
        <QRCode
          getRef={ref => (myQRCode = ref)}
          // ref={myQRCode}
          //QR code value
          value={qrvalue ? qrvalue : 'Campusx'}
          //size of QR Code
          size={250}
          //Color of the QR Code (Optional)
          color = 'black'
          //Background Color of the QR Code (Optional)
          backgroundColor = 'white'
          //Center Logo size  (Optional)
          logoSize = { 30 }
          //Center Logo margin (Optional)
          logoMargin = { 2 }
          //Center Logo radius (Optional)
          logoBorderRadius = { 15 }
          //Center Logo background (Optional)
          logoBackgroundColor = 'yellow'
        />
        <Text style={styles.textStyle}> {'Please insert any value to generate QR code'} </Text>
        <View style={{ width: Dimensions.get('window').width}}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText = { inputText => setInputText(inputText) }
            placeholder = 'Enter Any Value'
            value = {inputText}
          />
        </View>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => setQrvalue(inputText)}>
          <Text style={ styles.buttonTextStyle }>{'Generate QR Code'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={shareQRCode}>
          <Text style={styles.buttonTextStyle}>{'Share QR Code'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default GenerateQRCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textStyle: {
    textAlign: 'center',
    margin: 10,
  },
  textInputStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
    margin: 10,
    borderWidth: 2,
    borderRadius: 20
  },
  buttonStyle: {
    backgroundColor: '#51D8C7',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#51D8C7',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    padding: 5,
    width: '80%'
    // height: 50,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});
