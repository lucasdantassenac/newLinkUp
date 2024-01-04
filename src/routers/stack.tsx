import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import ConsultaMatricula from '../screens/consulta_matricula';
import Cadastro from '../screens/cadastro';
import {InitialScreen} from '../screens/initialScreen';
import {Login} from '../screens/login'
import {ConfigureProfile} from '../screens/configureProfile'
import { FriendList } from '../screens/friendRequestList';
import { Feed } from '../screens/feed';
import { Profile } from '../screens/profile';
import { ChatScreen } from '../screens/chatScreen';
import { EditarCurso } from '../screens/profileUser/editarCurso';
import { AdicionarCurso } from '../screens/profileUser/adicionarCurso';
import { EditarSobre } from '../screens/profileUser/editarSobre';
import { ProfileUser } from '../screens/profileUser';
import  { UserProfile  } from '../screens/userProfile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather} from '@expo/vector-icons';
import { Session } from '@supabase/supabase-js';



import { Interesses } from '../screens/cadastro/interesses';
import { Postagem } from '../screens/postagem';



const Stack = createNativeStackNavigator();

type User = {
  id: string;
  name: string;
  
};

type Stacknavigation = {
    Cadastro: undefined,
    ConsultaMatricula: undefined,
    Login:undefined,
    ConfigureProfile:undefined,
    FriendList:undefined,
    ChatScreen: undefined,
    EditarCurso: undefined,
    AdicionarCurso: undefined,
    EditarSobre: undefined,
    ProfileUser: undefined,
    UserProfile: { user: User },
    InitialScreen: undefined,
    Interesses: undefined,
    Postagem: undefined,
}
export type StackTypes = NativeStackNavigationProp<Stacknavigation>

const Tab = createBottomTabNavigator();

export  function TabRoutes({ session }: { session: Session }){
  return(
      <Tab.Navigator screenOptions={{ headerShown: false}}>

        

          <Tab.Screen 
              name="Home"
              component={Feed}
              options={{
                  tabBarIcon: ({color , size}) => <Feather name="home" color={color} size ={size}/>
              }}
          />
      
          <Tab.Screen 
              name="Solicitações"
              component={FriendList}
              options={{
                  tabBarIcon: ({color , size}) => <Feather name="users" color={color} size ={size}/>
              }}
          />
      
      
          <Tab.Screen 
              name="Configurações"
              component={ConfigureProfile}
              options={{
                  tabBarIcon: ({color , size}) => <Feather name="settings" color={color} size ={size}/>
              }}
          />

          <Tab.Screen 
              name="Perfil"
              component={ProfileUser}
              options={{
                  tabBarIcon: ({color , size}) => <Feather name="user" color={color} size ={size}/>
              }}
          />
      </Tab.Navigator>
  )
}   

export default function StackComponent() {
  return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
        <Stack.Screen name="Postagem" component={Postagem}  />
        <Stack.Screen name="FriendList" component={FriendList} />
        <Stack.Screen name="UserProfile" component={UserProfile} /> 
        <Stack.Screen name="ProfileUser" component={ProfileUser}  />
        <Stack.Screen name="EditarSobre" component={EditarSobre}  />
        <Stack.Screen name="AdicionarCurso" component={AdicionarCurso}  />
        <Stack.Screen name="EditarCurso" component={EditarCurso} />
        <Stack.Screen name="Configuracoes" component={ConfigureProfile} />
        <Stack.Screen name="Feed" component={Feed}  />
        <Stack.Screen name="Interesses" component={Interesses}  />
        <Stack.Screen name="FirstRegister" component={ConsultaMatricula}  />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="TabRoutes" component={TabRoutes} />
      </Stack.Navigator>
      </NavigationContainer>
    
  );
  
}