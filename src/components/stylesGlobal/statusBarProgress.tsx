import { StyleSheet } from 'react-native';
import myColors from './myColors';

const myStatusBar = StyleSheet.create({

  statusBarProgress:{
      // backgroundColor: 'tomato',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center', 
      alignItems: 'center',
      height: 20,
    },
});

export default myStatusBar;