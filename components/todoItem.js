import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function ( { pressHandler, item }) {
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.items}></Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    items: {
        padding: 10,
        fontSize:  14,
        color: '#b0b0b0',
      }
})