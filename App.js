import React from 'react';
import {Provider} from 'react-redux'
import store from './store'
import MainNavigation from './navigation/MainNavigation';
import { init } from './db';

init()
  .then(() => { console.log('Database initialized') })
  .catch((err) => {
    console.log('Database failed to connect')
    console.log(err.message)
  })

export default function Main() {

  return (
    <Provider store={store}>
       <MainNavigation />
    </Provider>
  );
}