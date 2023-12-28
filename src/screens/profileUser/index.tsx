import 'react-native-url-polyfill/auto';
import { supabase } from '../../lib/supabase';
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routers/stack';
import { SafeAreaView, StatusBar, View, Text, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import stylesProfile from './stylesProfile';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../consulta_matricula/styles';
import data from './db.json';
import { Session } from '@supabase/supabase-js';
import { Alert } from 'react-native';


export function ProfileUser({ session }: { session: Session }) {
  const navigation = useNavigation<StackTypes>()
  // const [fontsLoaded, fontsError] = useFonts({Poppins_700Bold, Poppins_400Regular, Poppins_500Medium})
  const [menuAtivo, setMenuAtivo] = useState('atividades');


  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  

  useEffect(() => {
    if (session) getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      if (!session?.user) throw new Error('No user on the session!')

      const { data, error, status } = await supabase
        .from('users')
        .select(`name, lastname`)
        .eq('uid', session?.user.id)
        .single()
      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setName(data.name)
        setLastname(data.lastname)
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }






  const [cursoInfo, setCursoInfo] = useState<{
    curso: string;
    turma: string;
    periodo: string;
    status: string;
    id: number;
  } | null>(null);
  
  useEffect(() => {
    try {
      const primeiroCurso = data.meusCursos[0];
      setCursoInfo(primeiroCurso);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  }, []);

  // 
  
  const [sobreEu, setSobreEu] = useState<{
    sobre: string;
  } | null>(null);

  useEffect(() => {
    try {
      const sobreEuData = data.infoSobre[0];
      setSobreEu(sobreEuData);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  }, []);





  const Conteudo = () => {
    switch (menuAtivo) {
      case 'atividades':
        return <Text></Text>;
      case 'publicacoes':
        return <Text></Text>;
      case 'cursos':
        return (
            <View>
              {data.meusCursos.map((curso) => (
                <View key={curso.id} style={stylesProfile.containerPrincipalCardCursos}>
                  <View style={stylesProfile.containercardCursos}>
                    <View style={stylesProfile.cardCursosConteudo}>
                      <>
                        <Text style={stylesProfile.cursosConteudoTitulo}>
                          Curso: <Text style={stylesProfile.cursosConteudoValor}>{curso.curso}</Text>
                        </Text>
                        <Text style={stylesProfile.cursosConteudoTitulo}>
                          Turma: <Text style={stylesProfile.cursosConteudoValor}>{curso.turma}</Text>
                        </Text>
                        <Text style={stylesProfile.cursosConteudoTitulo}>
                          Período: <Text style={stylesProfile.cursosConteudoValor}>{curso.periodo}</Text>
                        </Text>
                        <Text style={stylesProfile.cursosConteudoTitulo}>
                          Status: <Text style={stylesProfile.cursosConteudoValor}>{curso.status}</Text>
                        </Text>
                      </>
                    </View>
                    <View style={stylesProfile.cardCursosContainerLateral}>
                      <View style={stylesProfile.cardCursoContainerSelo}>
                        <Text>Selo</Text>
                      </View>
                      
                      <TouchableOpacity style={stylesProfile.cardCursoContainerEdit}>
                        <Icon2 style={stylesProfile.iconEditSobre} name='edit' size={30} onPress={() => navigation.navigate('EditarCurso')}/>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
                <View style={stylesProfile.containerPrincipalButtonAddCursos}>
                    <TouchableOpacity style={stylesProfile.containerButtonAddCursos} onPress={() => navigation.navigate('AdicionarCurso')}>
                      <View style={stylesProfile.buttonAddCursos}>
                        <Icon2 style={stylesProfile.iconEditAddCursos} name='add'/>
                        <Text style={stylesProfile.textEditAddCursos}>Adicionar Curso</Text>
                      </View>
                    </TouchableOpacity>
                </View>
            </View>
          );

      case 'sobre':
        return (
          <View style={stylesProfile.containerSobre}>

            <View style={stylesProfile.containerConteudoSobre}>
              <Text style={stylesProfile.conteudoSobreTexto}>
              {sobreEu ? sobreEu.sobre : 'Carregando...'}
              </Text>
            </View>

            <View style={stylesProfile.containerButtonEditSobre}>
              <TouchableOpacity style={stylesProfile.buttonEditSobre}>
                <Icon2 style={stylesProfile.iconEditSobre} name='edit' size={30} onPress={() => navigation.navigate('EditarSobre')}/>
              </TouchableOpacity>
            </View>

          </View>
        );
        

      default:
        return null;
    }
  };

  return(
    <ScrollView style={{ flex: 1 }}>
      <View style={stylesProfile.containerPrincipal}>

          <View style={stylesProfile.containerNav}>
            <TouchableOpacity style={stylesProfile.buttonback} onPress={() => supabase.auth.signOut()}>
              <Icon name='arrowleft' size={30} style={{fontWeight:'bold'}} />
              <Text style={stylesProfile.textback}>Voltar</Text>
            </TouchableOpacity>
          </View>

          <View style={stylesProfile.containerPerfil}>
            <View style={stylesProfile.containerPerfilUsuario}>
                
                <View style={stylesProfile.perfilUsuarioFoto}>
                  <Text>Foto</Text>
                </View>

                <View style={stylesProfile.perfilUsuarioInfo}>
                  <Text style={stylesProfile.infoNome}>{name} {lastname}</Text>
                  <Text style={stylesProfile.infoCurso}>Técnico em Informática</Text>
                </View>

                <TouchableOpacity style={stylesProfile.ButtonEditar}>
                  <View style={stylesProfile.PerfilUsuarioButtonEditar}>
                      <Text style={stylesProfile.textBtn}>Editar Perfil</Text>
                  </View>
                </TouchableOpacity>

            </View>

            <View style={stylesProfile.containerPerfilInfoStats}>
              <TouchableOpacity style={stylesProfile.perfilInfoStats}>
                <View style={stylesProfile.NumeradorStats}>
                  <Text style={stylesProfile.quantidadePessoas}>101</Text>
                </View>
                <View>
                <Text style={stylesProfile.text3}>Publicação</Text>
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity style={stylesProfile.perfilInfoStats}>
                <View style={stylesProfile.NumeradorStats}>
                  <Text style={stylesProfile.quantidadePessoas}>257</Text>
                </View>
                <View>
                  <Text style={stylesProfile.text3}>Seguidores</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={stylesProfile.perfilInfoStats}>
                <View style={stylesProfile.NumeradorStats}>
                  <Text style={stylesProfile.quantidadePessoas}>198</Text>
                </View>
                <View>
                <Text style={stylesProfile.text3}>Seguindo</Text>
                </View>
              </TouchableOpacity>

            </View>

            <View style={stylesProfile.containerPerfilMenu}>
              <TouchableOpacity style={stylesProfile.menuPerfil} onPress={() => setMenuAtivo('atividades')} >
                <View>
                  <Text style={stylesProfile.text3}>Atividades</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={stylesProfile.menuPerfil} onPress={() => setMenuAtivo('publicacoes')}>
                <View>
                  <Text style={stylesProfile.text3}>Publicações</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={stylesProfile.menuPerfil} onPress={() => setMenuAtivo('cursos')}>
                <View>
                  <Text style={stylesProfile.text3}>Cursos</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={stylesProfile.menuPerfil} onPress={() => setMenuAtivo('sobre')}>
                <View>
                  <Text style={stylesProfile.text3}>Sobre</Text> 
                </View>
              </TouchableOpacity>
            </View>
            
          </View>

          <View style={stylesProfile.containerPerfilConteudo}>
            <View>{Conteudo()}</View>
          </View>
      </View>
      </ScrollView>
  );
}

