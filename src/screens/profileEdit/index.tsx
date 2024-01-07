import 'react-native-url-polyfill/auto'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, StatusBar, View, Text, TextInput, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native'
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import stylesEditarPerfil from './stylesEditarPerfil';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routers/stack';
import {Picker} from '@react-native-picker/picker';
import data from './db.json';
import { supabase } from '../../lib/supabase';
import { Session } from '@supabase/supabase-js';
import navigatorBar from './../../components/stylesGlobal/navigatorBar';
import viewColor from '../../components/stylesGlobal/myColors';
import myInputs from '../../components/stylesGlobal/inputs';
import myButtons from '../../components/stylesGlobal/myButtons';
import myPrincipalContainer from '../../components/stylesGlobal/myPrincipalContainer';


export function EditarPerfil() {

  const navigation = useNavigation<StackTypes>()

  const [paisNome, setPaisNome] = useState<{
      pais: any;
      value: any;
      id: any;
    } | null>(null);
    
    useEffect(() => {
      try {
        const myPais = data.paises[0];
        setPaisNome(myPais);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    }, []);

  const [cidadeNome, setCidadeNome] = useState<{
      cidade: any;
      value: any;
      id: any;
    } | null>(null);
    
    useEffect(() => {
      try {
        const myCity = data.cidades[0];
        setCidadeNome(myCity);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    }, []);


  return(
    <ScrollView>
      <View style={myPrincipalContainer.containerPrincipal2}>

        <View style={navigatorBar.containerNav}>
          <TouchableOpacity style={navigatorBar.buttonback} onPress={() => navigation.goBack()}>
            <Icon name='arrowleft' size={30} style={{fontWeight:'bold', color: viewColor.padraoText1.color}} />
            <Text style={navigatorBar.textback}>Voltar</Text>
          </TouchableOpacity>
        </View>

        <View style={myPrincipalContainer.subcontainerPrincipalConteudo}> 

            <View style={stylesEditarPerfil.containerTitulo}>
                <Text style={stylesEditarPerfil.titulo}>Editar Perfil</Text>
            </View>

            <View style={stylesEditarPerfil.containerPrincipalFoto}>
              <View style={stylesEditarPerfil.containerFoto}>
                  <Text>Foto</Text>

                  <TouchableOpacity style={stylesEditarPerfil.containerIconEditarFoto}>
                      <Icon2 style={stylesEditarPerfil.iconEditFoto} name='edit' size={35} /*onPress={() => navigation.navigate('')}*/ />
                  </TouchableOpacity>
              </View>
            </View>

            <View style={stylesEditarPerfil.containerInputs}>

              <View style={stylesEditarPerfil.containerInput}>
                  <Text style={stylesEditarPerfil.labelInput}>Nome Completo</Text>
                  <TextInput style={stylesEditarPerfil.input} cursorColor={'black'}/>
              </View>

              <View style={stylesEditarPerfil.containerInput}>
                  <Text style={stylesEditarPerfil.labelInput}>Nome de usuário</Text>
                  <TextInput style={stylesEditarPerfil.input} cursorColor={'black'}/>
              </View>

              <View style={stylesEditarPerfil.containerInput}>
                  <Text style={stylesEditarPerfil.labelInput}>E-mail</Text>
                  <TextInput style={stylesEditarPerfil.input} cursorColor={'black'}/>
              </View>

              <View style={stylesEditarPerfil.containerInput}>
                  <Text style={stylesEditarPerfil.labelInput}>País</Text>
                  <View style={stylesEditarPerfil.inputPicker}>
                      <Picker 
                          style={stylesEditarPerfil.picker}
                          selectedValue={paisNome}
                          onValueChange={(itemValue, itemIndex) => setPaisNome(itemValue)}
                      >
                          {data.paises.map((paises) => (
                          <Picker.Item label={paises.pais} value={paises.value} key={paises.id}  />
                          ))}
                      </Picker>
                  </View>
              </View>

              <View style={stylesEditarPerfil.containerInput}>
                  <Text style={stylesEditarPerfil.labelInput}>Cidade</Text>
                  <View style={stylesEditarPerfil.inputPicker}>
                      <Picker 
                          style={stylesEditarPerfil.picker}
                          selectedValue={cidadeNome}
                          onValueChange={(itemValue, itemIndex) => setCidadeNome(itemValue)}
                      >
                          {data.cidades.map((cidades) => (
                          <Picker.Item label={cidades.cidade} value={cidades.value} key={cidades.id}  />
                          ))}
                      </Picker>
                  </View>
              </View>

              <View style={stylesEditarPerfil.containerInput}>
                  <Text style={stylesEditarPerfil.labelInput}>Data de Nascimento</Text>
                  <TextInput style={stylesEditarPerfil.input} cursorColor={'black'}/>
              </View>

          </View>

          <View style={stylesEditarPerfil.containerButton}>
            <TouchableOpacity style={stylesEditarPerfil.buttonSalvar}>
                <Text style={stylesEditarPerfil.buttonTextSalvar}>Salvar</Text>
            </TouchableOpacity>
          </View>
        
        </View>

        <StatusBar backgroundColor='#fff' translucent barStyle={'dark-content'}/>

      </View>
    </ScrollView>
  );
}

