import React , {useEffect, useState }from 'react';
import Login from '../components/Login';
import { useFonts } from 'expo-font';
import FuturasMaratones from '../components/FuturasMaratones';
import AppLoading from 'expo-app-loading';
import Typography from '../constants/Typography';
import { Provider as PaperProvider } from 'react-native-paper';
import {useSelector } from 'react-redux';

export default function MainNavigation() {
  const user = useSelector((state) => state.name.selectedName);

  const [loaded] = useFonts({
    Lato: require('../assets/fonts/ArchitectsDaughter-Regular.ttf'),
    [Typography.titleFont]: require('../assets/fonts/ArchitectsDaughter-Regular.ttf'),
  })

  if (!loaded) return <AppLoading />

 
  let content =<Login />

  if (user) {
    content =  <FuturasMaratones user={user} />
  }

  return (
    <PaperProvider >
        {content}
    </PaperProvider>
  );
}