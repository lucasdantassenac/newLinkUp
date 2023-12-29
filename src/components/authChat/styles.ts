import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      backgroundColor: '#fff',
      
      
      
      
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
      
    },
    inputtext: {
      fontSize:17,
      marginTop: 45,
      color: 'hsla(0, 0%, 37%, 1)'
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
      fontSize: 45,
      color: '#5d5d5d'
    },
  
  
    back:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      
      marginTop: -80,
     
      
    },
  
    textback: {
      marginLeft:10,
      fontSize: 18
  
    },
    buttonback: {
      marginRight: 75,
      
      
    },

    buscarInformacoesText:{
        fontSize: 17

    },

    headerChat: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#e5e5e5',
      paddingTop: 35,
      paddingBottom: 10,
      padding: 40
      
      
      

    },

    photo: {

      backgroundColor:'black',
      width:45,
      height: 45,
      borderRadius: 50,
      marginRight: 20

    },
    photoandname:{
      display: 'flex',
      flexDirection:'row',
      alignItems: 'center',
      
      
      
      
    },

    name:{

      fontFamily:'Poppins_400Regular',
      fontSize: 17

      
    }

    
  });