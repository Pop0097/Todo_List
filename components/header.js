import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default function Header() { //header component of the App.js
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({ // style sheet
    header: {
        height: 80,
        paddingTop: 30,
        backgroundColor: 'pink',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
    }
})