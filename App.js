import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import FuturasMaratones from './components/FuturasMaratones';

export default function Main() {
  return (
    <PaperProvider>
      <FuturasMaratones />

    </PaperProvider>
  );
}