import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Container from '../components/Container';
import Input from '../components/Input';
import Textoh2 from '../components/Textoh2';
import { Button } from 'react-native-paper';
import Botao from '../components/Botao';


export default function BuscarScreen() {
    return (
        <Container style={styles.container}>
            <Textoh2 texto="Busca por diarista" />
            <Input label="Adicione palavras chave" />
            <Text style={{ padding: 8 }}>Busque por localização, preço, etc.</Text>
            <View style={styles.filtrosHeader}>
                <Textoh2 texto="Opções de filtro" />
                <Button style={styles.botaoFiltro} textColor='black'>Aplicar</Button>
            </View>
            <Text style={styles.label}>Localização</Text>
            <View style={styles.viewFiltros}>
                <ScrollView horizontal={true}>
                    <Button style={styles.botaoFiltro} textColor='black'>Minha localização</Button>
                    <Button style={styles.botaoFiltro} textColor='black'>Cidade X</Button>
                    <Button style={styles.botaoFiltro} textColor='black'>Cidade Y</Button>
                    <Button style={styles.botaoFiltro} textColor='black'>Cidade Z</Button>
                </ScrollView>
            </View>
            <Text style={styles.label}>Preços</Text>
            <View style={styles.viewFiltros}>
                <ScrollView horizontal={true}>
                    <Button style={styles.botaoFiltro} textColor='black'>$-$$</Button>
                    <Button style={styles.botaoFiltro} textColor='black'>$$-$$$</Button>
                    <Button style={styles.botaoFiltro} textColor='black'>$$$-$$$$</Button>
                </ScrollView>
            </View>
            <Text style={styles.label}>Avaliação</Text>
            <View style={styles.viewFiltros}>
                <ScrollView horizontal={true}>
                    <Button style={styles.botaoFiltro} textColor='black'>⭐</Button>
                    <Button style={styles.botaoFiltro} textColor='black'>⭐⭐</Button>
                    <Button style={styles.botaoFiltro} textColor='black'>⭐⭐⭐</Button>
                    <Button style={styles.botaoFiltro} textColor='black'>⭐⭐⭐⭐</Button>
                    <Button style={styles.botaoFiltro} textColor='black'>⭐⭐⭐⭐⭐</Button>
                </ScrollView>
            </View>
            <View style={styles.filtrosHeader}>
                <Button style={styles.botaoFinal} buttonColor='black' textColor='white'>Buscar</Button>
                <Button style={styles.botaoFinal} textColor='black'>Limpar Filtro</Button>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    filtrosHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
    },
    botaoFiltro: {
        borderColor: '#000',
        padding: 0,
        borderRadius: 5,
        borderWidth: 1,
        margin: 8,
    },
    botaoFinal: {
        borderColor: '#000',
        width: "45%",
        borderRadius: 5,
        borderWidth: 1,
        margin: 8,
    },
    viewFiltros: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    label: {
        margin: 8
    },
});