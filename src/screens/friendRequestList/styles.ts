import {StyleSheet} from 'react-native';
import {theme} from '../../theme';
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
      backgroundColor: '#fff', 
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
      backgroundColor: '#fff', 
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
      
      
      backgroundColor: '#fff', 
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
    },
    flatList:{
      height:'100%',
    },
    listContent: {
      paddingHorizontal: 0,
      paddingBottom: 20,
    },
    interestsInfoContainer:{
      marginVertical:10,
      marginHorizontal:10
    },
    interestTitle:{
      color:theme.COLORS.GRAY_700,
      fontSize:theme.FONT_SIZE.LG,
      paddingRight:12
    },
    seeAllContainer:{
      flexDirection:'row',
      justifyContent:'space-between'
      
    },
    peopleYouMayKnowText:{
      color:theme.COLORS.GRAY_700,
    },
    seeAllButtonText:{
      fontSize:theme.FONT_SIZE.LG,
      color:theme.COLORS.GRAY_700,
    },
    itemContainer: {
      backgroundColor: '#fff', 
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
    friendNameContainer:{
      display:'flex',
      flexDirection:'row',
    },
    friendName: {
      color: theme.COLORS.GRAY_700, 
      fontSize: 16,
    },
    friendCourse:{
      color: theme.COLORS.GRAY_300, 
      fontSize: 16,
      paddingRight:16
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
    acceptButtonSuggestion: {
      backgroundColor: theme.COLORS.GRAY_700,
      paddingVertical:10
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
      color: '#FFFFFF', 
    },
  });