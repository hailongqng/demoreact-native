import React from 'react';
import { StyleSheet ,Text, View ,Button} from 'react-native';
function Screen3 ({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Screen3 </Text>
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        backgroundColor: '#00F',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
    }
})
export default Screen3;