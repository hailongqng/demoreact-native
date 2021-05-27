import React from 'react'
import { View, Text, TextInput, Image, TouchableNativeFeedback } from 'react-native'
import { AssetImage } from '../../../assets';

const TxtBirthDay = (props) => {
    const {value, onChange} = props
    return <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Text style={{ flex: 0.3 }}>Ngày Sinh:</Text>
        <TextInput
            defaultValue='20/03/1995'
            onChangeText={(text) => onChange(text)}
            style={{ borderWidth: 1, flex: 1, borderColor: '#ccc', height: 36,  }}
            value={value}
            
            />
        <TouchableNativeFeedback
        // onPress={() => navigation.navigate('Payment')}
        >
            <Image
                style={{ height: 24, width: 24, marginVertical: 4, position: 'absolute', right: 8, top: 2 }}
                source={AssetImage.Course} />
        </TouchableNativeFeedback>
    </View>
}

export default TxtBirthDay
