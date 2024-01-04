import { StyleSheet, Dimensions } from 'react-native';
// import { padraoCores } from './global/myColors'; 
import { Poppins_900Black } from '@expo-google-fonts/poppins';

const alinhar = {
};

const viewProfileUser = StyleSheet.create({

  container:{
    backgroundColor: 'tomato',
  },

  containerPrincipal: {
    flex: 1,
    height: 'auto',
    // display: 'flex',
      // padding:10,
      // backgroundColor: '#ffffff',
      // backgroundColor: 'greenyellow',
      // alignItems: 'center',
    },

  containerNav:{
    // backgroundColor:'tomato',
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

  containerPerfil:{
    // backgroundColor:'cyan',
    height:'auto',
    width:'100%',
  },

    containerPerfilUsuario:{
      display:'flex',
      alignItems:'center',
      justifyContent:'space-around',
      // backgroundColor:'#c3c3c3',
      height:250,
      width:'100%',

    },

      perfilUsuarioFoto:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        marginBottom:10,
        backgroundColor:'aqua',
        height:110,
        width:110,
        borderRadius:100,
      },

      perfilUsuarioInfo:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      },
        infoNome:{
          width: 'auto',
          height: 'auto',
          fontSize: 19,
          fontWeight: '600',
        },
        infoCurso:{
          fontSize: 16,
          fontWeight: '300',
        },

    PerfilUsuarioButton:{
      display:'flex',
      height:'100%',
      alignItems:'center',
      justifyContent:'center',
      margin:0,
      
    },

    ButtonEditar:{
      // backgroundColor:'tomato',
      width:100,
      height:35,
      borderRadius:30,
      backgroundColor:'#5E5E5E',
      marginLeft: 5
    },

    textBtn:{
      color:'white',
      // fontFamily: 'Poppins_400Regular',
      // fontFamily: defaultFonts.padrao1,
    },

  containerPerfilInfoStats:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor:'#d5c5c5',
    paddingHorizontal: 10,
    marginTop: 15,
    height:'auto',
    width:'100%',
  },

    perfilInfoStats:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width:100,
      height:50,
    },

      NumeradorStats:{
        width:'100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },

      quantidadePessoas:{
        color: '#5E5E5E',
        fontWeight: '800',
      },

      text3:{
        color: '#5E5E5E',
      },

  containerPerfilMenu:{
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'#F5F5F5',
    width:'100%',
    height:70,
    marginTop:15,
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#D1D1D1',
  },

    menuPerfil:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '22%',
      height: 60,
      // backgroundColor: 'white',
    },

    containerPerfilConteudo:{
      height:'auto',
      width:'100%',
      // paddingHorizontal: 10,
      marginTop: 10,
      // backgroundColor:'tomato',
    },

    // SOBRE

    containerSobre:{
      width: '100%',
      // backgroundColor: 'magenta',      
      paddingHorizontal: 10,
    },
      containerButtonEditSobre:{
        display: 'flex',
        alignItems:'flex-end',
        justifyContent: 'center',
        width:'100%',
        height: 40,
        // backgroundColor: 'cyan',
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: '#D1D1D1',
      },
        buttonEditSobre:{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: 'auto',
          height: 'auto',
        },
        containerConteudoSobre:{
          // backgroundColor: 'yellow',
          // paddingVertical: 10,
        },
        conteudoSobreTexto:{
          color: '#5E5E5E',
          fontWeight: '300',
          lineHeight: 22,
          // backgroundColor: 'tomato',
        },
        iconEditSobre:{
          color: '#D3D3D3',
        },

// CURSOS
  containerPrincipalCardCursos:{
    width: '100%',
    height: 'auto',
    // backgroundColor: 'tomato',
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

    containercardCursos:{
        width: '100%',
        height: 'auto',
        // backgroundColor: 'yellow',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 15,
        borderLeftWidth: 4,
        borderBottomWidth: 4,
        borderColor: '#D4D4D4',
        marginBottom: 15,
        borderWidth: .5,
      },

        cardCursosConteudo:{
          // backgroundColor: 'yellow',
          width: '85%',
          padding: 10,
          paddingLeft: 15,
        },
          cursosConteudoTitulo:{
            color: '#5E5E5E',
            fontWeight: '600',
            lineHeight: 30,
          },
          cursosConteudoValor:{
            color: '#5E5E5E',
            fontWeight: '400',
          },

          cardCursosContainerLateral:{
          width: '15%',
          height:'auto',
          // backgroundColor: 'magenta',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
            paddingHorizontal: 5,
        },

            cardCursoContainerSelo:{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 50,
              height: 50,
              borderRadius: 100,
              marginTop: 10,
              backgroundColor: '#D4D4D4',
            },
            cardCursoContainerEdit:{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              width: '70%',
              height: 'auto', 
              marginBottom: 10,
              // backgroundColor: 'blue',
            },


        containerPrincipalButtonAddCursos:{
          display: 'flex',
          alignItems:'center',
          justifyContent: 'center',
          width:'100%',
          height: 'auto',
          // backgroundColor: 'cyan',
          // marginTop: 10,
          marginBottom: 20,
          borderColor: '#D1D1D1',
        },

        containerButtonAddCursos:{
          width:'40%',
          height:35,
          borderRadius: 30,
          display:'flex',
          flexDirection: 'row',
          marginVertical: 10,
          backgroundColor:'#D1D1D1',
        },

        buttonAddCursos:{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems:'center',
          justifyContent: 'center',
        },
          iconEditAddCursos:{
            color: 'white',
            fontSize: 25,
          },
          textEditAddCursos:{
            color: 'white',
          },

// PUBLICAÇÕES
containerPrincipalCardPublicacoes:{
  width: '100%',
  height: 'auto',
  backgroundColor: 'tomato',
  display: 'flex',
  alignItems: 'center',
  paddingHorizontal: 10,
},


buttonsProfile:{
  display:'flex',
  flexDirection:'row',
  
},


});

export default viewProfileUser;

