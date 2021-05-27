import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  admonitionContainer: {
    marginLeft: 20,
    padding: 10,
    marginRight: 20,
  },
  chatBoxContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  chatBox: {
    backgroundColor: '#e5e5e5',
    padding: 10,
    margin: 5,
    borderRadius: 30,
  },
  bottomContainer: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  iconChat: {
    flex: 0.2,
    height: 25,
    width: 25,
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 10,
  },
  chatInputContainer: {
    backgroundColor: '#D3D3D3',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
  textInputBottom: {
    marginLeft: 10,
    width: 150,
  },
  icLaugh: {
    height: 30,
    width: 30,
    margin: 10,
  },
  admonitionText: {
    color: '#808080',
  },
  headerChatbot: {
    flexDirection: 'row',
  },
  iconNewMessenger: {
    marginRight: 15,
    height: 35,
    width: 35,
  },
  fontSizeChatbot: {
    fontSize: 20,
  },
});
