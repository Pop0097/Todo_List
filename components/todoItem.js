import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; //contains icons 

export default function ( { pressHandler, item }) {
    return(
        <View style={styles.items}>
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <MaterialIcons name='delete' size={18} color='#333' />
            </TouchableOpacity>
            <Text style={styles.itemText}>{item.text}</Text>
        </View>
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
        flexDirection: 'row',
        alignItems: 'center',
      },
      itemText: {
        marginLeft: 10,
      }
})