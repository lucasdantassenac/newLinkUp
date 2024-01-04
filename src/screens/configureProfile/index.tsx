import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View ,Image, ScrollView } from 'react-native';
import { styles } from './styles';

export  function ConfigureProfile ()  {
// Configurações  //
 const profile= [
    {
      id: 1,
      profilePhoto: '',
      back: 'Voltar',
      email: 'Gabriel Modesto',
      email2: 'Gabriel_26@outlook.com.br' ,
      config: 'Configurações' ,
    },
  ] 

         //         Conta       //
  const account= [
    { id: 1, account: 'Conta' },
  ]
  
  const botton = [
    { id: 1, texto: 'Editar perfil' },
    { id: 2, texto: 'Segurança', },
    { id: 3, texto: 'Tema', }
  ];
  
        //           Suporte     //
  const support = [
    { id: 1,   support: 'Suporte' }
  ]
  
  const terms = [
     { id: 1, terms: 'Termos e políticas' },
    
  ]
     
      //               Ações          // 
  const actions = [
    { id: 1,  actions: 'Açôes' }
  ]
  
  const exit = [
     { id: 1, exit: 'Sair' },
    
  ]
  
  return (
    <View style={styles.container}>
      {
        profile.map((foto) => (
        <TouchableOpacity style = {styles.backButon} key={foto.id}>
            <Text style = {styles.backText}> {foto.back} </Text>
        </TouchableOpacity>
        ))
      }

      {/*              Configurações          */}
      <View>
        {profile.map((foto) => (
          <View style = {styles.profile} key={foto.id} >
            <Text style = {styles.config}> {foto.config} </Text>
            <Image
              style={styles.profilephoto}
              source={{
                uri: 'https://via.placeholder.com/50',
              }}
            />
            <Text style = {styles.profileText}> {foto.email} </Text>
            <Text style = {styles.profileText2}> {foto.email2} </Text>
          </View>
        ))}
      </View>
      {/*             Conta           */}
      <View style = {styles.account}> 
        { account.map((conta) => (
          <Text style = {styles.account} key={conta.id}> {conta.account} </Text>
        ))}  
      </View>
     <View>
        {botton.map((botao) => (
        <TouchableOpacity style = {styles.button} key={botao.id} >
            <Text style = {styles.buttonText1}> {botao.texto} </Text>
        </TouchableOpacity>
        ))}
    </View>
     {/*               Suporte                 */}
     
     <View style = {styles.support}> 
      { support.map((suporte) => (
        <Text style = {styles.support}>{suporte. support} </Text>
      ))}  
    </View>
    
    <View>
     {terms.map((suporte) => (
        <TouchableOpacity style = {styles.terms} key={suporte.id} >
          <Text style = {styles.buttonText1}> {suporte.terms} </Text>
        </TouchableOpacity>
      ))}
   </View>

    {/*                Ações           */}
     <View style = {styles.acoes}> 
      { actions.map((acoes) => (
        <Text style = {styles.acoes}> {acoes.actions} </Text>
      ))}  
    </View>
    <View>
     {exit.map((sair) => (
      <TouchableOpacity style = {styles.exit} key={sair.id} >
          <Text style = {styles.buttonText1}> {sair.exit} </Text>
      </TouchableOpacity>
      ))}

    </View>
  </View>
  );
};





