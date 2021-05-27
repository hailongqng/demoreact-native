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

  userContainer: {
    flex: 0.3,
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: 10,
  },

  avatarGroup: {
    flex: 0.3,
    height: 80,
    width: 80,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },

  swipeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    flexDirection: 'column',
  },
  iconRemove: {
    height: 60,
    width: 60,
  },

  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
});
