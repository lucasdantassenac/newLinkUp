import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { BottomMenu } from '../../components/bottomMenu';
import { supabase } from '../../lib/supabase';
import { Database } from '../../lib/database.types';
import { postCard } from '../../components/postCard';
import { Post } from '../../@types/posts';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/Entypo'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import theme from '../../theme';
export const Feed = () => {
  const [fetchError, setFetchError] = useState<string>('')
  const [posts, setPosts] = useState<any>(null)
  const [fetchUserError, setFetchUserError] = useState<string>('')
  const [users, setUsers] = useState<any>(null)
  useEffect(() => {
    const fetchPosts = async () => {
      const {data, error} = await supabase
        .from('posts')
        .select()

        if(error){
          setFetchError("Não foi possível acessar os posts")
          setPosts(null)
          console.log(error)
          return
        }

        if(data){
          setPosts(data)
          setFetchError('')
        }
      } 

      fetchPosts()

  }, [])

  const fetchUsers = async (userId:any) => {
    const {data, error} = await supabase
      .from('users')
      .select()
      .eq('id', userId)

      if(error){
        setFetchUserError("Não foi possível carregar o usuário")
        setUsers(null)
        console.log(error)
        return
      }

      if(data){
        setUsers(data)
        setFetchUserError('')
        return data
      }
  } 
  const renderPost = (postItem:any) => {
    const currentUser = fetchUsers(postItem.post_author)
    return postCard(postItem.item)
  }
  
     
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
            renderItem={post => renderPost(post.item)}
            keyExtractor={(post) => post.id.toString()}
          />
        </View>
      )}

      {/* <BottomMenu/> */}
    </View>
  );
};


