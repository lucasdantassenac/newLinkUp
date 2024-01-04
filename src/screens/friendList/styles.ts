import { StyleSheet } from 'react-native';
import theme from '../../theme';


export const styles = StyleSheet.create({
    container: {
      height: 'auto',
      flex: 1,
      padding: 10,
      backgroundColor: '#FFFFFF',

    },

    perfilUsuarioFoto:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        marginBottom:10,
        marginRight: 10,
        backgroundColor:'aqua',
        height:50,
        width:50,
        borderRadius:100,
      },

      containerfriend:{

        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        
        
        

      },

      nameuser:{
        fontSize: 16,
      },

      title:{
      fontSize:35,
      marginBottom: 20,
      marginTop: 20,
      color: '#5d5d5d'


      },

      searchBar: {
        backgroundColor: '#fff', 
        margin:10,
        horizontalPadding:50,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor:theme.COLORS.GRAY_200,
        borderWidth:1,
        borderRadius: 20,
      },

      searchIcon:{
        marginRight:10,
      },

      searchInput: {
        flex: 1,
        justifyContent:'space-between',
        backgroundColor: '#fff', 
        borderRadius: 20,
        padding: 9,
        paddingHorizontal:24,
       
  
        color:theme.COLORS.GRAY_200
  
      },


      

      textback:{
        color: '#5E5E5E',
        fontSize: 16,
      },
    

      buttonback:{
        width: 90,
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
      },
      containerNav:{
        
        height:50,
        width:'100%',
        marginTop: 50,
        paddingHorizontal: 10,
      },

    
  });