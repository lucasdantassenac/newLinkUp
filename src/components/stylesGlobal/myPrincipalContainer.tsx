import { StyleSheet } from 'react-native';
import myColors from '../../components/stylesGlobal/myColors';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const myPrincipalContainer = StyleSheet.create({

    containerPrincipal: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: myColors.padraoBackground1.backgroundColor,
        width: '100%',
        height: 'auto',
        padding:10,
        position: 'absolute',
        zIndex: 1,
        },

    containerPrincipalCadastro: {
        flex: 1,
        height: windowHeight,
        padding:10,
        top: 0,
        left: 0,
        width: '100%',
        position: 'absolute',
        zIndex: 1,
        },
  
      subcontainerPrincipal: {
        width: '100%',
        height: 'auto',
        // backgroundColor: 'tomato',
        paddingHorizontal: 20,
        marginTop: 30,
      },

});

export default myPrincipalContainer;