import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SectionList,
  Alert,
  StyleSheet,
} from 'react-native';

export default function Conteudo({ sections, onAddTask, onRemoveTask }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const parseDateString = (s) => {
    if (!s || typeof s !== 'string') return null;
    const parts = s.split('/').map(p => p.trim());
    if (parts.length !== 3) return null;
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    const d = new Date(year, month, day);
    if (isNaN(d.getTime())) return null;
    return d;
  };

  const handleAdd = () => {
    if (!title.trim()) {
      Alert.alert('Aviso', 'Digite a tarefa');
      return;
    }
    if (!parseDateString(date)) {
      Alert.alert('Aviso', 'Data inválida. Use dd/mm/aaaa');
      return;
    }
    const ok = onAddTask(title.trim(), date.trim());
    if (ok) {
      setTitle('');
      setDate('');
    } else {
      Alert.alert('Erro', 'Não foi possível adicionar a tarefa. Verifique a data.');
    }
  };

  const confirmDelete = (item) => {
    Alert.alert('Confirmar exclusão', 'Deseja excluir esta tarefa?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => onRemoveTask(item.id) },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Digite a tarefa"
          placeholderTextColor="#333"
        />
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={setDate}
          placeholder="Data (ex: 10/05/2026)"
          placeholderTextColor="#333"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => confirmDelete(item)} style={styles.taskItem}>
            <Text style={styles.taskText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
        ListEmptyComponent={() => <Text style={styles.empty}>Nenhuma tarefa</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    alignItems: 'center',
    marginBottom: 12,
  },
  input: {
    width: '100%',
    backgroundColor: '#f6d98e',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginBottom: 10,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#7a170d',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
    width: '40%',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
  sectionHeader: {
    backgroundColor: '#dcdcdc',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  sectionHeaderText: {
    fontWeight: '700',
    color: '#333',
  },
  taskItem: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  taskText: {
    color: '#333',
  },
  empty: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
});
