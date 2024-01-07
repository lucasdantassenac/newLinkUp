import React, { useState } from 'react'
import { Alert, View, Text, StatusBar, TouchableOpacity, Touchable, TextInput } from 'react-native'
import { supabase } from '../../lib/supabase'
import { Button, Input } from 'react-native-elements'
import { styles } from './styles'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routers/stack';
import Icon from 'react-native-vector-icons/AntDesign';
import StyleDesenho from './StyleDesenho';
import navigatorBar from './../../components/stylesGlobal/navigatorBar';
import viewColor from '../../components/stylesGlobal/myColors';
import footer from '../../components/stylesGlobal/footer';
import myInputs from '../../components/stylesGlobal/inputs';
import myButtons from '../../components/stylesGlobal/myButtons';
import myPrincipalContainer from '../../components/stylesGlobal/myPrincipalContainer';

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [fontsLoaded, fontsError] = useFonts({Poppins_700Bold, Poppins_400Regular, Poppins_500Medium})
  const navigation = useNavigation<StackTypes>();

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
  }

  return (

<View>

  <StyleDesenho/>
    <View style={myPrincipalContainer.containerPrincipalCadastro}>

      <View style={navigatorBar.containerNav}>
          <TouchableOpacity style={navigatorBar.buttonback} onPress={() => navigation.navigate('ProfileUser')}>
            <Icon name='arrowleft' size={30} style={{fontWeight:'bold', color: viewColor.padraoText2.color}} />
            <Text style={navigatorBar.textback2}>Voltar</Text>
          </TouchableOpacity>
      </View>

      <View style={myPrincipalContainer.subcontainerPrincipal}>
        <View style={styles.containerTitulo}>
          <Text style={styles.cadastroTitulo}>Entrar</Text>
        </View>
        
        <View style={myInputs.containerPrincipalInputs}>

          <View style={myInputs.containerInput}>
            <Text style={myInputs.textInput}>Matrícula ou CPF</Text>
            <TextInput style={myInputs.input}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="email@exemplo.com"
              autoCapitalize={'none'}
              />
          </View>

          <View style={myInputs.containerInput}>
            <Text style={myInputs.textInput}>Senha</Text>
            <TextInput style={myInputs.input}
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              placeholder="Sua senha"
              autoCapitalize={'none'}
              />
            <View style={styles.forgetPasswordContainer}>
              <Text style={styles.forgetPasswordText}>Esqueceu a senha?</Text>
            </View>
          </View>

          <View style={myButtons.containerButton}>
            <TouchableOpacity 
              onPress={() => signInWithEmail()} 
              style={myButtons.buttonLogin}
              >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>

      <View style={footer.containerFooter}>
          <Text style={footer.textFooter}>Copyright © 2023. Todos os direitos reservados · Privacy · Terms</Text>
      </View>

    </View>

    <StatusBar backgroundColor='transparent' translucent barStyle={'light-content'}/>

</View>
  )
}