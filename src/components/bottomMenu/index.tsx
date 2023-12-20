import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { Feed } from '../../screens/feed';
import { Profile } from '../../screens/profile';
import { Session } from '@supabase/supabase-js';
import { ConfigureProfile } from '../../screens/configureProfile';
import { FriendList } from '../../screens/friendRequestList';

const Tab = createBottomTabNavigator();

export const BottomMenu = () => {
  return (
    <Tab.Navigator
      initialRouteName='Feed'
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
        }}
      />
      <Tab.Screen
        name="Configurações"
        component={ConfigureProfile}
        options={{
          tabBarLabel: 'Configurações',
        }}
      />
      <Tab.Screen
        name="Lista de amigos"
        component={FriendList}
        options={{
          tabBarLabel: 'Lista de amigos',
        }}
      />
      
      {/* Adicione mais telas aqui, se necessário */}
    </Tab.Navigator>
  );
};

