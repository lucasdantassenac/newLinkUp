import { StyleSheet } from 'react-native';
import myColors from '../../components/stylesGlobal/myColors';

const viewNavigator = StyleSheet.create({

    containerNav:{
        height:50,
        width:'100%',
        marginTop: 50,
        paddingHorizontal: 10,
        // backgroundColor: 'greenyellow',
      },
    
      buttonback:{
        width: 90,
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
      },
    
      textback:{
        color: myColors.padraoText1.color,
        fontSize: 16,
      },

      textback2:{
        color: myColors.padraoText2.color,
        fontSize: 16,
      },

});

export default viewNavigator;