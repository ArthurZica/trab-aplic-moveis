import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

import Container from "../components/Container";
import Botao from "../components/Botao";
import Textoh2 from "../components/Textoh2"

const estaticImage = "https://miro.medium.com/v2/resize:fit:720/format:webp/1*g09N-jl7JtVjVZGcd-vL2g.jpeg";

export default function NotificacoesScreen() {
  return (
    <Container >
      <View style={styles.containerInput}>
        <Botao title="Novos Pedidos"/>
        <Botao title="Alterações"/>
      </View>
      <View style={styles.containerProfile}>
        <Image
          style={styles.profileImage}
          source={{ uri: estaticImage }}
        />
        <Textoh2 texto="Usuário"/>
        <View style= {styles.containerDetails}>
          <Botao title="Ver Detalhes >" preto/>
        </View>
      </View>     
    </Container>
    
  );
}

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: 'row',    
    alignItems: 'center', 
    backgroundColor: '#FFF',    
  },
  containerProfile: {
    flexDirection: 'row',    
    alignItems: 'center', 
    backgroundColor: '#FFF',
    padding:10,
  },
  containerDetails: {    
    paddingLeft:30,
    alignItems: 'flex-end',
  },
  profileImage:{
    width: 64,
    height: 64,
    borderRadius: 32,
  }
});
