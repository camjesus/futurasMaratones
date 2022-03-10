import React , {useState }from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Login from './components/Login';
import { useFonts } from 'expo-font';
import FuturasMaratones from './components/FuturasMaratones';
import AppLoading from 'expo-app-loading';
import Typography from './constants/Typography';
import {setName} from './store/actions/name.action'
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store'


export default function Main() {
  //const [user, setUser] = useState('')
  const dispatch = useDispatch();
  const user = useSelector(state => state.name);
  const [loaded] = useFonts({
    Lato: require('./assets/fonts/ArchitectsDaughter-Regular.ttf'),
    [Typography.titleFont]: require('./assets/fonts/ArchitectsDaughter-Regular.ttf'),
  })

  if (!loaded) return <AppLoading />

  const handleSetUser = userSelected =>{
    //setUser(userSelected)
    dispatch(setName(userSelected));
  }
  let content =<Login setUserLogin={handleSetUser} />

  if (user) {
    content =  <FuturasMaratones user={user} />
  }

  

  return (
    <Provider store={store}>
      <PaperProvider>
        {content}
      </PaperProvider>
    </Provider>
  );
}