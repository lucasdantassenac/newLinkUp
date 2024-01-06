import 'react-native-url-polyfill/auto'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, StatusBar, View, Text, TextInput, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native'
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import stylesInteresses from './stylesInteresses';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../../routers/stack';
import data from './db.json';
import StyleDesenho from './StyleDesenho';
import { color } from 'react-native-elements/dist/helpers';


export function Interesses() {
  const navigation = useNavigation<StackTypes>()

const [cursoInteresse, setCursoInteresse] = useState<{
  curso: string;
  id: number;
} | null>(null);

useEffect(() => {
  try {
    const meuInteresse = data.interesses[0];
    setCursoInteresse(meuInteresse);
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
}, []);

  return(

    <ScrollView>
      <StyleDesenho/>

        <View style={stylesInteresses.containerPrincipal}>

          <View style={stylesInteresses.statusBarraProgresso}>
            <View style={{backgroundColor: '#4FC5C5', borderRadius: 30, height: 7, width: 85, marginRight: 7}}><Text></Text></View>
            <View style={{backgroundColor: '#4FC5C5', borderRadius: 30, height: 7, width: 85, marginRight: 7}}><Text></Text></View>
            <View style={{backgroundColor: '#d9d9d9', borderRadius: 30, height: 7, width: 85, marginRight: 7}}><Text></Text></View>
          </View>

          <View style={stylesInteresses.containerNav}>
            <TouchableOpacity style={stylesInteresses.buttonback} onPress={() => navigation.navigate('Cadastro')}>
              <Icon name='arrowleft' size={30} style={{fontWeight:'bold', color: 'white'}} />
              <Text style={stylesInteresses.textback}>Voltar</Text>
            </TouchableOpacity>
          </View>

          <View style={stylesInteresses.containerPrincipalCadastro}>

            <View style={stylesInteresses.containerInteressesTitulo}>
              <Text style={stylesInteresses.cadastroTitulo2}>Cadastro</Text>
            </View>

            <View style={stylesInteresses.containerSubtituloPadrao}>
              <Text style={stylesInteresses.subtituloPadrãoCadastro}>Quais assuntos você tem interesse?</Text>
            </View>

            <View style={stylesInteresses.containerSubtituloPadrao2}>
              <Text style={stylesInteresses.subtituloPadrãoCadastro2}>Escolha ao menos dois.</Text>
            </View>
            
            <View style={stylesInteresses.containerInteresses}>
              {data.interesses.map((curso) => (
                <TouchableOpacity key={curso.id} style={stylesInteresses.buttonInteresse}>
                  <Text style={stylesInteresses.textButtonInteresse}>{curso.curso}</Text>
                </TouchableOpacity>
              ))}
            </View>


            <View style={stylesInteresses.containerButtons}>
            
              <View style={stylesInteresses.containerInteressesButtons}>
                <TouchableOpacity style={stylesInteresses.interessesButtonsSalvar}>
                  <Text style={stylesInteresses.interessesButtonsTextSalvar}>Salvar</Text>
                </TouchableOpacity>
              </View>
            
            </View>

          </View>

        </View>
      
        <StatusBar backgroundColor='#215151'/>
      
    </ScrollView>
  );
}

