import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF', // Branco
    },
    searchBar: {
      backgroundColor: '#fff', // Verde
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchInput: {
      flex: 1,
      backgroundColor: '#fff', // Branco
      borderRadius: 20,
      padding: 10,
      paddingHorizontal:24,
      borderColor:'#000',
      borderWidth:1

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
      backgroundColor: '#ddd',
      marginHorizontal: 5,
    },
    tabButtonText: {
      color:'#fff',
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
    itemText: {
      color: '#000', // Branco
      fontSize: 16,
    },
    itemButtonContainer: {
      marginLeft: 20,
      alignItems: 'flex-end',
      flexDirection: 'row',
    },
    button: {
      paddingHorizontal: 15,
      paddingVertical: 5,
      borderRadius: 20,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    acceptButton: {
      backgroundColor: '#1A73E8', // Azul para aceitar
    },
    rejectButton: {
      backgroundColor: '#FF4500', // Laranja para rejeitar
    },
    buttonText: {
      color: '#FFFFFF', // Branco
    },
  });