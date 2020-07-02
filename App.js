import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
 //imports js code from the components folder
import Header from './components/header';
import AddTodo from '.components/addToDo'; 
import TodoItems from './components/todoItem';


export default function App() { //Root component 
  const [todos, setTodos] = useState([ //Initialize an array of objects
    { text: 'Eat bread', key: '1'},
    { text: 'Eat lunch', key: '2'},
    { text: 'Go to work', key: '3'},
    { text: 'Drnk Water', key: '4'}
  ])

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => 
    {setText('');
    setTodos(prevTodos => {
      return [
        { text, key: Math.random().toString() },
        ...prevTodos
      ];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={ ({ item }) => (<TodoItems item={item} pressHandler={pressHandler} />) }/>
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
});
