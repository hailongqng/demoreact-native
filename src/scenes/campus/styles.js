import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  note: {
    backgroundColor: '#FFDAB9',
    paddingLeft: 16,
  },
  title: {
    fontSize: 18,
  },
  content: {
    fontSize: 13,
  },
  imgWaring: {
    height: 20,
    width: 20,
  },
  bottomHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    paddingTop: 8,
    paddingRight: 16,
  },
  btnPayment: {
    backgroundColor: '#90EE90',
    padding: 6,
    borderRadius: 4,
    marginBottom: 2,
  },
  txtSkip: {
    textDecorationLine: 'underline',
    color: '#A9A9A9',
    marginLeft: 12,
    marginBottom: 8,
  },

});
