import { StyleSheet } from "react-native";
import {theme} from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f6f6f6',
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    logoContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    logoText:{
        fontSize:theme.FONT_SIZE.MD,
        marginRight:5
    },
    arrowDownIcon:{

    },
    chatIconContainer:{

    },
    chatIcon:{
        fontSize:20
    },
})