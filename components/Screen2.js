import React from 'react';
import { StyleSheet ,Text, View ,Button} from 'react-native';
function Screen2 ({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Screen2 </Text>
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        backgroundColor: '#F00',
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
export default Screen2;