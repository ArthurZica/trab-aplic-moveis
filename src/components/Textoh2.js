import {Text, StyleSheet} from 'react-native';

export default Textoh2 = ({texto}) => {
  return(
    <Text style={styles.texto}>
      {texto}
    </Text>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontWeight: 'bold',
    fontSize: 16,
    padding:10,
  },  
});