import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#3b71f3',
  },
  container_SECONDARY: {
    borderColor: '#3b71f3',
    borderWidth: 2,
  },
  
  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_SECONDARY: {
    color: '#3b71f3',
  },

  text_TERTIARY: {
    color: 'gray',
  },
});

export default styles;
