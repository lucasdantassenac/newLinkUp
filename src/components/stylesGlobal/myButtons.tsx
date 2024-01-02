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

});

export default myButtons;