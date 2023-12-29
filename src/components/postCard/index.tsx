import { Image, Text, View } from "react-native"
import { Post } from "../../@types/posts"
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export const postCard = (
  {
    posts_description, 
    posts_photobase64='', 
    posts_like=0, 
    posts_comment_quantity=0,
  }:any,
  currentUser:any
) => {
    console.log(currentUser)
  return (
      <View>
        
        <Text>{posts_description}</Text>
        {posts_photobase64 &&  <Image style={styles.postCardImage} source={{uri: `${posts_photobase64}`}} />}
        <View>
          <AntDesignIcon 
              name='like2'
              size={30}
              color='black'
          />
          <Text>{posts_like || 0}</Text>

          <Icon 
              name='comment-o'
              size={30}
              color='black'
          />
          <Text>{posts_comment_quantity || 0}</Text>
        </View>
      </View>
  )
}