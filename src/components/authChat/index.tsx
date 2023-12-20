import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routers/stack';
import { styles } from './styles'

export function AuthChat() {
    
    const navigation = useNavigation<StackTypes>();
    const [textoInput, setTextoInput] = useState(''); 
    const [botaoAtivo, setBotaoAtivo] = useState(false); 
  
    const handleInputChange = (texto: string) => {
      setTextoInput(texto);
      
      setBotaoAtivo(texto.trim() !== '');
    };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
          <View style={styles.back}>
                <TouchableOpacity style={styles.buttonback} onPress={() => navigation.goBack()} >
                  <Icon name='arrowleft' size={30} />
                </TouchableOpacity>
                <View style={styles.photo}><Text>g</Text></View>
                <StatusBar style="auto" />
          </View>
        </SafeAreaView>
        <View style={styles.areainput}>
          
          <View style={styles.teste}>
              
          </View>



          <TouchableOpacity>
            
          </TouchableOpacity>
        </View>

      </ScrollView>

    </View>
    
  );
}

