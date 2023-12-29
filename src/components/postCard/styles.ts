import { StyleSheet } from "react-native";
import {theme} from "../../theme";

export const styles = StyleSheet.create({
  
    userContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    userImage:{
        width:50,
        height:50,
        borderRadius:100
    },
    userInfoContainer:{
        display:'flex',
        flexDirection:'row',
    },
    userInfo:{    },
    userName:{
        fontSize:theme.FONT_SIZE.LG
    },
    userCourse:{
        fontSize:theme.FONT_SIZE.MD
    },
    addButton:{
        backgroundColor:theme.COLORS.LIME_GREEN,
        borderRadius:theme.BUTTONS.RADIUS,
        width:100,
        alignItems:'center'

    },
    addButtonText:{
        color:theme.COLORS.WHITE,
        textAlign:'center',
    },
    postContainer:{

    },
    postCardImage:{
        width:100,
        height:100,
        borderRadius:5
    },
   
})