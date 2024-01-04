import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert, Button, FlatList, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routers/stack';
import { supabase } from '../../lib/supabase'
import { Session } from '@supabase/supabase-js'
import {Picker} from '@react-native-picker/picker';
import { styles } from './styles';
import theme from '../../theme';



interface UserDetails {
    id: string;
    name: string;
    lastname: string;
    courseName: string;
  }

  type User = {
  id: string;
  name: string;
  lastname: string;
  courseName: string;
};


export function FriendList({ session }: { session: Session }) {
    
    const navigation = useNavigation<StackTypes>();
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([]);
    const [botaoAtivo, setBotaoAtivo] = useState(true); 
    const [email, setEmail] = useState('')
    const [name, setName] = useState(['']);
    const [searchText, setSearchText] = useState<string>('');
    const [userIDs, setUserIDs] =  useState<string[]>([]);
    const [courseName, setCourseName] = useState(['']);
    const [courseNameSelected, setCourseNameSelected] = useState('');
    const [lastname, setLastname] = useState([''])
    const [password, setPassword] = useState('')

    


    const [userDetails, setUserDetails] = useState<UserDetails[]>([]);

    useEffect(() => {
      async function fetchUserDetails() {
        try {
          const { data: users, error } = await supabase.from('users').select('uid, name, lastname, courseName');
  
          if (error) {
            throw error;
          }
  
          if (users) {
            const formattedUsers: UserDetails[] = users.map((user: { uid: string; name: string, lastname: string, courseName: string }) => ({
              id: user.uid,
              name: user.name,
              lastname: user.lastname,
              courseName: user.courseName
            }));
  
            setUserDetails(formattedUsers);
          }
        } catch (error) {
          
        }
      }
  
      fetchUserDetails();
    }, []);

    const handleUserPress = (user: User) => {
        navigation.navigate('UserProfile', { user });
      };

    

    
    async function signInWithEmail() {
      setLoading(true)
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
  
      if (error) Alert.alert(error.message)
      setLoading(false)
    }
  
    async function signUpWithEmail() {
      setLoading(true)
      const {
        data: { session },
        error,
      } = await supabase.auth.signUp({
        email: email,
        password: password,
      })
  
      if (error) Alert.alert(error.message)
      if (!session) Alert.alert('Please check your inbox for email verification!')
      setLoading(false)

      const userId = session?.user.id;

      const { error: userError } = await supabase
        .from('users')
        .insert([{ uid: userId, name: name, lastname: lastname, courseName: courseNameSelected}]);

      if (userError) {
        Alert.alert('Error adding user data:', userError.message);
      } else {
        console.log('User data added successfully to cadastrados!');
        
      }
    }

  return (
    
    <SafeAreaView>

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
            <View style={styles.containerNav}>
                <TouchableOpacity style={styles.buttonback} onPress={() => navigation.goBack()} >
                  <Icon name='arrowleft' size={30} />
                  <Text style={styles.textback}>Voltar</Text>
                </TouchableOpacity>
          
                
          </View>
                <View>
                    <Text style={styles.title}>Amigos</Text>
                    <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar"
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
            <Icon name='search' color={theme.COLORS.GRAY_200} style={styles.searchIcon}/>
          </View>
                    <FlatList
                        data={userDetails}
                        renderItem={({ item }) => (
                        <TouchableOpacity style={styles.containerfriend} key={item.id} onPress={() => handleUserPress(item)}>
                            <View style={styles.perfilUsuarioFoto}>
                                 <Text>Foto</Text>
                        </View>

                            <Text style={styles.nameuser}>{item.name} {item.lastname}</Text>
                         </TouchableOpacity>
      )}
                        keyExtractor={(item) => item.id ? item.id.toString() : ''}// Certifique-se de converter para string se o ID for numérico
    />
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
    
  );
}