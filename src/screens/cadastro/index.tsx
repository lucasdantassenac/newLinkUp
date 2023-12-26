import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert, Button} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routers/stack';
import { styles } from './styles'
import { supabase } from '../../lib/supabase'
import { Session } from '@supabase/supabase-js'


export default function Cadastro() {
    
    const navigation = useNavigation<StackTypes>();
    const [loading, setLoading] = useState(true)
    const [textoInput, setTextoInput] = useState(''); 
    const [botaoAtivo, setBotaoAtivo] = useState(true); 
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


  
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
        .insert([{ uid: userId, name: name}]);

      if (userError) {
        Alert.alert('Error adding user data:', userError.message);
      } else {
        console.log('User data added successfully to cadastrados!');
        
      }
    }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 10}}>
          <View style={{backgroundColor: '#5d5d5d', borderRadius: 30, height: 7, width: 85, marginRight: 7}}><Text></Text></View>
          <View style={{backgroundColor: '#d9d9d9', borderRadius: 30, height: 7, width: 85, marginRight: 7}}><Text></Text></View>
          <View style={{backgroundColor: '#d9d9d9', borderRadius: 30, height: 7, width: 85, marginRight: 7}}><Text></Text></View>
        </View>
        <View style={styles.areainput}>
          <View style={styles.back}>
                <TouchableOpacity style={styles.buttonback} onPress={()=>{navigation.navigate('ConsultaMatricula');}}>
                  <Icon name='arrowleft' size={30} style={{fontWeight:'bold'}} />
                  <Text style={styles.textback}>Voltar</Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
          </View>
          <View style={styles.teste}>
              <Text style={styles.cadastrotext}>Cadastro</Text>
              <Text style={styles.inputtext}>Nome de usuário</Text>
              <TextInput style={styles.matriculaoucpf} onChangeText={(text) => setName(text)} value={name}/>
              <Text style={styles.inputtext}>E-mail</Text>
              <TextInput style={styles.matriculaoucpf} onChangeText={(text) => setEmail(text)} value={email}/>
              <Text style={styles.inputtext}>Senha</Text>
              <TextInput style={styles.matriculaoucpf} onChangeText={(text) => setPassword(text)} value={password}/>
              
          </View>

          <TouchableOpacity 
            style={
              [
                styles.button, 
                botaoAtivo ? styles.botaoAtivo : styles.botaoInativo
              ]
            } 
            disabled={
              loading
            } 
            onPress={() => signUpWithEmail()}>
              <Text style={styles.avancar}>Avançar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
           
            onPress={() => signUpWithEmail()}>
              <Text >Avançar</Text>
          </TouchableOpacity>

          
        

        </View>

      </ScrollView>

    </View>
    
  );
}

