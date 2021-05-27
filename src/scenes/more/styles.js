import {StyleSheet} from 'react-native'
import { Colors } from '../../styles';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        flex: 1
    },
    bgNoti: {
        height: 52,
        width: 52,
        backgroundColor: '#AFEEEE',
        borderRadius: 26,
        justifyContent: 'center',
        borderColor: 'green',
        borderWidth: 1,
      },
      labelNoti: {
        fontSize: 20,
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold',
      },
      titleNoti: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
      },
      contentNoti: {
        fontSize: 13,
        color: '#808080',
      },
      imgArrowRight: {
        height: 24,
        width: 24,
        alignSelf: 'center',
      },
      sectionNoti: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 6,
        paddingBottom: 20,
        marginTop: 6,
        backgroundColor: '#D3D3D3',
      },
});