import React, { Component } from 'react';
import { StyleSheet ,Text, View ,Button} from 'react-native';
function SplashScreen ({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Long nè </Text>
            <Button title="Go to Login"  onPress={() => navigation.navigate("Login")}  />
            <Button title="Go to DrawerNavigator"  onPress={() => navigation.navigate("Drawer")}  />
            <Button title="Go to BottomTabNavigator"  onPress={() => navigation.navigate("Bottab")}  />
            <Button title="Go to TopTabNavigator"  onPress={() => navigation.navigate("Toptab")}  />
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
export default SplashScreen;