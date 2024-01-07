import { StyleSheet, Dimensions } from 'react-native';

const stylesEditarPerfil = StyleSheet.create({

  container:{
    backgroundColor: 'tomato',
  },

  containerPrincipal: {
    flex: 1,
    height: 'auto',
    padding:10,
    // backgroundColor: 'greenyellow',
    },

  containerNav:{
    height:50,
    width:'100%',
    marginTop: 50,
    paddingHorizontal: 10,
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
    color: '#5E5E5E',
    fontSize: 16,
  },

    containerTitulo:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 'auto',
      // backgroundColor: 'red',
      marginBottom: 30,
    },
      titulo:{
        textAlign: 'center',
        width: 'auto',
        height: 'auto',
        // backgroundColor: 'aqua',
        fontSize: 27,
        fontWeight: '600',
      },

    containerPrincipalFoto:{
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow',
    },

        containerFoto:{
            width:150,
            height: 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            backgroundColor: 'aqua',
            borderRadius: 100,
        },

            iconEditFoto:{
              color: '#D3D3D3',
            },

    containerIconEditarFoto:{

        position: 'absolute',
        bottom: 1,
        right: 1,
    },

    containerInputs:{
      width: '100%',
      height: 'auto',
      paddingHorizontal: 20,
      marginTop: 35,
    },

      containerInput:{
        height: 90,
        marginTop: 10,
      },
      
      labelInput: {
        width: 350,
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        marginTop: 0,
        color: '#5E5E5E',
        paddingLeft:5,
      },
    
      input: {
        height: 45,
        width: '100%',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 30,
        color:'#5E5E5E',
      },

      inputPicker:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        width: '100%',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        borderRadius: 30,
        color:'#5E5E5E',
      },

      picker:{
        height: 'auto',
        width: '100%',
        color:'#5E5E5E',
      },

      containerButton:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: 'auto',
        marginTop: 30,
        marginBottom: 50,
      },


    buttonSalvar:{
        display: 'flex',
        justifyContent: 'center',
        width: '35%',
        height: 45,
        backgroundColor: '#5E5E5E',
        borderRadius: 30,
        marginHorizontal: 5,
    },

        buttonTextSalvar:{
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        },


});

export default stylesEditarPerfil;

