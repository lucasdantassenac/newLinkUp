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

const Stack = createNativeStackNavigator();

type Stacknavigation = {
    Cadastro: undefined,
    ConsultaMatricula: undefined,
    Login:undefined,
    ConfigureProfile:undefined,
    FriendList:undefined,
    ChatScreen: undefined,
}

export type StackTypes = NativeStackNavigationProp<Stacknavigation>

export default function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="FriendsList" component={FriendList} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={InitialScreen}  />
        <Stack.Screen name="Configuracoes" component={ConfigureProfile} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="Feed" component={Feed}  />
        <Stack.Screen name="ConsultaMatricula" component={ConsultaMatricula}  />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

