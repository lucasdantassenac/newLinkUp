import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routers/stack';
import { styles } from './styles';
import { Session } from '@supabase/supabase-js'
import { GiftedChat } from "react-native-gifted-chat";

export  function AuthChat({ session }: { session: Session }) {
    const navigation = useNavigation<StackTypes>();

    const [textoInput, setTextoInput] = useState(''); // Estado para o valor do campo de input
    const [botaoAtivo, setBotaoAtivo] = useState(false); // Estado para controlar a ativação do botão
  
    const handleInputChange = (texto: string) => {
      setTextoInput(texto);
      // Verifique se o texto não está vazio para ativar/desativar o botão
      setBotaoAtivo(texto.trim() !== '');
    };

  return (
    <View style={styles.container}>
      
       <View style={{display:'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
      <SafeAreaView>
        <StatusBar style='auto'></StatusBar>
      
        <View style={styles.headerChat}>
          <TouchableOpacity style={styles.buttonback} onPress={() => navigation.goBack()} >
            <Icon name='arrowleft' size={30} />
          </TouchableOpacity>
          <View style={styles.photoandname}>
          <View style={styles.photo}></View>
          <Text style={styles.name}>Felipe</Text>
          </View>
          
        </View>
      </SafeAreaView>


      <SafeAreaView>
        <View><Text>TESTE</Text></View>
      </SafeAreaView>

      

      
      </View>
    </View>
    
  );
}

