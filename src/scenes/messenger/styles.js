import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  searchContainer: {
    height: 50,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  textSearch: {
    flex: 1,
    marginLeft: 20,
  },
  iconNewMessenger: {
    marginRight: 15,
    height: 35,
    width: 35,
  },
  iconSearch: {
    margin: 10,
    height: 30,
    width: 30,
  },
  messengerContainer: {
    flex: 1,
    margin: 10,
  },
  messengerRow: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
  },
  avatarContainer: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 70,
    width: 70,
    margin: 10,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#BC8F8F',
  },
  notificationNewMessenger: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
    position: 'absolute',
    right: 4,
    top: 1,
    color: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: '#FF6347',
  },
  nameAndTextMessengerContainer: {
    marginLeft: 10,
    flex: 0.75,
  },
  name: {
    flex: 0.4,
    textAlignVertical: 'center',
    marginLeft: 5,
    fontSize: 18,
  },
  textMessenger: {
    flex: 0.4,
    marginLeft: 5,
    fontSize: 13,
    color: '#696969',
  },
  timeContainer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTime: {
    fontSize: 12,
    color: '#A9A9A9',
  },
});
