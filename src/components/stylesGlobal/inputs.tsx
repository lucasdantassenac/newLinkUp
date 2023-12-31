import { StyleSheet } from 'react-native';
import myColors from '../../components/stylesGlobal/myColors';
const myInputs = StyleSheet.create({

    containerPrincipalInputs:{
        // backgroundColor: 'black',
        height: 'auto',
        marginTop: 50,
        },
        containerInput:{
            width: '100%',
            height: 'auto',
            // backgroundColor: 'aqua',
            marginBottom: 25,
        },
            textInput:{
            color: myColors.padraoText2.color,
            fontSize: 16,
            },
            input:{
            // borderWidth: 1,
            borderRadius: 30,
            height: 45,
            paddingStart: 10,
            marginTop: 2,
            backgroundColor: myColors.padraoBackground6.backgroundColor,
            },

});

export default myInputs;