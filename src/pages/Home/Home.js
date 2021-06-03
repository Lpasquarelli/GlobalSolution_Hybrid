import { useNavigation } from '@react-navigation/core';
import React from 'react'
import {
 View,Text,StyleSheet, FlatList, TouchableOpacity
} from 'react-native'

const hoteis = [
    {
      codigo : 1,
      nome: 'IBIS Styles São Paulo Anhembi',
      descricao: 'Junto a uma estação de metro, este hotel moderno com o tema da aviação fica a 3 km do museu de arte Pinacoteca do Estado de São Paulo e a 4,4 km do Theatro Municipal de São Paulo.',
      foto : require('../../assets/img/IBIS-Anhembi.jpg'),
      precos: '116,00',
      estrelas: '✶✶✶✶',
      telefone: '(11) 3336-5400',
      endereco: 'Av. Cruzeiro do Sul, 1709 - Santana, São Paulo - SP, 02031-000'
    },
    {
      codigo : 2,
      nome: 'Confort Ibirapuera',
      descricao: 'Situado em frente à Praça Nossa Senhora Aparecida, uma praça pública com uma basílica ornamentada, este hotel moderno e informal fica a 4 km da Estação Ferroviária de Vila Olímpia e do Aeroporto de Congonhas em São Paulo.',
      foto : require('../../assets/img/Confort-Ibirapuera.jpg'),
      precos: '223,00',
      estrelas: '✶✶',
      telefone: '(11) 4673-0255',
      endereco: 'Av. Sabiá, 825 - Indianópolis, São Paulo - SP, 04515-001'
    },
    {
      codigo : 3,
      nome: 'Blue Tree Premium Morumbi',
      descricao: 'Situado a 2 minutos a pé do centro comercial Morumbi Shopping, este hotel de luxo num edifício alto e imponente fica também a 6 km do Aeroporto de Congonhas – São Paulo e a 8 km do Parque Ibirapuera.',
      foto : require('../../assets/img/Blue-Paulista.jpg'),
      precos: '230,00',
      estrelas: '✶✶✶✶✶',
      telefone: '(11) 5187-1200',
      endereco: 'Av. Roque Petroni Júnior, 1000 - Vila Gertrudes, São Paulo - SP, 04707-000'
    },
    {
      codigo : 4,
      nome: 'Mercure São Paulo Pamplona',
      descricao: 'Hotel refinado em um arranha-céu que fica localizado a 12 minutos de caminhada de uma estação de metrô, a 1 km do Museu de Arte de São Paulo e a 3,7 km do Parque Ibirapuera.',
      foto : require('../../assets/img/Mercure-Pamplona.jpg'),
      precos: '235,00',
      estrelas: '✶✶✶✶',
      telefone: '(11) 2878-5500',
      endereco: 'R. Pamplona, 1315 - Jardim Paulista, São Paulo - SP, 01405-002'
    },
    {
      codigo : 5,
      nome: 'Sheraton São Paulo WTC Hotel',
      descricao: 'Situado a 2 minutos a pé do WTC World Trade Center São Paulo, este hotel de luxo fica a 9 minutos a pé de uma estação de metro e a 9 km do Parque Ibirapuera.',
      foto : require('../../assets/img/Sheraton-SP.jpg'),
      precos: '356,00',
      estrelas: '✶✶✶✶',
      telefone: '(11) 3055-8000',
      endereco: 'Av. das Nações Unidas, 12559 - Brooklin Novo, São Paulo - SP, 04578-903'
    },
    {
      codigo : 6,
      nome: 'Bourbon Convention Ibirapuera',
      descricao: 'Situado em 2 torres, este hotel de negócios contemporâneo fica a 3 km do Parque Ibirapuera e a 7 km do Museu de Arte de São Paulo.',
      foto : require('../../assets/img/Bourbon-Ibirapuera.jpg'),
      precos: '236,00',
      estrelas: '✶',
      telefone: '(11) 2161-2200',
      endereco: 'Av. Ibirapuera, 2927 - Ibirapuera, São Paulo - SP, 04029-200'
    },
    {
      codigo : 7,
      nome: 'Blue Tree Preimum Paulista',
      descricao: 'Este hotel moderno com fachada de vidro fica a cinco minutos a pé do Museu de Arte de São Paulo e a quatro quilômetros do Parque Ibirapuera.',
      foto : require('../../assets/img/BlueTree.jpg'),
      precos: '291,00',
      estrelas: '✶✶✶✶',
      telefone: '(11) 3147-7000',
      endereco: 'Rua Peixoto Gomide, 707 - Bela Vista, São Paulo - SP, 01409-001'
    },
    {
      codigo : 8,
      nome: 'Golden Tulip Paulista Plaza',
      descricao: 'Este moderno hotel luxuoso fica a 6 minutos a pé de uma estação de metro, a 500 metros da movimentada Avenida Paulista e a 3,1 km do Parque Ibirapuera.',
      foto : require('../../assets/img/GoldenPaulista.jpg'),
      precos: '207,00',
      estrelas: '✶✶✶',
      telefone: '(11) 2627-1000',
      endereco: 'Alameda Santos, 85 - Jardins, São Paulo - SP, 01419-000'
    },
    {
      codigo : 9,
      nome: 'Renaissance São Paulo Hotel',
      descricao: 'Situado numa rua comercial, este hotel sofisticado fica a 3 minutos a pé de uma estação de metro e a 4 minutos a pé das lojas de luxo na movimentada Avenida Paulista.',
      foto : require('../../assets/img/Renaissance.jpg'),
      precos: '532,00',
      estrelas: '✶✶✶✶✶',
      telefone: '(11) 3069-2233',
      endereco: 'Alameda Santos, 2233 - Jardim Paulista, São Paulo - SP, 01419-002'
    }
]

function Home() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.cabecalhoText}>Hoteis</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={hoteis.sort((a) => a.codigo <= a.codigo)}
                    keyExtractor={item => item.codigo} 
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => navigation.push('Hoteis', item)} style={styles.containerHoteis}>
                            <Text style={styles.dadosHoteis}>{item.nome}</Text>
                            <Text style={styles.valorHoteis}>R$ {item.precos}</Text>
                        </TouchableOpacity>
                    )}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#efefef'
    },
    cabecalho:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding: 20,
        backgroundColor:'#27cce6'
    },
    cabecalhoText:{
        fontSize:20,
        color: '#fff'
    },
    content:{
        marginHorizontal: 12,
        marginVertical: 8
    },
    containerHoteis:{
        padding: 20,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#8aedff',
        marginVertical: 4,
        borderRadius: 12
    },
    dadosHoteis:{
        fontSize:18,
        color: "#489aa8"
    },
    valorHoteis:{
        fontSize:14,
        color: "#489aa8"
    }
});

export default Home
