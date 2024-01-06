import { StyleSheet } from 'react-native';
import myColors from '../../components/stylesGlobal/myColors';
import myDimensions from './myDimensions';

const footer = StyleSheet.create({

    containerFooter:{
        width: myDimensions.myConfig.width,
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
        textFooter2:{
            fontSize: 10,
            color: myColors.padraoText1.color,
            fontWeight: "400",
        },

});

export default footer;