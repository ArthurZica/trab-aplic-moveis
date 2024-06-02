import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';


const Header = ({ title, goBack, children}) => {
  return (
    <Appbar.Header style={styles.header}>
      {
        goBack && 
        <Appbar.BackAction onPress={goBack} />
      }
      <Appbar.Content title={title}/>
      {children}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
 header:{    
    backgroundColor: '#FFF',
    padding:10,
  },
});

export default Header;
