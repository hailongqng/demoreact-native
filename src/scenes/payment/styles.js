import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  viewInfo: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    shadowOpacity: 5,
    shadowColor: 'gray',
    borderRadius: 15,
    backgroundColor: '#CCFFCC',
    shadowOffset: {width: 0, height: 3},
  },
  viewPayment: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    shadowOpacity: 5,
    shadowColor: 'gray',
    borderRadius: 15,
    backgroundColor: '#FFFFCC',
    shadowOffset: {width: 0, height: 3},
  },
  item: {
    width: width / 4,
    alignItems: 'center',
    paddingVertical: 12,
    paddingRight: 16,
  },
  chart: {
    // marginBottom: 0,
    margin: 10,
    paddingTop: 0,
    borderRadius: 20,
    width: 280,
    backgroundColor: '#FFFFDD',
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    margin: 10,
  },
  viewButton: {
    backgroundColor: '#CC0000',
    borderRadius: 10,
    margin: 15,
    justifyContent: 'center',
    shadowOpacity: 5,
  },
});
