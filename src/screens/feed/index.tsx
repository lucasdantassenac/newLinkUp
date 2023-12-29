import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { BottomMenu } from '../../components/bottomMenu';

import { supabase } from '../../lib/supabase';
import { postCard } from '../../components/postCard';
import { Post } from '../../@types/posts';
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';

import { styles } from './styles';

import Icon from 'react-native-vector-icons/Entypo'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import {theme} from '../../theme';
export const Feed = () => {

  const [fetchError, setFetchError] = useState<string>('')
  const [posts, setPosts] = useState<any>(null)
  const [fetchUserError, setFetchUserError] = useState<string>('')
  const [users, setUsers] = useState<any>([])
  


  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data: postsData, error: postsError } = await supabase
          .from('posts')
          .select();
  
        if (postsError) {
          setFetchError("Não foi possível acessar os posts");
          setPosts(null);
          console.log(postsError);
          return;
        }
  
        if (postsData) {
          const postsWithAuthors = [];
          for (const post of postsData) {
            const { data: userData, error: userError } = await supabase
              .from('users')
              .select()
              .eq('id', post.author)
              .single();
  
            if (userError) {
              setFetchUserError("Não foi possível carregar o usuário");
              console.log(userError);
              continue;
            }
  
            if (userData) {
              postsWithAuthors.push({
                ...post,
                author: userData, // Associando o autor ao post
              });
            }
          }
  
          setPosts(postsWithAuthors);
          setFetchError('');
        }
      } catch (e) {
        console.error(e);
      }
    };
  
    fetchPosts();
  }, []);
  
  const renderPost = ({ item: post }:any) => {
    return postCard(post, post.author); // Passando o autor diretamente para o postCard
  };
  
  
     
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text>Link.UP</Text>
          <AntDesignIcon name='down' color={theme.COLORS.GRAY_700} style={styles.chatIcon}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name='chat' color={theme.COLORS.GRAY_700} style={styles.chatIcon}/>
        </TouchableOpacity>
      </View>
      {fetchError && (<Text>{fetchError}</Text>)}
      {posts && (
        <View>
          <FlatList
            data={posts}
            renderItem={(post) => renderPost(post)}
            keyExtractor={(post) => post.id.toString()}
          />
        </View>
      )}

      {/* <BottomMenu/> */}
    </View>
  );
};


