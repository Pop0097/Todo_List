import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ( { pressHandler, item }) {
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.items}>{ item.text }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    items: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 1,
        borderRadius: 10,
      }
})