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
    height:20,
    width:'100%',
    marginTop: 40,
    paddingHorizontal: 20,
  },

  buttonback:{
    width: 332,
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'flex-end',
  },

  textback:{
    color: '#5E5E5E',
    fontSize: 16,
  },


  containerPrincipalEditarSobre:{
    width: '100%',
    height: 'auto',
    // backgroundColor: 'tomato',
  },
    containerEditarSobreTitulo:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 'auto',
      // backgroundColor: 'red',
      marginBottom: 30,
    },
      sobreTitulo:{
        textAlign: 'center',
        width: 'auto',
        height: 'auto',
        // backgroundColor: 'aqua',
        fontSize: 27,
        fontWeight: '600',
      },

    containerEditarSobreInputs:{
      width: '100%',
      height: 'auto',
      // backgroundColor: 'blue',
      paddingHorizontal: 20,
    },

      containerInput:{
        // backgroundColor: 'yellow',
        height: 'auto',
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

      input: {
        height: 250,
        width: '100%',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        paddingHorizontal: 10,
        padding: 10,
        marginBottom: 10,
        borderRadius: 15,
        color:'#5E5E5E',
        // backgroundColor: 'tomato',
        textAlignVertical: 'top',
      },

    containerEditarSobreButtons:{
      width: '100%',
      height: 'auto',
      // backgroundColor: 'red',
      marginTop: 30,
      marginBottom: 30,
    },
      containerSobreButtons:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: 'auto',
        // backgroundColor: 'tomato',
      },
      sobreButtonsCancelar:{
          display: 'flex',
          justifyContent: 'center',
          width: '35%',
          height: 45,
          backgroundColor: '#C4C4C4',
          borderRadius: 30,
          marginHorizontal: 5,
        },

      sobreButtonsSalvar:{
          display: 'flex',
          justifyContent: 'center',
          width: '30%',
          height: 35,
          backgroundColor: '#5E5E5E',
          borderRadius: 30,
          marginHorizontal: 0,
        },

        sobreButtonsTextCancelar:{
            textAlign: 'center',
            color: 'white',
            fontSize: 16,
          },
          sobreButtonsTextSalvar:{
            textAlign: 'center',
            color: '',
            fontSize: 17,
          },
    containerSobreButtonExcluir:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
      // backgroundColor: 'tomato',
    },
      sobreButtonsExcluir:{
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
        sobreButtonsTextExcluir:{
          textAlign: 'center',
          color: '#5E5E5E',
          fontSize: 13,
        },



});

export default viewCadastro;

