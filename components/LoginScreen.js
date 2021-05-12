import React, { Component } from 'react';
import { StyleSheet ,Text, View, Image, SafeAreaView, TextInput, Button, TouchableOpacity} from 'react-native';
function LoginScreen ({navigation}) {
    
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../images/logo.jpg')}></Image>
                        <Text style={styles.title}>♥ ♥ ♥</Text>
                    </View>
                    <View style={styles.infocontainer}>
                        <Text style={styles.title2}>Tài khoản</Text>
                        <TextInput style={styles.input}/>
                        <Text style={styles.title2}>Mật khẩu</Text>
                        <TextInput style={styles.input}/>
                        <TouchableOpacity onPress={() => navigation.navigate("Splash")} style={styles.buttonContainer} >
                            <Text style={styles.buttontext}> ĐĂNG NHẬP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        
        )
}
export default LoginScreen;
const styles =StyleSheet.create({
    container: {
        backgroundColor: 'rgb(245,168,154)',
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
    },
    logo:{
        width: 300,
        height: 150,
    },
    logoContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        top: 20,
    },
    infocontainer:{
        position:'absolute',
        left: 0,
        right: 0,
        bottom:0,
        height: 400,
        padding:20,
        // backgroundColor:'green'
    },
    input:{
        height:40,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    title2: {
        
        fontSize: 15,
        color: 'black',
    },
    buttonContainer:{
        paddingVertical:20,
        backgroundColor: 'white',
        top: 20,
    },
    buttontext:{
        textAlign: 'center',
        fontSize:18,
    }

})