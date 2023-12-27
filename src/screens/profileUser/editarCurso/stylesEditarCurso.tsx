import { StyleSheet, Dimensions } from 'react-native';
// import { padraoCores } from './global/myColors'; 
import { Poppins_900Black } from '@expo-google-fonts/poppins';

const alinhar = {
  display: 'flex',

};

const viewCadastro = StyleSheet.create({

  container:{
    backgroundColor: 'tomato',
  },

  containerPrincipal: {
    flex: 1,
    height: 'auto',
    padding:10,
    // backgroundColor: 'greenyellow',
    },

  containerNav:{
    height:50,
    width:'100%',
    marginTop: 50,
    paddingHorizontal: 10,
  },

  buttonback:{
    width: 90,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },

  textback:{
    color: '#5E5E5E',
    fontSize: 16,
  },


  containerPrincipalEditarCurso:{
    width: '100%',
    height: 'auto',
    // backgroundColor: 'tomato',
  },
    containerEditarCursoTitulo:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 'auto',
      // backgroundColor: 'red',
      marginBottom: 30,
    },
      cursoTitulo:{
        textAlign: 'center',
        width: 'auto',
        height: 'auto',
        // backgroundColor: 'aqua',
        fontSize: 27,
        fontWeight: '600',
      },

    containerEditarCursoInputs:{
      width: '100%',
      height: 'auto',
      // backgroundColor: 'blue',
      paddingHorizontal: 20,
    },

      containerInput:{
        // backgroundColor: 'yellow',
        height: 90,
        marginTop: 10,
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
        labelInputPeriodo:{
          width: 350,
          fontSize: 18,
          fontWeight: '600',
          marginBottom: 10,
          marginTop: 0,
          color: '#5E5E5E',
          paddingLeft:5,
          borderBottomWidth: .8,
          paddingBottom: 5,
          borderColor: '#D9D9D9',
        },
        labelInputPeriodoSub:{
          width: 350,
          fontSize: 16,

          marginBottom: 10,
          marginTop: 0,
          color: '#5E5E5E',
          paddingLeft:5,
        },
      
      containerPeriodo:{
        // backgroundColor: 'tomato',
        marginBottom: 10,
      },

      input: {
        height: 45,
        width: '100%',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 30,
        color:'#5E5E5E',
      },

      inputPicker:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        width: '100%',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 30,
        color:'#5E5E5E',
      },

      picker:{
        height: 'auto',
        width: '100%',
        color:'#5E5E5E',
      },

      containerPrincipalInputPeriodo:{
          display: 'flex',
          // backgroundColor: 'yellow',
          height: 'auto',
          marginTop: 10,
        },

        containerInputPeriodo:{
          display: 'flex',
          flexDirection: 'row',
          // backgroundColor: 'tomato',
          width: '100%',
          height:'auto',
        },
        subcontainerInputPeriodo:{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: 'aqua',
          width: '40%',
          height: 'auto',
          // borderWidth: 1,
          paddingHorizontal: 5,
        },
        inputPeriodo:{
          height: 45,
          width: '100%',
          borderColor: '#D9D9D9',
          borderWidth: 1,
          paddingHorizontal: 10,
          marginBottom: 10,
          borderRadius: 30,
          color:'#5E5E5E',
          // backgroundColor: 'red',
        },

    containerEditarCursoButtons:{
      width: '100%',
      height: 'auto',
      // backgroundColor: 'red',
      marginTop: 30,
      marginBottom: 30,
    },
      containerCursoButtons:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: 'auto',
        // backgroundColor: 'tomato',
      },
      cursoButtonsCancelar:{
          display: 'flex',
          justifyContent: 'center',
          width: '35%',
          height: 45,
          backgroundColor: '#C4C4C4',
          borderRadius: 30,
          marginHorizontal: 5,
        },

      cursoButtonsSalvar:{
          display: 'flex',
          justifyContent: 'center',
          width: '35%',
          height: 45,
          backgroundColor: '#5E5E5E',
          borderRadius: 30,
          marginHorizontal: 5,
        },

        cursoButtonsTextCancelar:{
            textAlign: 'center',
            color: 'white',
            fontSize: 16,
          },
          cursoButtonsTextSalvar:{
            textAlign: 'center',
            color: 'white',
            fontSize: 16,
          },
    containerCursoButtonExcluir:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
      // backgroundColor: 'tomato',
    },
      cursoButtonsExcluir:{
          display: 'flex',
          justifyContent: 'center',
          width: '35%',
          height: 45,
          borderRadius: 30,
          borderBottomWidth: 1,
          borderLeftWidth: .7,
          borderRightWidth: .7,
          marginHorizontal: 5,
          borderColor: '#5E5E5E' 
        },
        cursoButtonsTextExcluir:{
          textAlign: 'center',
          color: '#5E5E5E',
          fontSize: 13,
        },



});

export default viewCadastro;

