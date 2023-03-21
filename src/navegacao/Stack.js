import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../views/Login';
import EsqueceuSenha from '../views/EsqueceuSenha';
import ListaBatatas from '../views/ListaBatatas';
import EditarPerfil from '../views/EditarPerfil';
import Registrar from '../views/Registrar';
import LoginEN from '../views/LoginEN';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      useLegacyImplementation
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
      }}>
      <Tab.Screen name="ListaBatatas" component={ListaBatatas} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}

function MyDrawerLinguagem() {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Português" component={Login} />
      <Drawer.Screen name="English" component={LoginEN} />
    </Drawer.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="ListaBatatas"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Lista Batatas" component={ListaBatatas} />
      <Drawer.Screen name="Editar Perfil" component={EditarPerfil} />
      <Drawer.Screen name="Sair" component={Login} />
    </Drawer.Navigator>
  );
}

export default props => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{headerShown: false}}>
    <Stack.Screen
      name="Login"
      options={{title: 'Informações Iniciais'}}
      component={Login}
    />
    <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
    <Stack.Screen name="ListaBatatas" component={ListaBatatas} />
    <Stack.Screen name="Registrar" component={Registrar} />
    <Stack.Screen name="MyDrawer" component={MyDrawer} />
    <Stack.Screen name="MyDrawerLinguagem" component={MyDrawerLinguagem} />
  </Stack.Navigator>
);
