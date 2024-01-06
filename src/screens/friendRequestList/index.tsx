import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
  TextInput,
  ScrollView,
} from 'react-native';
import {styles} from './styles'
import { Divider, Icon } from 'react-native-elements';
import {theme} from '../../theme';
import { supabase } from '../../lib/supabase';
import { Session } from '@supabase/supabase-js';

type FriendRequest = {
  uid: string;
  name: string;
  lastName:string;
  courseName: string;
  courseId:number;
  photobase64: string;
  isSuggestion?:boolean;
};
type Interest = {
  id:number, 
  name:string,
  members:number,
}
export const FriendList: React.FC = () => {
  const [session, setSession] = useState<Session| null>(null)
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([]);
  const [interests, setInterests] = useState<Interest[]>([])
  const [searchText, setSearchText] = useState<string>('');
  const [friendRequestList, setFriendRequestList] = useState<FriendRequest[]>([])
  const [searchError, setSearchError] = useState<boolean>(false); // Estado para controlar o erro de busca
  const [currentFriendByInterest, setCurrentFriendByInterest] = useState<any[]>([])
  const defaultUserImageBase64 = 'data:image/png;base64,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'
  async function logOut() {await supabase.auth.signOut()} 

  const removeUserRequest = async (userId:string, requesterId:string) => {
    try {
      const { data, error } = await supabase
        .from('friendRequestList')
        .delete()
        .eq('userId', userId)
        .eq('requesterId', requesterId);
  
      if (error) {
        throw error;
      }
  
      console.log('Solicitação removida com sucesso:', data);
    } catch (error:any) {
      console.error('Erro ao remover solicitação:', error.message);
    }
  };
  
  useEffect(() => {
      if(!session){
        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session)
        })
      
        supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session)
        })
      }
  }, [])

  useEffect(() => {
    if (session != null) {
      const fetchFriendsRequestList = async () => {
        try {
          const { data: friendRequestsData, error: friendRequestsError } = await supabase
            .from('friendRequestList')
            .select()
            .eq('userId', session.user.id);
  
          if (friendRequestsError) {
            console.error(friendRequestsError);
            return;
          }
  
          if (friendRequestsData && friendRequestsData.length > 0) {
            const friendIds = friendRequestsData.map((request) => request.requesterId);
            const userDataPromises = friendIds.map((friendId) =>
              supabase.from('users').select().eq('uid', friendId).single()
            );
  
            const userData = await Promise.all(userDataPromises);
  
            const friendRequestsWithUserData = userData.map((user) => user.data);
  
            setFriendRequestList(friendRequestsWithUserData);
          }
        } catch (e) {
          console.error(e);
        }
      };
  
      fetchFriendsRequestList();
    }
  }, [session]);

  useEffect(() => {
    const fetchFriendRequests = async () => {
      try {
        const { data: friendList, error: friendListError } = await supabase
        .from('friendsList')
        .select('friendId')
        .eq('userId', session?.user.id);

        if (friendListError) {
          throw friendListError;
        }
        const friendsId = friendList.map((friend:any) => friend.friendId)
        
        const { data, error } = await supabase
          .from('users')
          .select()
          .not('uid', 'in', "("+friendsId+")")

        if (error) {
          throw error;
        }

        // Se os dados forem encontrados, atualize o estado friendRequests
        if (data) {
          const users = data.map((user: any) => ({
            uid: user.uid,
            name: user.name,
            lastName: user.lastname,
            courseName:user.courseName,
            courseId:user.courseId,
            photobase64: user.photobase64,
            isSuggestion:true
          }));
          setFriendRequests(users);
        }
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    // Chame a função para buscar os dados ao montar o componente
    fetchFriendRequests();
  }, [session]);

  useEffect(() => {
    // Função para buscar os cursos do banco de dados
    async function fetchCourses() {
      try {
        const { data, error } = await supabase.from('courses').select();

        if (error) {
          throw error;
        }

        // Atualiza o estado "interests" com os cursos do banco de dados
        if (data) {
          const courses = data.map((course: any) => ({
            id: course.id,
            name: course.courseName,
            members: course.members || 0, // Define o número de membros como 0 inicialmente
          }));
          setInterests(courses);
        }
      } catch (error) {
        console.error('Erro ao buscar os cursos:', error);
        // Aqui você pode exibir um aviso para o usuário se houver um erro na busca
      }
    }

    // Chama a função para buscar os cursos quando o componente é montado
    fetchCourses();
  }, [])

 

  const fetchUsersByName = async (name: string) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .ilike('name', `%${name}%`); // Busca por nomes similares

      if (error) {
        throw error;
      }
      
      if (data.length === 0) setSearchError(true);
      else setSearchError(false);
      
      if (data) {
        setFriendRequests(data);
      }
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      // Lidar com o erro, se necessário
    }
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
    fetchUsersByName(text);
  };

  const acceptFriendRequest = (friendRequestId: string) => {
    

    const acceptFriend = async () => {
      const { data, error } = await supabase
        .from('friendsList')
        .insert([{ userId: session?.user.id, friendId: friendRequestId }]);
  
      if (error) {
        console.error('Erro ao adicionar amigo:', error);
        return;
      }

      setFriendRequests((prevState) => {
        return prevState.filter((item) => item.uid !== friendRequestId);
      });
      console.log('Amigo adicionado com sucesso:', data);
      if(session)removeUserRequest(session.user.id, friendRequestId )
      Alert.alert('Amizade aceita!');
    };
    acceptFriend()
   
  };

  const rejectFriendRequest = (friendRequestId: string) => {
    if(session)removeUserRequest(session.user.id, friendRequestId )
    
    setFriendRequests((prevState) => {
      return prevState.filter((item) => item.uid !== friendRequestId);
    });
    Alert.alert('Solicitação rejeitada!');
  };

  const renderItem = ({ item }: { item: FriendRequest }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.profilePic} source={{ uri: item.photobase64 || defaultUserImageBase64 }} />
      <View style={styles.textContainer}>
        <View style={styles.friendNameContainer}>
          <Text style={styles.friendName}>{item.name} </Text>
          <Text style={styles.friendName}>{item.lastName}</Text>
        </View>
        <Text style={styles.friendCourse}>{item.courseName}</Text>
      </View>
      <View style={styles.itemButtonContainer}>
        <TouchableOpacity
          style={!item.isSuggestion? [styles.button, styles.acceptButton]: [styles.button, styles.acceptButtonSuggestion]}
          onPress={() => acceptFriendRequest(item.uid)}
        >
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        {!item.isSuggestion &&
          <TouchableOpacity
            style={[styles.button, styles.rejectButton]}
            onPress={() => rejectFriendRequest(item.uid)}
          >
            <Text style={styles.rejectButtonText}>Rejeitar</Text>
          </TouchableOpacity>
        }
      </View>
    </View>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex:1}}>
        <View style={styles.spacingContainer}>
          <View style={styles.searchBar}>
              <TextInput
                style={styles.searchInput}
                placeholder="Pesquisar"
                value={searchText}
                onChangeText={handleSearch}
              />
              <Icon name='search' color={theme.COLORS.GRAY_200} style={styles.searchIcon}/>
            </View>
          <View style={styles.tabButtons}>
            <TouchableOpacity style={styles.tabButton}>
              <Text style={styles.tabButtonText}>Amigos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabButton}>
              <Text style={styles.tabButtonText}>Solicitações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabButton}>
              <Text style={styles.tabButtonText}>Grupos</Text>
            </TouchableOpacity>
          </View>
          {friendRequestList.length > 0 &&
            <>
            <Divider  style={styles.divider}/>
            <View style={styles.interestsInfoContainer}>
              <Text style={styles.interestTitle}>Solicitações de amizade</Text>
              <View style={styles.seeAllContainer}>
                <Text style={styles.peopleYouMayKnowText}>Pessoas que você talvez conheça</Text>
                <TouchableOpacity>
                  <Text style={styles.seeAllButtonText}>Ver todos</Text>
                </TouchableOpacity>
              </View>
            </View>
            <FlatList
              data={friendRequestList}
              renderItem={renderItem}
              keyExtractor={(item) => item.uid.toString()}
              contentContainerStyle={styles.listContent}
              style={styles.flatList}
            />
            </>
          }
          <Divider  style={styles.divider}/>
          {searchError && <Text>Nenhum resultado encontrado.</Text>}

          {
            interests.map((interest, index) => {
              // Filtrar os amigos com o mesmo interestId
              const friendsWithInterest = friendRequests.filter(
                (friend) => friend.courseId === interest.id
                ).slice(0, 3);
                if(friendsWithInterest.length > 0){
                  // Renderizar um FlatList para cada interesse
                  return (
                    <View key={interest.id}>
                      <View style={styles.interestsInfoContainer}>
                        <Text style={styles.interestTitle}>{interest.name}</Text>
                        <View style={styles.seeAllContainer}>
                          <Text style={styles.peopleYouMayKnowText}>Pessoas que você talvez conheça</Text>
                          <TouchableOpacity>
                            <Text style={styles.seeAllButtonText}>Ver todos</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <FlatList
                        data={friendsWithInterest}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.uid.toString()}
                        contentContainerStyle={styles.listContent}
                        style={styles.flatList}
                      />
                    </View>
                  );
                }
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

