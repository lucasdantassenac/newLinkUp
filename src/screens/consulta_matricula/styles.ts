import { StyleSheet } from 'react-native';
import myColors from '../../components/stylesGlobal/myColors';

export const styles = StyleSheet.create({

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
 
    botaoAtivo:{
      backgroundColor: myColors.padraoBackground3.backgroundColor,
    },
  
    botaoInativo:{
      backgroundColor: myColors.padraoBackground6.backgroundColor,
          opacity: 0.4
      },
  
    avancar: {
      alignContent: 'center',
      color: myColors.padraoText2.color,
    },
    

  });