import 'react-native-url-polyfill/auto'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, StatusBar, View, Text, TextInput, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native'
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import stylesEditarCurso from './stylesEditarCurso';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../../routers/stack';
import {Picker} from '@react-native-picker/picker';
import data from './db.json';
import { supabase } from '../../../lib/supabase';
import { Session } from '@supabase/supabase-js';
import myPrincipalContainer from '../../../components/stylesGlobal/myPrincipalContainer';

export function EditarCurso() {


  

 

  
  // const [fontsLoaded, fontsError] = useFonts({Poppins_700Bold, Poppins_400Regular, Poppins_500Medium})
  const navigation = useNavigation<StackTypes>()
  const [statusCurso, setStatusCurso] = useState('cursando');
  const [nomeCurso, setNomeCurso] = useState('tec informatica');

  const [mesInicio, setMesInicio] = useState('');
  const [anoInicio, setAnoInicio] = useState('');
  const [mesConclusao, setMesConclusao] = useState('');
  const [anoConclusao, setAnoConclusao] = useState('');



// Nome do curso
const [cursoNome, setCursoNome] = useState<{
  nome: string;
  value: string;
  id: number;
} | null>(null);

useEffect(() => {
  try {
    const meuCurso = data.curso[0];
    setCursoNome(meuCurso);
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
}, []);

// Status do curso
const [cursoStatus, setCursoStatus] = useState<{
  status: string;
  value: string;
  id: number;
} | null>(null);

useEffect(() => {
  try {
    const meuStatus = data.statusCurso[0];
    setCursoStatus(meuStatus);
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
}, []);

// Periodo mes
const [cursoMes, setCursoMes] = useState<{
  mes: string;
  value: string;
  id: number;
} | null>(null);

useEffect(() => {
  try {
    const meuCursoMes = data.mesCurso[0];
    setCursoMes(meuCursoMes);
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
}, []);

// Ano do curso
const [anoDoCurso, setAnoDoCurso] = useState<{
  ano: string;
  value: number;
  id: number;
} | null>(null);

useEffect(() => {
  try {
    const anoDoCurso = data.anoCurso[0];
    setAnoDoCurso(anoDoCurso);
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
  }
}, []);


  return(
    <ScrollView>
      <View style={myPrincipalContainer.containerPrincipal2}>

        <View style={stylesEditarCurso.containerNav}>
          <TouchableOpacity style={stylesEditarCurso.buttonback} onPress={() => navigation.navigate('ProfileUser')}>
            <Icon name='arrowleft' size={30} style={{fontWeight:'bold'}} />
            <Text style={stylesEditarCurso.textback}>Voltar</Text>
          </TouchableOpacity>
        </View>

        <View style={myPrincipalContainer.subcontainerPrincipalConteudo}>

          <View style={stylesEditarCurso.containerEditarCursoTitulo}>
            <Text style={stylesEditarCurso.cursoTitulo}>Editar Curso</Text>
          </View>

          <View style={stylesEditarCurso.containerEditarCursoInputs}>

                <View style={stylesEditarCurso.containerInput}>
                  <Text style={stylesEditarCurso.labelInput}>Nome do Curso</Text>
                  <View style={stylesEditarCurso.inputPicker}>
                    <Picker 
                      style={stylesEditarCurso.picker}
                      selectedValue={nomeCurso}
                      onValueChange={(itemValue, itemIndex) => setNomeCurso(itemValue)}
                    >
                        {data.curso.map((curso) => (
                        <Picker.Item label={curso.nome} value={curso.value} key={curso.id} />
                        ))}
                    </Picker>
                  </View>
                </View>
                
                <View style={stylesEditarCurso.containerInput}>
                  <Text style={stylesEditarCurso.labelInput}>Turma</Text>
                  <TextInput style={stylesEditarCurso.input} placeholder="Ex: 2022.1" cursorColor={'black'}/>
                </View>

                <View style={stylesEditarCurso.containerPrincipalInputPeriodo}>
                  <View>
                    <Text style={stylesEditarCurso.labelInputPeriodo}>Período</Text>
                  </View>

                  <View style={stylesEditarCurso.containerPeriodo}>
                    <View>
                      <Text style={stylesEditarCurso.labelInputPeriodoSub}>Início</Text>
                    </View>

                    <View style={stylesEditarCurso.containerInputPeriodo}>

                      <View style={stylesEditarCurso.subcontainerInputPeriodo} >
                        <View style={stylesEditarCurso.inputPicker}>
                          <Picker 
                            style={stylesEditarCurso.picker} placeholder="Mês"
                            selectedValue={mesInicio}
                            onValueChange={(itemValue, itemIndex) => setMesInicio(itemValue)}
                          >
                            {data.mesCurso.map((mesCurso) => (
                            <Picker.Item label={mesCurso.mes} value={mesCurso.value} key={mesCurso.id} />
                            ))}
                          </Picker>
                        </View>
                      </View>

                      <View style={stylesEditarCurso.subcontainerInputPeriodo}>
                        <View style={stylesEditarCurso.inputPicker}>
                        <Picker 
                            style={stylesEditarCurso.picker} placeholder="Ano"
                            selectedValue={anoInicio}
                            onValueChange={(itemValue, itemIndex) => setAnoInicio(itemValue)}
                          >
                            {data.anoCurso.map((anoCurso) => (
                            <Picker.Item label={anoCurso.ano} value={anoCurso.value} key={anoCurso.id} />
                            ))}
                          </Picker>
                        </View>
                      </View>

                    </View>
                  </View>

                  <View style={stylesEditarCurso.containerPeriodo}>
                    <View>
                      <Text style={stylesEditarCurso.labelInputPeriodoSub}>Conclusão prevista</Text>
                    </View>

                    <View style={stylesEditarCurso.containerInputPeriodo}>

                      <View style={stylesEditarCurso.subcontainerInputPeriodo} >
                        <View style={stylesEditarCurso.inputPicker}>
                          <Picker 
                            style={stylesEditarCurso.picker} placeholder="Mês"
                            selectedValue={mesConclusao}
                            onValueChange={(itemValue, itemIndex) => setMesConclusao(itemValue)}
                          >
                            {data.mesCurso.map((mesCurso) => (
                            <Picker.Item label={mesCurso.mes} value={mesCurso.value} key={mesCurso.id} />
                            ))}
                          </Picker>
                        </View>
                      </View>

                      <View style={stylesEditarCurso.subcontainerInputPeriodo}>
                        <View style={stylesEditarCurso.inputPicker}>
                        <Picker 
                            style={stylesEditarCurso.picker} placeholder="Ano"
                            selectedValue={anoConclusao}
                            onValueChange={(itemValue, itemIndex) => setAnoConclusao(itemValue)}
                          >
                            {data.anoCurso.map((anoCurso) => (
                            <Picker.Item label={anoCurso.ano} value={anoCurso.value} key={anoCurso.id} />
                            ))}
                          </Picker>
                        </View>
                      </View>

                    </View>
                  </View>



                </View>

                <View style={stylesEditarCurso.containerInput}>
                  <Text style={stylesEditarCurso.labelInput}>Status</Text>
                  <View style={stylesEditarCurso.inputPicker}>
                    <Picker 
                      style={stylesEditarCurso.picker}
                      selectedValue={statusCurso}
                      onValueChange={(itemValue, itemIndex) => setStatusCurso(itemValue)}
                    >
                      {data.statusCurso.map((statusCurso) => (
                        <Picker.Item label={statusCurso.status} value={statusCurso.value} key={statusCurso.id}  />
                        ))}
                    </Picker>
                  </View>
                </View>

          </View>

          <View style={stylesEditarCurso.containerEditarCursoButtons}>
            
            <View style={stylesEditarCurso.containerCursoButtonExcluir}>
              <TouchableOpacity style={stylesEditarCurso.cursoButtonsExcluir}>
                  <Text style={stylesEditarCurso.cursoButtonsTextExcluir}>Excluir Curso</Text>
                </TouchableOpacity>
            </View>

            <View style={stylesEditarCurso.containerCursoButtons}>

              <TouchableOpacity style={stylesEditarCurso.cursoButtonsCancelar}>
                 <Text style={stylesEditarCurso.cursoButtonsTextCancelar}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={stylesEditarCurso.cursoButtonsSalvar}>
                 <Text style={stylesEditarCurso.cursoButtonsTextSalvar}>Salvar</Text>
              </TouchableOpacity>

            </View>
          
          </View>

        </View>
        <StatusBar backgroundColor='#fff' translucent barStyle={'dark-content'}/>

      </View>
    </ScrollView>
  );
}

