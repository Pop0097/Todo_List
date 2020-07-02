import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, Button,} from 'react-native';

export default function AddTodo({ submitHandler }) {
    [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    };
    
    return(
        <View>
            <TextInput 
                style={styles.textInput}
                placeholder='Enter item'
                onChangeText={changeHandler}
                value={text} />
            <button 
                style={styles.butt}
                onPress={ () => { submitHandler({ text }) }}
                title='Add Item'/>
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    butt: {
        color: 'pink',
    },
})