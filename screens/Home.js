import React, {
  useState,
  useEffect,
} from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

import ExpenseItem
from '../components/ExpenseItem';

import {
  initDatabase,
  getExpenses,
  deleteExpense,
} from '../database/database';

import styles
from '../styles/styles';

export default function HomeScreen({
  navigation,
}) {

  const [expenses, setExpenses] =
    useState([]);

  async function loadExpenses() {

    const data =
      await getExpenses();

    setExpenses(data);
  }

  useEffect(() => {

    initDatabase();

    loadExpenses();

    const unsubscribe =
      navigation.addListener(
        'focus',
        () => {
          loadExpenses();
        }
      );

    return unsubscribe;

  }, [navigation]);

  async function handleDelete(
    id
  ) {

    Alert.alert(
      'Excluir',
      'Deseja excluir este gasto?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress:
            async () => {

              await deleteExpense(
                id
              );

              loadExpenses();
            },
        },
      ]
    );
  }

  const total =
    expenses.reduce(
      (acc, item) =>
        acc +
        Number(item.valor),
      0
    );

  return (
    <View style={styles.container}>

      <Text style={styles.total}>
        Total: R$ {total.toFixed(2)}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate(
            'Adicionar'
          )
        }
      >
        <Text
          style={
            styles.buttonText
          }
        >
          Novo Gasto
        </Text>
      </TouchableOpacity>

      <FlatList
        data={expenses}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({
          item,
        }) => (
          <ExpenseItem
            item={item}
            onDelete={
              handleDelete
            }
          />
        )}
        ListEmptyComponent={
          <Text
            style={
              styles.emptyText
            }
          >
            Nenhum gasto
            cadastrado.
          </Text>
        }
      />

    </View>
  );
}