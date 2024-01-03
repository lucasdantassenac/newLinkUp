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
        fontSize:theme.FONT_SIZE.MD,

    },
    userCourse:{
        fontSize:theme.FONT_SIZE.SM,
        color:theme.COLORS.GRAY_700
    },
    addButton:{
        backgroundColor:theme.COLORS.LIME_GREEN,
        borderRadius:theme.BUTTONS.RADIUS,
        justifyContent:'center',
        width:80,
        marginRight:5,
        height:35
    },
    addButtonText:{
        color:theme.COLORS.WHITE,
        textAlign:'center',
        fontSize:theme.FONT_SIZE.SM,
    },
    dotsIcon:{
        fontSize:21
    },
    postContainer:{

    },
    postButtonsContainer:{
        width:'20%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    postDescription:{
        marginTop:25,
        marginBottom:10,
        color:theme.COLORS.GRAY_700
    },
    postInteractionContainer:{
        display:'flex',
        flexDirection:'row',
        marginTop:10
    },
    postCardImage:{
        width:'100%',
        height:250,
        borderRadius:5,
        resizeMode:'contain'
    },
    likeIconContainer:{
        display:'flex',
        flexDirection:'row',
        marginRight:8
    },
    likeIcon:{
        marginRight:5
    },
    likesQuantity:{

    },
    commentIconContainer:{
        display:'flex',
        flexDirection:'row',
        marginRight:8

    },
    commentIcon:{
        marginRight:5
    },
    commentsQuantity:{

    },
   
})