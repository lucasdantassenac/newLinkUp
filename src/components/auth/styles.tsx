import { StyleSheet } from "react-native";  
import myColors from "../stylesGlobal/myColors";

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

    forgetPasswordContainer:{
        marginTop:10,
    },

    forgetPasswordText:{
        textAlign:'right',
        color: myColors.padraoText2.color,
    },

    buttonText:{
        color: myColors.padraoText2.color,
        fontWeight: '400',
        fontSize: 16,
        textAlign:'center',
    },

})

