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
} from 'react-native';
import {scaleSize} from '../../styles/mixins';

const MarketScreen = ({navigation}) => {
  const [dataSource, setDataSource] = useState([]);

  useState(() => {
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return {id: i, src: 'http://placehold.it/200x200?text=' + (i + 1)};
    });
    setDataSource(items);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{}}>
        <View
          style={styles.viewSearch}>
          <TextInput
            style={{paddingLeft: 10, paddingRight: 0, flex: 1}}
            placeholder="Nhap tu khoa de tim kiem"
            maxLength={256}
            // onChangeText={username => setUserName(username)}
          ></TextInput>

          <TouchableOpacity
            style={{padding: 10}}
            onPress={() => {
              // navigation.push('')
            }}>
            <View
              style={{
                backgroundColor: '#CC0000',
                height: 35,
                width: 35,
              }}></View>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: 'gray', height: 50, margin: 10}}></View>
        <Text> {'Ket qua (' + dataSource.length + ')'}</Text>
      </View>

      <FlatList
        key={''}
        data={dataSource}
        renderItem={({item}) => (
          <View style={{flex: 1, flexDirection: 'column', margin: 5}}>
            <Image style={styles.imageThumbnail} source={{uri: item.src}} />
            <Text> {item.id}</Text>
          </View>
        )}
        //Setting the number of column
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  viewSearch: {
    height: 40,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    borderWidth: 0.75,
  }
});
export default MarketScreen;
