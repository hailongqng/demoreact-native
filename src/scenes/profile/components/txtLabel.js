import React from 'react';
import { Text, StyleSheet} from 'react-native';

 const TxtLabel = (props) => {
    return <Text style={[style.label, {marginBottom: props.marginBottom != null ? props.marginBottom: 0}]}>{props.label} {props.value}</Text>
} 
const style = StyleSheet.create({
    label: {
        fontSize: 14,
        marginTop: 8
    }
})
export default TxtLabel;