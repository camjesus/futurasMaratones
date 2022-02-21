import React , {useState }from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Login from './components/Login';
import { useFonts } from 'expo-font';
import FuturasMaratones from './components/FuturasMaratones';
import AppLoading from 'expo-app-loading';
import Typography from './constants/Typography';


export default function Main() {
  const [user, setUser] = useState('')

  const [loaded] = useFonts({
    Lato: require('./assets/fonts/ArchitectsDaughter-Regular.ttf'),
    [Typography.titleFont]: require('./assets/fonts/ArchitectsDaughter-Regular.ttf'),
  })

  if (!loaded) return <AppLoading />

  const handleSetUser = userSelected =>{
    setUser(userSelected)
  }
  let content =<Login setUserLogin={handleSetUser} />

  if (user) {
    content =  <FuturasMaratones user={user} />
  }

  

  return (
    <PaperProvider>
      {content}
    </PaperProvider>
  );
}