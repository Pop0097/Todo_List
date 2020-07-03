import React, { useState } from 'react';
import {StyleSheet, View, TextInput, Button,} from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    };

    return(
        <View>
            <TextInput 
                style={styles.input}
                placeholder='Enter item'
                onChangeText={ changeHandler } //when text changes, this function is called
                value={text} //state that concerns this 
                />
            <Button 
                color='pink'
                onPress={() =>  { //declares function
                    submitHandler(text); //calls function in App.js and passes parameter
                    changeHandler('');
                    }}
                title='Add Item'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
})