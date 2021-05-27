import React from 'react'
import {View, Text, TextInput} from 'react-native'

const TxtStudentPhone = (props) => {
    const {value, onChange} = props
    return <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
        <Text style={{ flex: 0.3 }}>Điện thoại:</Text>
        <TextInput
            defaultValue='0978.456.789'
            style={{ borderWidth: 1, borderColor: '#ccc', height: 36, flex: 1 }} 
            onChangeText={(text) => onChange(text)}
        />
    </View>
}

export default TxtStudentPhone