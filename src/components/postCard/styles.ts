import { StyleSheet } from "react-native";
import {theme} from "../../theme";

export const styles = StyleSheet.create({
    postCardContainer:{
        flex: 1,
        padding: 10,
        backgroundColor: theme.COLORS.WHITE,
        marginVertical:5
    },
    userContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    userImage:{
        width:50,
        height:50,
        borderRadius:100,
        marginRight:15
    },
    userInfoContainer:{
        display:'flex',
        flexDirection:'row',
    },
    userInfo:{    },
    userName:{
        fontSize:theme.FONT_SIZE.MD
    },
    userCourse:{
        fontSize:theme.FONT_SIZE.SM
    },
    addButton:{
        backgroundColor:theme.COLORS.LIME_GREEN,
        borderRadius:theme.BUTTONS.RADIUS,
        justifyContent:'center',
        width:100,
    },
    addButtonText:{
        color:theme.COLORS.WHITE,
        textAlign:'center',
        fontSize:theme.FONT_SIZE.SM,
    },
    postContainer:{

    },
    postDescription:{
        marginVertical:10
    },
    postInteractionContainer:{
        display:'flex',
        flexDirection:'row'
    },
    postCardImage:{
        width:'100%',
        height:250,
        borderRadius:5,
        objectFit:'cover'
    },
    likeIconContainer:{
        display:'flex',
        flexDirection:'row',
        marginRight:8
    },
    likeIcon:{

    },
    likesQuantity:{

    },
    commentIconContainer:{
        display:'flex',
        flexDirection:'row',
        marginRight:8

    },
    commentIcon:{

    },
    commentsQuantity:{

    },
   
})