import { StyleSheet } from 'react-native';
import myColors from '../../components/stylesGlobal/myColors';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const stylesInitialScreen = StyleSheet.create({
    
    containerLogo: {
        width:'100%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'aqua',
        marginTop: 80,
        },

    logo:{
        width:300,
        height:320,
        },

  containerTitulo:{
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: 'auto',
  },
    cadastroTitulo:{
      width: 'auto',
      height: 'auto',
      fontSize: 40,
      fontWeight: '600',
      color: myColors.padraoText2.color,
    },

    containerSubtitulo:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 'auto',
    },

    subtituloPadrãoCadastro:{
      width: '100%',
      height: 'auto',
      fontSize: 16,
      fontWeight: '300',
      color: myColors.padraoText2.color,
    },

    containerPrincipalButton:{
        width: '100%',
        height: 'auto',
        // backgroundColor: 'yellow',
        justifyContent:'center',
        marginTop: 50,
        paddingHorizontal: 30,
    },

    buttonText:{
        color: myColors.padraoText2.color,
        fontWeight: '400',
        fontSize: 16,
        textAlign:'center',
    },

    buttonTextRegister:{
        color: myColors.padraoText2.color,
        fontWeight: '400',
        fontSize: 16,
        textAlign:'center',
    },



  });