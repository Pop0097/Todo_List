import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header'; //imports code for the header of the application

export default function App() { //Root component 
  const [todos, setTodos] = useState([ //Initialize an array of objects
    { text: 'Eat bread', key: '1'},
    { text: 'Eat lunch', key: '2'},
    { text: 'Go to work', key: '3'},
    { text: 'Drnk Water', key: '4'}
  ])

  var counter = 1;

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={ ({ item }) => (<Text style={styles.items}>{item.text}</Text>) }/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ //style sheet
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
    textAlign: 'center'
  },
  items: {
    padding: 10,
    fontSize:  14,
    color: '#b0b0b0',
  }
});
