import React, {useState} from 'react';
import {Text, View, FlatList, Modal} from 'react-native'
import {IconButton, Button,TextInput} from 'react-native-paper';
import globalStyles from '../styles/styles'


export default function FuturasMaratones() {
  const [name, setName] = useState('')
  const [more, setMore] = useState('')
  const [series, setSeries] = useState([])
  const [type, setSType] = useState('SERIE')
  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const addSerie = () => {
    setSeries([
      ...series,
      {
        id: Math.random().toString(),
        name: name,
        more: more,
        type: type
      },
    ])
    setName('')
    setMore('')
  }

  const handleOnDelete = (item) => () => {
    setModalVisible(true)
    setItemSelected(item)
  }

  const handleConfirmDelete = () => {
    const { id } = itemSelected
    setSeries(series.filter(item => item.id !== id))
    setModalVisible(false)
    setItemSelected({})
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Futuras Maratones</Text>
      <View style={globalStyles.nuevaCont}>
      <View style={globalStyles.viewRow}>
        <Text style={globalStyles.textNew}>Nueva {type}</Text>
          <View style={globalStyles.buttonsType}>
          <IconButton
                  icon="television"
                  color="#691CA4"
                  style={globalStyles.buttonType}
                  size={30}
                  onPress={() => setSType('SERIE')}
                />
                <IconButton
                  icon="movie-open-outline"
                  color="#691CA4"
                  style={globalStyles.buttonType}
                  onPress={() => setSType('PELICULA')}
                  size={30}
                />
           </View>
        </View>
        <TextInput
            label="Nombre"
            value={name}
            onChangeText={(texto) => setName(texto)}
            style={globalStyles.input}
          />
          <TextInput
            label="Más info"
            value={more}
            onChangeText={(texto) => setMore(texto)}
            style={globalStyles.input}
          />
        <Button
          style={globalStyles.add}
          color='#F5CB5C'
          mode="contained"
          onPress={addSerie}>
            Agregar
          </Button>
      </View>
      <FlatList
        data={series}
        renderItem={({ item }) => (
            <View style={globalStyles.item}>
                <View style={globalStyles.viewRow}>
                {item.type === 'SERIE' && (
               <View>
                <IconButton
                icon="television"
                color="#691CA4"
                style={globalStyles.iconItem}
                size={30}
              />
              <Text style={{textAlign: 'center'}}>Serie</Text> 
              </View>
                )}
                {item.type === 'PELICULA' && (
               <View>
                <IconButton
                icon="movie-open-outline"
                color="#691CA4"
                style={globalStyles.iconItem}
                size={30}
                />
                <Text style={{textAlign: 'center'}}>Pelicula</Text> 
                    </View>
                )}
              <View style={globalStyles.textBox}>
                  <View style={globalStyles.viewRow}>
                  <Text style={globalStyles.subtitle}>Nombre: </Text>
                  <Text style={globalStyles.data}>{item.name}</Text>
                  </View>
                  <View style={globalStyles.viewRow}>
                  <Text style={globalStyles.subtitle}>Mas info: </Text>
                  <Text style={globalStyles.data}>{item.more}</Text>
                  </View>
              </View>
              </View>
              <View style={globalStyles.viewRow}>

              <IconButton
                icon="delete"
                color="#FFFFFF"
                style={globalStyles.buttonDelete}
                onPress={handleOnDelete(item)}
                size={30}
              />
              </View>
            </View>
          )
        }
        keyExtractor={item => item.id}
      />

      <Modal 
      animationType='slide' 
      transparent={true}
      visible={modalVisible}>
        <View style={globalStyles.modal}>
          <View>
            <Text style={globalStyles.modalText} >¿Está seguro que desea eliminar?</Text>
            <Text style={globalStyles.modalItem} >{itemSelected.name}</Text>
          </View>
          <View style={globalStyles.viewRow}>
              <Button
                style={globalStyles.buttonModal}
                color='#F5CB5C'
                mode="contained"
                onPress={() => setModalVisible(false)}
                >
              CANCELAR
              </Button>
              <Button
              style={globalStyles.buttonModal}
              color='#F5CB5C'
              mode="contained"
              onPress={handleConfirmDelete}
              >
              CONFIRMAR
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}
