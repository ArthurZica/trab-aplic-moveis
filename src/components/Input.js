import React from 'react';
import { StyleSheet, View,Text} from 'react-native';
import { TextInput } from 'react-native-paper';

const Input = ({ label, span }) => {
  return (
    <View style={styles.container}>
       <TextInput style={styles.input}
          label={label}
          mode='outlined'
          theme={{ colors: { primary: 'black' } }}
        />

        {span && (
        <Text style={styles.span}>
          {span}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems:'stretch',
    padding: 8,
  },
  input: {    
    backgroundColor: '#FFF',    
    borderRadius: 5,
    fontSize: 15,
  },
  span: {
    fontSize: 12,
    color: '#888',
  },
});

export default Input;
