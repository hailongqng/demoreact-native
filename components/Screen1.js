import React from 'react';
import { StyleSheet ,Text, View ,Button} from 'react-native';
function Screen1 ({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Screen1 </Text>
            
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        backgroundColor: 'white',
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
export default Screen1;