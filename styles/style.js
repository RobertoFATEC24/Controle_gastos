import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },

  total: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: 20,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333',
  },

  text: {
    fontSize: 15,
    marginBottom: 3,
    color: '#555555',
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#333333',
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
  },

  pickerContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },

  button: {
    backgroundColor: '#8B0000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },

  deleteButton: {
    backgroundColor: '#B22222',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#777777',
    marginTop: 30,
  },

});

export default styles;