import {StyleSheet} from 'react-native';
import {Colors} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  header: {
    backgroundColor: '#00CC00',
    padding: 5,
    borderWidth: 0.5,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 5,
  },
  active: {
    backgroundColor: '#C6E2FF',
  },
  inactive: {
    backgroundColor: '#FDF5E6',
  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
    marginLeft: 15,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  helpContainer: {
    flex: 1,
  },
  searchContainerHelp: {
    flex: 0.1,
    marginRight: 15,
    marginLeft: 15,
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
  iconSearch: {
    margin: 10,
    height: 30,
    width: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
  },
  buttonSearch: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
    marginLeft: 10,
    marginRight: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    borderWidth: 0.5,
    elevation: 3,
    backgroundColor: '#EEEEEE',
  },
  textButton: {
    fontSize: 15,
    color: 'black',
  },
  textResult: {
    margin: 15,
  },
  textName: {
    fontSize: 14.5,
    alignItems: 'center',
  },
});
