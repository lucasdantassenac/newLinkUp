import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { BottomMenu } from '../../components/bottomMenu';
import { supabase } from '../../lib/supabase';
import { Database } from '../../lib/database.types';
import { postCard } from '../../components/postCard';
import { Post } from '../../@types/posts';

export const Feed = () => {
  const [fetchError, setFetchError] = useState<string>('')
  const [posts, setPosts] = useState<Post[]>([])
  
  useEffect(() => {
    const fetchPosts = async () => {
      const {data, error} = await supabase
        .from('posts')
        .select()

        if(error){
          setFetchError("Não foi possível acessar os posts")
          setPosts([])
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


 

  const renderPost = ({description, photoBase64Url='', likesQuantity, commentsQuantity, comments=['']} :Post) => {
    return (
      <postCard
        description={description}
        photoBase64Url={photoBase64Url}
        likesQuantity={likesQuantity}
        commentsQuantity={commentsQuantity}
        comments={comments}
      />
        
    );
  };

  return (
    <View style={styles.container}>
      {fetchError && (<Text>{fetchError}</Text>)}
      {posts && (
        <View>
          <FlatList
                data={posts}
                renderItem={renderPost}
                keyExtractor={(post) => post.id.toString()}
          />
          {/* {posts.map((post:any) => (
            <Text key={post.id}>{post.posts_description}</Text>
          ))} */}
        </View>
      )}

      {/* <BottomMenu/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  postContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

