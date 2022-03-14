import React, {useState} from 'react';
import {Text, View, StyleSheet, Modal} from 'react-native'
import {Button,TextInput} from 'react-native-paper';
import globalStyles from '../styles/styles'
import {useDispatch } from 'react-redux';
import {setName} from '../store/actions/name.action'

export default function Login({}) {
  const dispatch = useDispatch();
  const [addUser, setAddUser] = useState('')
  const [modalVisibleL, setModalVisibleL] = useState(false)

  const handleSetUser = () => {
    if(addUser)
    {
      dispatch(setName(addUser));
    }else{
      setModalVisibleL(true);
    }
  }

  return (
    <View style={globalStyles.container}>
        <Text style={style.title}>Bienvenid@</Text>
        <Text style={style.subTitle}>Ingresá tu nombre para continuar</Text>
        <View style={style.userView}>
          <TextInput
            label="Usuario"
            value={addUser}
            style={globalStyles.input}
            onChangeText={(texto) => setAddUser(texto)}
          />
        <Button
          style={globalStyles.button}
          color='#F5CB5C'
          mode="contained"
          onPress={handleSetUser}>
            Entrar
          </Button>
      </View>
      
      <Modal 
      animationType='slide' 
      transparent={true}
      visible={modalVisibleL}>
        <View style={globalStyles.modal}>
          <View>
            <Text style={globalStyles.modalText} >Debe ingresar un Usuario</Text>
          </View>
          <View style={globalStyles.viewRow}>
              <Button
                style={globalStyles.buttonModal}
                color='#F5CB5C'
                mode="contained"
                onPress={() => setModalVisibleL(false)}
                >
              CANCELAR
              </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const style = StyleSheet.create({
  userView: {
    marginHorizontal: '20%'
},
  title: {
    marginBottom: '2%',
    fontSize: 25,
    textAlign: 'center',
    backgroundColor: '#D399FF',
    paddingVertical: 10,
    color: '#000000',
    fontWeight: 'bold',
    marginHorizontal: '15%'
},
  subTitle: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: '10%',
}
})