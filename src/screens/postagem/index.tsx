import 'react-native-url-polyfill/auto'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, StatusBar, View, Text, TextInput, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native'
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import stylesEditarSobre from './stylesEditarSobre';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
// import { StackTypes } from '../../../routers/stack';
import {Picker} from '@react-native-picker/picker';
import { StackTypes } from '../../routers/stack';
// import { StackTypes } from '../../routers/stack';


export function Postagem() {
  // const [fontsLoaded, fontsError] = useFonts({Poppins_700Bold, Poppins_400Regular, Poppins_500Medium})
  const navigation = useNavigation<StackTypes>()

  return(
    <ScrollView>
      <View style={stylesEditarSobre.containerPrincipal}>

        <View style={stylesEditarSobre.containerNav}>
          <TouchableOpacity style={stylesEditarSobre.buttonback} onPress={() => navigation.navigate('ProfileUser')}>
            <Icon name='close' size={30} style={{fontWeight:'bold'}} />
            {/* <Icon name='closecircle' size={30} style={{fontWeight:'bold'}} /> */}
            
            
            <View style = {stylesEditarSobre.sobreButtonsSalvar}>
           
            <Text style={stylesEditarSobre.sobreButtonsTextSalvar}>Publicar</Text>
            
            </View>
         
           {/* <Text style={stylesEditarSobre.textback}>Voltar</Text> */}
             {/* <Text style={stylesEditarSobre.sobreButtonsSalvar}> 
                       </Text>  */}

          </TouchableOpacity>
        </View>

            {/* <View style={stylesEditarSobre.containerSobreButtons}> */}

                {/* <TouchableOpacity style={stylesEditarSobre.sobreButtonsCancelar}>
                  <Text style={stylesEditarSobre.sobreButtonsTextCancelar}>Cancelar</Text>
                  </TouchableOpacity> */}
                    
                    {/* <TouchableOpacity style={stylesEditarSobre.sobreButtonsSalvar}>
                     <Text style={stylesEditarSobre.sobreButtonsTextSalvar}>Publicar</Text>
                      </TouchableOpacity> */}

            {/* </View> */}
       
        <View style={stylesEditarSobre.containerPrincipalEditarSobre}>

          <View style={stylesEditarSobre.containerEditarSobreTitulo}>
            {/* <Text style={stylesEditarSobre.sobreTitulo}>Postagem</Text> */}
          </View>

          <View style={stylesEditarSobre.containerEditarSobreInputs}>
            <View style={stylesEditarSobre.containerInput}>
              {/* <Text style={stylesEditarSobre.labelInput}>Conte-nos um pouco sobre você</Text> */}
              <TextInput style={stylesEditarSobre.input} 
                cursorColor={'black'}
                multiline={true}
                numberOfLines={4}
                placeholder='No que você está pensando?'
              />
            </View>
          </View>

          <View style={stylesEditarSobre.containerEditarSobreButtons}>
          
          
          </View>

        </View>


      </View>
    </ScrollView>
  );
}

