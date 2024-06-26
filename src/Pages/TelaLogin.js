import React, {useState} from 'react';
import {BottomNavigation} from "react-native-paper";
import {StyleSheet,View,Text} from "react-native"

import Header from "../components/Header";
import Container from "../components/Container"
import Input from "../components/Input"
import Botao from "../components/Botao"
import Textoh2 from "../components/Textoh2"
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../App'; 


export default TelaLogin = () => {

  const { signIn } = React.useContext(AuthContext);
  return(
    <Container>
      <Input label="Email"/>
      <Input label="Senha" span="A senha deve ter pelo menos 8 caracteres."/>
      <View style={styles.container}>
        <Botao title="Recuperar Senha"  />
        <Botao onPress={() => signIn()} title="Login" preto />        
      </View>

      <Textoh2 texto="Ou se cadastre:"/>

      <Input label="Nome"/>
      <Input label="Telefone"/>
      <Botao title="Cadastrar" preto/>

    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',    
    alignItems: 'center', 
    backgroundColor: '#FFF',    
  },
});