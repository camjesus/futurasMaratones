import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
    iconItem: {
        margin: 5,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        marginRight: 20
        },
      textBox: {
        fontSize: 13,
        justifyContent: 'center',
        },
      data: {
        marginTop: 5
        },
      subtitle: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 5
        },
      modalText: {
        margin: 5,
        textAlign: 'center',
      },
      button: {
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: "20%"
      },
      modal: {
        backgroundColor: '#FFFFFF', 
        padding: 20,
        marginHorizontal: '10%',
        marginVertical: '50%',
        elevation: 10,
        borderRadius: 10,
        justifyContent: 'center'
      },
      title: {
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: '#F5CB5C',
        paddingVertical: 20,
        color: '#000000',
        fontWeight: 'bold',
      },
      item: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 5,
        padding: 10,
        borderColor: '#691CA4',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#D399FF',
        justifyContent: 'space-between'
      },
      nuevaCont: {
        backgroundColor: '#D399FF',
        marginTop: '5%',
        margin: 20,
        padding: 10,
        borderColor: '#691CA4',
        borderWidth: 1,
        borderRadius: 10,
      },
      viewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      textNew: {
        marginStart: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
      },
      container: {
        justifyContent: 'center',
        flex: 1,
      },
      buttons: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        alignContent: 'flex-end'
      },
      buttonDelete: {
       backgroundColor: '#E13B49'
      },
      notCheck: {
        marginStart: 20,
        backgroundColor: 'black'
      },
      check: {
        backgroundColor: '#4BFF5F'
      },
      buttonCheck: {
        marginStart: 20,
        backgroundColor: 'black'
      },
      buttonsType: {
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      buttonType: {
        marginStart: 10,
        marginTop: 10,
        backgroundColor: '#FFFFFF',
      },
      input: {
        marginBottom: 2,
        backgroundColor: 'transparent',
      },
      modalItem: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 5
      },
      buttonModal: {
        marginTop: 10
      }
})

export default globalStyles;
