import React, { useState } from 'react'
import { Alert, View, Text, TouchableOpacity, Touchable, TextInput } from 'react-native'
import { supabase } from '../../lib/supabase'
import { Button, Input } from 'react-native-elements'

import { styles } from './styles'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routers/stack';

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
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <AntDesignIcon 
            name='arrowleft'
            size={30}
            color='black'
          />
        </TouchableOpacity>
        <Text 
          style={styles.backButton}
         >Voltar
         </Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.pageTitle}>Entrar</Text>
      </View>
      <View style={styles.inputContainer} >
        <Text style={styles.label}>Matrícula ou CPF</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@exemplo.com"
          autoCapitalize={'none'}
        />
      </View>
      <View style={styles.inputContainer} >
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
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
      
      {/* <View >
        <Button Text="Sign in" disabled={loading} onPress={() => signInWithEmail()} />
      </View> */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          
          onPress={() => signInWithEmail()} 
          style={styles.button}
          >
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        
      </View>
      
    </View>
  )
}