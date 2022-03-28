import {getAll , insertItem, deleteById} from '../../db'

export const ADD_ITEM = 'ADD_ITEM'
export const GET_ALL = 'GET_ALL'
export const DELTE_ITEM = 'DELTE_ITEM'

export const addItem = (type, name, more) => {
  return async dispatch => {

    const result = await insertItem(
      type,
      name,
      more,
    )

    console.log(result)

    dispatch({
        type: ADD_ITEM,
        item: {
          type: type,
          name: name,
          more: more
        }
    })
  }
}


export const loadItems = () => {
  return async dispatch => {
      try {
          const result = await getAll()
          console.log(result)
          dispatch({
              type: GET_ALL,
              items: result.rows._array,
          })
      } catch(error) {
          console.log(error);
      }
  }
}

export const deleteItem = (id) => {
  return async dispatch => {
      try {
          const result = await deleteById(id)
          console.log("id" + id)
          const items = await getAll()
          console.log(result)
          dispatch({
              type: GET_ALL,
              items: items.rows._array,
          })
      } catch(error) {
          console.log(error);
      }
  }
}