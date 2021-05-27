import React from 'react'
import { View, Text, TextInput } from 'react-native'

const TxtParent = () => {
    return <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
        <Text style={{ flex: 1.5 }}>Người bảo lãnh(liên lạc khi cần):</Text>
        <TextInput
            defaultValue='Nguyễn Văn A'
            style={{ borderWidth: 1, borderColor: '#ccc', height: 36, flex: 1 }} />
    </View>
}

export default TxtParent