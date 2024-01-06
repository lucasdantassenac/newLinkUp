import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, ScrollView, Alert, Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routers/stack';
import { styles } from './stylesCadastro'
import { supabase } from '../../lib/supabase'
import { Session } from '@supabase/supabase-js'
import {Picker} from '@react-native-picker/picker';
import navigatorBar from './../../components/stylesGlobal/navigatorBar';
import viewColor from '../../components/stylesGlobal/myColors';
import myInputs from '../../components/stylesGlobal/inputs';
import myButtons from '../../components/stylesGlobal/myButtons';
import myPrincipalContainer from '../../components/stylesGlobal/myPrincipalContainer';
import myStatusBar from '../../components/stylesGlobal/statusBarProgress';
import StyleDesenho from './StyleDesenho';

export default function Cadastro() {
    
    const navigation = useNavigation<StackTypes>();
    const [loading, setLoading] = useState(true)
    const [textoInput, setTextoInput] = useState(''); 
    const [botaoAtivo, setBotaoAtivo] = useState(true); 
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [courseName, setCourseName] = useState(['']);
    const [courseNameSelected, setCourseNameSelected] = useState('');
    const [lastname, setLastname] = useState('')
    const [password, setPassword] = useState('')


    useEffect(() => {
      fetchCourse();
    }, []);


    async function fetchCourse() {
      try {
        setLoading(true)
  
        const { data, error, status } = await supabase
          .from('courses')
          .select(`courseName` )

        if (error && status !== 406) {
          throw error
        }
  
        if (data) {
          const courseNames = data.map(course => course.courseName)
          setCourseName(courseNames)

          console.log(data)
          
          
        }
      } catch (error) {
        if (error instanceof Error) {
          Alert.alert(error.message)
        }
      } finally {
        setLoading(false)
      }
    }

    const handleInputChange = (texto: string) => {

      setTextoInput(texto);
      
      setBotaoAtivo(texto.trim() !== '');
    
    };

    async function signInWithEmail() {
      setLoading(true)
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
  
      if (error) Alert.alert(error.message)
      setLoading(false)
    }
  
    async function signUpWithEmail() {
      setLoading(true)
      const {
        data: { session },
        error,
      } = await supabase.auth.signUp({
        email: email,
        password: password,
      })
  
      if (error) Alert.alert(error.message)
      if (!session) Alert.alert('Please check your inbox for email verification!')
      setLoading(false)

      const userId = session?.user.id;

      const { error: userError } = await supabase
        .from('users')
        .insert([{ uid: userId, name: name, lastname: lastname, courseName: courseNameSelected}]);

      if (userError) {
        Alert.alert('Error adding user data:', userError.message);
      } else {
        console.log('User data added successfully to cadastrados!');
        
      }
    }

  return (


  <View>
    <StyleDesenho/>

      <View style={myPrincipalContainer.containerPrincipalCadastro}>

        <View style={myStatusBar.statusBarProgress}>
          <View style={{backgroundColor: '#4FC5C5', borderRadius: 30, height: 7, width: 85, marginRight: 7}}><Text></Text></View>
          <View style={{backgroundColor: '#d9d9d9', borderRadius: 30, height: 7, width: 85, marginRight: 7}}><Text></Text></View>
          <View style={{backgroundColor: '#d9d9d9', borderRadius: 30, height: 7, width: 85, marginRight: 7}}><Text></Text></View>
        </View>

        <View style={navigatorBar.containerNav}>
          <TouchableOpacity style={navigatorBar.buttonback} onPress={() => navigation.goBack()}>
            <Icon name='arrowleft' size={30} style={{fontWeight:'bold', color: viewColor.padraoText2.color}} />
            <Text style={navigatorBar.textback2}>Voltar</Text>
          </TouchableOpacity>
        </View>

        <View style={myPrincipalContainer.subcontainerPrincipal}>
          
          <View style={styles.containerTitulo}>
            <Text style={styles.cadastroTitulo}>Cadastro</Text>
          </View>

          <View style={myInputs.containerPrincipalInputs}>
            
            <View style={myInputs.containerInput}>
              <Text style={myInputs.textInput}>Nome</Text>
              <TextInput style={myInputs.input} onChangeText={(text) => setName(text)} value={name}/>
            </View>

            <View style={myInputs.containerInput}>
              <Text style={myInputs.textInput}>Sobrenome</Text>
              <TextInput style={myInputs.input} onChangeText={(text) => setLastname(text)} value={lastname}/>
            </View>

            <View style={myInputs.containerInput}>
              <Text style={myInputs.textInput}>Nome do Curso</Text>
              <View style={myInputs.inputPicker}>
                <Picker 
                  style={myInputs.picker}
                  selectedValue={courseNameSelected}
                  onValueChange={(itemValue) =>  setCourseNameSelected(itemValue)}
                  >
                  {Array.isArray(courseName) && courseName.map((course, index)=> (
                  <Picker.Item label={course}  value={course} key={index.toString()} />
                    ))}
                </Picker>
              </View>
            </View>

            <View style={myInputs.containerInput}>
              <Text style={myInputs.textInput}>E-mail</Text>
              <TextInput style={myInputs.input} onChangeText={(text) => setEmail(text)} value={email}/>
            </View>

            <View style={myInputs.containerInput}>
              <Text style={myInputs.textInput}>Senha</Text>
              <TextInput style={myInputs.input} onChangeText={(text) => setPassword(text)} value={password}/>
            </View>
              
          </View>

          <View style={myButtons.containerButton}>
              <TouchableOpacity 
                style={
                  [
                    myButtons.buttonDefault, 
                  ]
                } 
                disabled={
                  loading
                } 
                onPress={() => signUpWithEmail()}>
                  <Text style={styles.avancar}>AvanÃ§ar</Text>
              </TouchableOpacity>
          </View>

        </View>

      </View>
      <StatusBar backgroundColor='#215151'/>     
  </View>  

  );
}

