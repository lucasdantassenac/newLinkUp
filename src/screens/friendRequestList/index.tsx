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
} from 'react-native';
import {styles} from './styles'
import { Divider, Icon } from 'react-native-elements';
import theme from '../../theme';
import { StatusBar } from 'expo-status-bar';

type FriendRequest = {
  id: number;
  name: string;
  course: string;
  profilePic: string;
};
type Course = {
  id:number, 
  name:string,
  members:number,
}
export const FriendList: React.FC = () => {
  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([]);
  const {courses, setCourses} = useState<Course[]>([])
  const [searchText, setSearchText] = useState<string>('');

  // Adicione uma lista de solicitações de amigo de exemplo
  useEffect(() => {
    setFriendRequests([
      {
        id: 1,
        name: 'João Jardim',
        course: 'Tecnologia da Informação',
        profilePic: 'https://via.placeholder.com/50',
      },
      {
        id: 2,
        name: 'Luiz Felipe',
        course: 'Tecnologia da Informação',
        profilePic: 'https://via.placeholder.com/50',
      },
      {
        id: 3,
        name: 'Peterson Henrique',
        course: 'Tecnologia da Informação',
        profilePic: 'https://via.placeholder.com/50',
      },
      {
        id: 4,
        name: 'Lucas Dantas',
        course: 'Enfermagem',
        profilePic: 'https://via.placeholder.com/50',
      },
      {
        id: 5,
        name: 'Gabriel Modesto',
        course: 'Gastronomia',
        profilePic: 'https://via.placeholder.com/50',
      },
      {
        id: 6,
        name: 'Gabriel Modesto',
        course: 'Gastronomia',
        profilePic: 'https://via.placeholder.com/50',
      },
      {
        id: 7,
        name: 'Gabriel Modesto',
        course: 'Gastronomia',
        profilePic: 'https://via.placeholder.com/50',
      },
    ]);
  }, []);

  useEffect(() => {
    setCourses([
      {
        id:1,
        name:'TI e Informática',
        members:200
      },
      {
        id:2,
        name:'TI e Informática',
        members:200
      },
    ])
  }, [])
  const acceptFriendRequest = (friendRequestId: number) => {
    setFriendRequests((prevState) => {
      return prevState.filter((item) => item.id !== friendRequestId);
    });
    Alert.alert('Amizade aceita!');
  };

  const rejectFriendRequest = (friendRequestId: number) => {
    setFriendRequests((prevState) => {
      return prevState.filter((item) => item.id !== friendRequestId);
    });
    Alert.alert('Solicitação rejeitada!');
  };

  const renderItem = ({ item }: { item: FriendRequest }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.profilePic} source={{ uri: item.profilePic }} />
      <View style={styles.textContainer}>
        <Text style={styles.friendName}>{item.name}</Text>
        <Text style={styles.friendCourse}>{item.course}</Text>
      </View>
      <View style={styles.itemButtonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.acceptButton]}
          onPress={() => acceptFriendRequest(item.id)}
        >
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.rejectButton]}
          onPress={() => rejectFriendRequest(item.id)}
        >
          <Text style={styles.rejectButtonText}>Rejeitar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.spacingContainer}>
        <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar"
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
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
        <Divider  style={styles.divider}/>
        <FlatList
          data={friendRequests}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          style={styles.flatList}

        />

      </View>
    </SafeAreaView>
  );
};

