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
      fontSize: 16,
      paddingStart: 5
      
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

    inputPicker:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: '100%',
      borderColor: '#D9D9D9',
      borderWidth: 1,
      borderRadius: 30,
      color:'#5E5E5E',
      marginBottom: 25
    },

    labelInput: {
      width: 350,
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 10,
      marginTop: 0,
      // backgroundColor: 'tomato',
      // fontFamily: 'Poppins_500Medium',
      // fontFamily: defaultFonts.padrao1,
      color: '#5E5E5E',
      paddingLeft:5,
    },
    picker:{
      height: 'auto',
      width: '100%',
      color:'#5E5E5E',
      paddingStart: 10
      
    },

    containerInput:{
      // backgroundColor: 'yellow',
      height: 90,
      marginTop: 10,
    },

  });