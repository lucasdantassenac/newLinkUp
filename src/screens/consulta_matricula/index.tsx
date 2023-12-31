import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routers/stack';
import { styles } from './styles';
import StyleDesenho from './StyleDesenho';
import navigatorBar from './../../components/stylesGlobal/navigatorBar';
import viewColor from '../../components/stylesGlobal/myColors';
import footer from '../../components/stylesGlobal/footer';
import myInputs from '../../components/stylesGlobal/inputs';
import myButtons from '../../components/stylesGlobal/myButtons';
import myPrincipalContainer from '../../components/stylesGlobal/myPrincipalContainer';

export default function ConsultaMatricula() {
    const navigation = useNavigation<StackTypes>();

    const [textoInput, setTextoInput] = useState(''); // Estado para o valor do campo de input
    const [botaoAtivo, setBotaoAtivo] = useState(false); // Estado para controlar a ativação do botão
  
    const handleInputChange = (texto: string) => {
      setTextoInput(texto);
      // Verifique se o texto não está vazio para ativar/desativar o botão
      setBotaoAtivo(texto.trim() !== '');
    };

  return (
    <View>
     <StyleDesenho/>

      <View style={myPrincipalContainer.containerPrincipalCadastro}>

        <View style={navigatorBar.containerNav}>
          <TouchableOpacity style={navigatorBar.buttonback} onPress={() => navigation.navigate('ProfileUser')}>
            <Icon name='arrowleft' size={30} style={{fontWeight:'bold', color: viewColor.padraoText2.color}} />
            <Text style={navigatorBar.textback2}>Voltar</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>

        <View style={myPrincipalContainer.subcontainerPrincipal}>

          <View style={styles.containerTitulo}>
            <Text style={styles.cadastroTitulo}>Cadastro</Text>
          </View>

          <View style={styles.containerSubtitulo}>
            <Text style={styles.subtituloPadrãoCadastro}>Buscar informações</Text>
          </View>

          <View style={myInputs.containerPrincipalInputs}>

            <View style={myInputs.containerInput}>
              <Text style={myInputs.textInput}>Matrícula ou CPF</Text>
              <TextInput style={myInputs.input} onChangeText={handleInputChange}/>
            </View>

          </View>

          <View style={myButtons.containerButton}> 
            <TouchableOpacity 
              style={
                [
                  myButtons.button, 
                  botaoAtivo ? styles.botaoAtivo : styles.botaoInativo
                ]
              } 
              disabled={
                !botaoAtivo
              } 
              onPress={
                ()=>{navigation.navigate('Cadastro');}
              }>
                <Text style={styles.avancar}>Avançar</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={footer.containerFooter}>
          <Text style={footer.textFooter}>Copyright © 2023. Todos os direitos reservados · Privacy · Terms</Text>
        </View>
      </View>
    </View>
    
  );
}

