import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('futurasMaratones.db')

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS futurasMaratones (
          id INTEGER PRIMARY KEY NOT NULL,
          type TEXT NOT NULL,
          name TEXT NOT NULL,
          more TEXT NOT NULL
        )`,
        [],
        () => { resolve() },
        (_, err) => { reject(err) },
      )
    });
  })
  return promise;
}

export const insertItem = (type, name, more) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO futurasMaratones (type, name, more)
            VALUES (?, ?, ?)`,
          [type, name, more],
          (_, result) => { resolve(result) },
          (_, err) => { reject(err)},
        )
      })
    })
  
    return promise;
  }
  
  export const getAll = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM futurasMaratones',
          [],
          (_, result) => { resolve(result) },
          (_, err) => { reject(err) },
        )
      })
    })
  
    return promise;
  }

  export const deleteById = (id) => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'DELETE FROM futurasMaratones where id=?',
          [id],
          (_, result) => { resolve(result) },
          (_, err) => { reject(err) },
        )
      })
    })
  
    return promise;
  }
  