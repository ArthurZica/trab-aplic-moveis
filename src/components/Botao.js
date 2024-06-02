import { StyleSheet, View, Text} from 'react-native';
import { Button } from 'react-native-paper';


export default Botao = ({preto,onPress,title}) => {
  return(
    <View style={styles.container}>
      <Button 
        style={[styles.botao, { borderColor: preto ? '#FFF' : '#000' }]}
        buttonColor={preto ? '#FFF' : '#000' }
        color={preto ? "#000" : "#FFF"}
        mode="contained"
        uppercase={false}
        onPress={onPress}
        labelStyle={{ fontSize: 12 }}

      >
        {title}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    padding: 10,
  },
  botao: {
    width: '100%',    
    borderWidth: 1,
    borderRadius: 5,
  },
});