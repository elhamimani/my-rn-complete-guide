import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setcourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setcourseGoals(currentGoals => [...currentGoals, {key:Math.random().toString() ,value:enteredGoal}]);
  };

  return (
 <View style={styles.screen}>
  <View style={styles.inputContainer}>
    <TextInput style={styles.input} 
    placeholder='Course Goal'
    onChangeText={goalInputHandler} 
    value={enteredGoal} 
    />
    <Button title='ADD' onPress={addGoalHandler} />
  </View>

  <FlatList
    keyExtractor={(item, index) => item.id}
    data={courseGoals}
    renderItem={itemData => (

    <View style={styles.ListItem}> 
      <Text>
        {itemData.item.value}
      </Text>
    </View>
      )}
  />
  
 </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width:'80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  ListItem: {
    padding: 10,
    marginVertical:10,
    backgroundColor: '#ccc',
    borderColore: 'black',
    borderWidth:1
  }
});
