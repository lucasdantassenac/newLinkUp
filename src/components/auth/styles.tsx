import { StyleSheet } from "react-native";  

export const styles = StyleSheet.create({
    container:{
        padding:24,
        marginTop:32
    },
    buttonContainer:{
        flex:1,
        alignItems:'center',
        marginTop:32,
        justifyContent:'center'

    },
    backButtonContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:32
    },
    titleContainer:{
        marginBottom:32
    },
    inputContainer:{
        marginBottom:32
    },
    forgetPasswordContainer:{
        marginTop:10
    },

    backButton:{
        fontSize:18
    },
    pageTitle:{
        color:"#504f4f",
        fontSize:32,
        fontWeight:'700',
    },
    label:{
        fontSize:16,
        letterSpacing:0.5,
        marginBottom:6,
        fontFamily:'Poppins_400Regular',
    },
    input:{
        borderRadius:25,
        borderColor:'#c9c9c9',
        borderWidth:1,
        padding:12
    },
    button:{
        backgroundColor: '#5E5E5E',
        color:"#fff",
        padding: 10,
        borderRadius: 30,
        marginTop: 20,
        marginBottom:10,
        textAlign:'center',
        maxWidth:350,
        width:250,
    },
    buttonText:{
        color: 'white',
        fontWeight: '400',
        fontSize: 16,
        textAlign:'center'
    },
    forgetPasswordText:{
        textAlign:'right'
    }
})

