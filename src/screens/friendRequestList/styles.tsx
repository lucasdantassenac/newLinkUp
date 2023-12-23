import {StyleSheet} from 'react-native';
import theme from '../../theme';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    spacingContainer:{
      marginHorizontal:10,
      marginVertical:20,
    },
    searchBar: {
      backgroundColor: '#fff', // Verde
      margin:10,
      horizontalPadding:50,
      flexDirection: 'row',
      alignItems: 'center',
      borderColor:theme.COLORS.GRAY_200,
      borderWidth:1,
      borderRadius: 20,
    },
    searchInput: {
      flex: 1,
      justifyContent:'space-between',
      backgroundColor: '#fff', // Branco
      borderRadius: 20,
      padding: 10,
      paddingHorizontal:24,

      color:theme.COLORS.GRAY_200

    },
    searchIcon:{
      marginRight:10,
    },
    tabButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      
      
      backgroundColor: '#fff', // Verde
    },
    tabButton: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
      borderRadius: 50,
      backgroundColor: theme.COLORS.GRAY_200,
      marginHorizontal: 5,
    },
    tabButtonText: {
      color:'#fff',
    },
    divider:{
      color: theme.COLORS.GRAY_200,
      marginHorizontal:20,
      marginTop:10,
      marginBottom:30,
      width:'95%'
    },
    flatList:{
      height:'100%'
    },
    listContent: {
      paddingHorizontal: 0,
      paddingBottom: 20,
    },
    itemContainer: {
      backgroundColor: '#fff', // Verde
      borderRadius: 1,
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginBottom: 0,
      flexDirection: 'row',
      alignItems: 'center',
    },
    textContainer: {
      flex: 1,
      marginLeft: 20,
    },
    profilePic: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    friendName: {
      color: theme.COLORS.GRAY_700, 
      fontSize: 16,
    },
    friendCourse:{
      color: theme.COLORS.GRAY_300, 
      fontSize: 16,
    },
    itemButtonContainer: {
      flexDirection: 'column',
    },
    button: {
      paddingHorizontal: 15,
      paddingVertical: 5,
      borderRadius: 20,
      marginBottom: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    acceptButton: {
      backgroundColor: theme.COLORS.GRAY_700
    },
    rejectButton: {
      backgroundCOlor:theme.COLORS.WHITE,
      borderWidth:1,
      borderColor: theme.COLORS.GRAY_700
    },
    rejectButtonText:{
      color:'#000'
    },
    buttonText: {
      color: '#FFFFFF', // Branco
    },
  });