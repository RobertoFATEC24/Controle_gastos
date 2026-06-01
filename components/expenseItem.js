import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles/styles';

export default function ExpenseItem({
  item,
  onDelete,
}) {
  return (
    <View style={styles.card}>

      <Text style={styles.title}>
        {item.descricao}
      </Text>

      <Text style={styles.text}>
        Categoria: {item.categoria}
      </Text>

      <Text style={styles.text}>
        Valor: R$ {Number(item.valor).toFixed(2)}
      </Text>

      <Text style={styles.text}>
        Data: {item.data}
      </Text>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(item.id)}
      >
        <Text style={styles.buttonText}>
          Excluir
        </Text>
      </TouchableOpacity>

    </View>
  );
}