import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },

  title: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    padding: 20,
    borderRadius: 100,
    fontSize: 25,
    color: '#fff',
    backgroundColor: '#36602c',
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#633ed5',
    height: 60,
    width: 250,
    borderRadius: 100,
    marginVertical: 20,
  },

  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 18,
    padding: 10,
  },
});
