import React from 'react';
import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';

const NewsEvent = ({ onPress }) => {
    return (
        <View style={{ flexDirection: 'row', height: 110, margin: 16 }}>
            <View style={{ width: '40%', marginRight: 6 }}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{'Tin tức'}</Text>
                <Text style={{fontSize: 12, marginVertical: 10}}>{'Trường đang tổ chức cuộc thi thiết kế thời trang.'}</Text>
                <TouchableOpacity onPress={onPress}>
                    <Text style={style.btnRegister}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: '60%' }}>
                <Image
                    style={{ height: 110, width: '100%' }}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJlOFqIdvN4OIk3VQnfBM9n7QFoq43pMsrg&usqp=CAU' }}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    btnRegister: {
        backgroundColor: 'green',
        width: '60%',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 4,
        textAlign: 'center',
        color: '#fff',
        alignSelf: 'center'
    }
})

export default NewsEvent;

