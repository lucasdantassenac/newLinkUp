import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather} from '@expo/vector-icons';
import { Feed } from '../screens/feed';
import Cadastro from '../screens/cadastro';
import { Login } from '../screens/login';
import { ConfigureProfile } from '../screens/configureProfile';
import { FriendList } from '../screens/friendRequestList';
import { EditarSobre } from '../screens/profileUser/editarSobre';
import { Interesses } from '../screens/cadastro/interesses';
import React from 'react';



const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{ headerShown: false}}>
    
    <Tab.Screen 
    name="Lu"
    component={Feed}
    options={{
        tabBarIcon: ({color , size}) => <Feather name="home" color={color} size ={size}/>
    }}
    
    />
  
    <Tab.Screen 
    name="list"
    component={FriendList}
    options={{
    tabBarIcon: ({color , size}) => <Feather name="users" color={color} size ={size}/>
    }}
    />
   
   
    <Tab.Screen 
    name="Config"
    component={ConfigureProfile}
    options={{
        tabBarIcon: ({color , size}) => <Feather name="settings" color={color} size ={size}/>
    }}
   
   />
     <Tab.Screen 
    name="profile"
    component={Interesses}
    options={{
        tabBarIcon: ({color , size}) => <Feather name="user" color={color} size ={size}/>
    }}
    />
   
     
        </Tab.Navigator>
    )
}   