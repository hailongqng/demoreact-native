import React from 'react'
import {View, Text, TextInput} from 'react-native'

const TxtPhoneParent = () => {
    return <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12, marginBottom: 50 }}>
        <Text style={{ flex: 1.5 }}>Điện thoại người bảo lãnh:</Text>
        <TextInput
            defaultValue='0978.456.789'
            style={{ borderWidth: 1, borderColor: '#ccc', height: 36, flex: 1 }} />
    </View>
}

export default TxtPhoneParent