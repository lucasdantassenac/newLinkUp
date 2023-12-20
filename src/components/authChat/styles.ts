import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      padding: 40
      
    },
    areainput: {
      flex: 1,
      justifyContent: 'center',
      marginBottom: 150,
      
    },
    matriculaoucpf: {
      borderWidth: 0.3,
      borderRadius: 50,
      borderColor: '#000',
      height: 40,
      paddingStart: 10,
      marginTop: 2,
      marginBottom: 25
      
    },
    inputtext: {
      fontSize:16,
      
    },
  
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      
      borderRadius: 50,
      height: 40,
      width: 110,
      marginLeft: 'auto',
      marginTop: 30
      
    },
  
    botaoAtivo:{
      backgroundColor: '#000'
    },
  
    botaoInativo:{
          backgroundColor: '#000',
          opacity: 0.4
      },
  
    avancar: {
  
      alignContent: 'center',
      color: '#fff'
    },
  
    cadastrotext: {
      fontSize:45,
      marginBottom: 35,
      color: '#5d5d5d'
    },
  
    teste: {
      marginBottom: 35
    },
  
    back:{
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 100

    },
  
    textback: {
      marginLeft:10,
      fontSize: 18
  
    },
  
    buttonback: {
      flexDirection: 'row'
    },

    photo: {
      backgroundColor: '#111111'
    }
  });