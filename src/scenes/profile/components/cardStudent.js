import React from 'react';
import { View, StyleSheet } from 'react-native';

const Demo = ({
    children, style, ...rest
}) => (
    <View style={style}>
        {children}
    </View>
);

const styles = StyleSheet.create({
    
});
export default Demo;
