import { StyleSheet } from 'react-native';
import myColors from './myColors';

const myButtons = StyleSheet.create({

    containerButton:{
        width: '100%',
        height: 50,
        // backgroundColor: 'tomato',
        display: 'flex',
        justifyContent: 'center',
      },
 
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        height: 40,
        width: 110,
        marginLeft: 'auto',
      },
      
      buttonDefault:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        height: 40,
        width: 110,
        marginLeft: 'auto',
        backgroundColor: myColors.padraoBackground3.backgroundColor,
      },

      buttonLogin:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        height: 40,
        width: '100%',
        marginLeft: 'auto',
        backgroundColor: myColors.padraoBackground3.backgroundColor,
      },

      buttonLoginRegister:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        height: 40,
        width: '100%',
        marginLeft: 'auto',
        backgroundColor: myColors.padraoBackground1.backgroundColor,
      },

      containerButtonRegister:{
        width: '100%',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
      },

});

export default myButtons;