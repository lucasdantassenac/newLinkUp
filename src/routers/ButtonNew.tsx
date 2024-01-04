import React from "react";
import { View , Text , StyleSheet} from "react-native";

import { Entypo } from '@expo/vector-icons';

export default function ButtonNew({color , size}:any) {
    return(

        <View style={styles.container}>

         
         <Entypo name="plus" color={color} size={size} />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      width:45,
      height:45,
      borderRadius: 40,
      backgroundColor: '#5E5E5E',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
   
    } 

})