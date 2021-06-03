import { useNavigation } from '@react-navigation/core';
import React from 'react'
import {
 View,Text,StyleSheet,Image, Button, TouchableOpacity
} from 'react-native'


function Hoteis({ route }) {
    
    const navigation = useNavigation();
   
    const item = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.cabecalhoText}>{item.nome} </Text>
                <Text style={styles.cabecalhoText}>{item.estrelas}</Text>
                
            </View>
            <View style={styles.imagem}>
                <Image style={styles.img} source={item.foto} resizeMode={'contain'}/>
            </View>
            <View style={styles.contentWrapper}>
                <View style={styles.dados}>
                    <Text style={styles.text}>{item.descricao}</Text>
                    <Text style={styles.text}><Text style={styles.bold}>Endereço :</Text> {item.endereco}</Text>
                    <Text style={styles.text}><Text style={styles.bold}>Telefone: </Text>{item.telefone}</Text>
                    <Text style={styles.text}><Text style={styles.bold}>Preço:</Text> R$ {item.precos}</Text>
                </View>
                <TouchableOpacity style={styles.fechar} onPress={() => navigation.pop()}><Text style={styles.textFechar} >Fechar</Text></TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
      flex: 1
    },
    cabecalho:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding: 20,
        flexDirection:'column',
        backgroundColor:'#27cce6'
    },
    cabecalhoText:{
        fontSize:20,
        color: '#fff'
    },
    imagem:{
        height: 300
    },
    bold:{
        fontWeight:'bold'
    },
    dados:{
        padding: 16,
        marginHorizontal:10,
        flexDirection:'column',
        backgroundColor: '#8aedff',
        borderRadius: 10,
        marginVertical:30
    },
    contentWrapper:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.46)'
    },
    text:{
        marginVertical:4,
        color: '#489aa8'
    },
    fechar:{
        padding: 20,
        width: 100,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal: 10,
        marginVertical:20,
        backgroundColor: '#ff2b33',
        borderRadius: 10
    },
    textFechar:{
        color: '#fff'
    },
    img:{

    }
  });
export default Hoteis
