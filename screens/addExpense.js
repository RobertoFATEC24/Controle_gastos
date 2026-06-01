import React, {
  useState,
} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  Picker,
} from '@react-native-picker/picker';

import DateTimePicker
from '@react-native-community/datetimepicker';

import {
  insertExpense,
} from '../database/database';

import styles
from '../styles/styles';

export default function AddExpenseScreen({
  navigation,
}) {

  const [descricao, setDescricao] =
    useState('');

  const [categoria, setCategoria] =
    useState('');

  const [valor, setValor] =
    useState('');

  const [data, setData] =
    useState(new Date());

  const [showDate, setShowDate] =
    useState(false);

  function handleDate(
    event,
    selectedDate
  ) {

    setShowDate(false);

    if (selectedDate) {
      setData(selectedDate);
    }
  }

  async function handleSave() {

    if (
      !descricao ||
      !categoria ||
      !valor
    ) {
      Alert.alert(
        'Erro',
        'Preencha todos os campos.'
      );
      return;
    }

    if (
      Number(valor) <= 0
    ) {
      Alert.alert(
        'Erro',
        'O valor deve ser maior que zero.'
      );
      return;
    }

    try {

      await insertExpense(
        descricao,
        categoria,
        Number(valor),
        data.toLocaleDateString(
          'pt-BR'
        )
      );

      Alert.alert(
        'Sucesso',
        'Gasto cadastrado.'
      );

      navigation.goBack();

    } catch (error) {

      console.log(error);

      Alert.alert(
        'Erro',
        'Não foi possível salvar.'
      );
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.label}>
        Descrição
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a descrição"
        value={descricao}
        onChangeText={
          setDescricao
        }
      />

      <Text style={styles.label}>
        Categoria
      </Text>

      <View
        style={
          styles.pickerContainer
        }
      >
        <Picker
          selectedValue={
            categoria
          }
          onValueChange={
            setCategoria
          }
        >
          <Picker.Item
            label="Selecione"
            value=""
          />

          <Picker.Item
            label="Alimentação"
            value="Alimentação"
          />

          <Picker.Item
            label="Transporte"
            value="Transporte"
          />

          <Picker.Item
            label="Lazer"
            value="Lazer"
          />

          <Picker.Item
            label="Estudos"
            value="Estudos"
          />

          <Picker.Item
            label="Saúde"
            value="Saúde"
          />

          <Picker.Item
            label="Contas"
            value="Contas"
          />

          <Picker.Item
            label="Outros"
            value="Outros"
          />
        </Picker>
      </View>

      <Text style={styles.label}>
        Valor
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o valor"
        keyboardType="numeric"
        value={valor}
        onChangeText={
          setValor
        }
      />

      <Text style={styles.label}>
        Data
      </Text>

      <TouchableOpacity
        style={styles.input}
        onPress={() =>
          setShowDate(true)
        }
      >
        <Text>
          {data.toLocaleDateString(
            'pt-BR'
          )}
        </Text>
      </TouchableOpacity>

      {showDate && (
        <DateTimePicker
          value={data}
          mode="date"
          display="default"
          onChange={
            handleDate
          }
        />
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSave}
      >
        <Text
          style={
            styles.buttonText
          }
        >
          Salvar Gasto
        </Text>
      </TouchableOpacity>

    </View>
  );
}