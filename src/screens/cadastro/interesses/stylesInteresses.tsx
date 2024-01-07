import { StyleSheet, Dimensions } from 'react-native';
import { Poppins_900Black } from '@expo-google-fonts/poppins';
import myDimensions from '../../../components/stylesGlobal/myDimensions';
const viewInteresses = StyleSheet.create({

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
    color: 'white',
    fontSize: 16,
  },

  statusBarraProgresso:{
    // backgroundColor: 'tomato',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    height: 20,
    marginTop: 20,
  },

  containerPrincipalCadastro:{
    width: '100%',
    height: 'auto',
    paddingHorizontal: 20,
    marginTop: 30,
    // backgroundColor: 'tomato',
  },
    containerInteressesTitulo:{
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: 'auto',
      // backgroundColor: 'yellow',
      marginBottom: 30,
    },
      cadastroTitulo2:{
        width: 'auto',
        height: 'auto',
        // backgroundColor: 'aqua',
        fontSize: 40,
        fontWeight: '300',
        color: 'white',
      },

      containerSubtituloPadrao:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 'auto',
        // backgroundColor: 'aqua',
      },

      containerSubtituloPadrao2:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 'auto',
        marginTop: 15,
      },

      subtituloPadrãoCadastro:{
        width: '100%',
        height: 'auto',
        fontSize: 30,
        fontWeight: '600',
        color: 'white',
      },

      subtituloPadrãoCadastro2:{
        width: '100%',
        height: 'auto',
        fontSize: 16,
        fontWeight: '300',
        color: 'white',
      },

      containerInteresses:{
        // backgroundColor: 'greenyellow',
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 30,
      },

      buttonInteresse:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        height: 45,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 30,
        margin: 5,
      },

      textButtonInteresse:{
        color: '#5E5E5E',
        fontSize: 16,
      },


    containerButtons:{
      width: '100%',
      height: 'auto',
      // backgroundColor: 'red',
      marginTop: 30,
      marginBottom: 30,
    },
      containerInteressesButtons:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        height: 'auto',
        marginTop: 10,
      },

      interessesButtonsSalvar:{
          display: 'flex',
          justifyContent: 'center',
          width: '35%',
          height: 45,
          backgroundColor: '#4FC5C5',
          borderRadius: 30,
          marginHorizontal: 5,
        },

          interessesButtonsTextSalvar:{
            textAlign: 'center',
            color: 'white',
            fontSize: 16,
          },
});

export default viewInteresses;

