import { StyleSheet } from 'react-native';
import myColors from '../../components/stylesGlobal/myColors';

const footer = StyleSheet.create({

    containerFooter:{
        width:'100%',
        height: 'auto',
        display:'flex',
        marginTop: 40,
        padding: 10,
        alignItems:'center',
        justifyContent:'center',
        position: 'absolute',
        bottom: 0,
    },
        textFooter:{
            fontSize: 10,
            color: myColors.padraoText2.color,
            fontWeight: "300",
            // fontFamily: 'Poppins_200ExtraLight',
            // fontFamily: defaultFonts.padrao1,
            // fontFamily: 'Poppins_900Black',
        },

});

export default footer;