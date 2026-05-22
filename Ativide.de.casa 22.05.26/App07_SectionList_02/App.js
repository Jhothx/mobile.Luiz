import React, { useState, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Cabecalho from './components/Cabecalho';
import Conteudo from './components/Conteudo';
import Rodape from './components/Rodape';

function parseDateString(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return null;
  const parts = dateStr.split('/').map(p => p.trim());
  if (parts.length !== 3) return null;
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);
  const d = new Date(year, month, day);
  if (isNaN(d.getTime())) return null;
  return d;
}

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, dateStr) => {
    const dateObj = parseDateString(dateStr);
    if (!dateObj) return false;
    const newTask = {
      id: Date.now().toString() + Math.random().toString(36).slice(2, 8),
      title,
      dateStr,
      dateObj,
    };
    setTasks(prev => [...prev, newTask]);
    return true;
  };

  const removeTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const sections = useMemo(() => {
    const map = {};
    tasks.forEach(t => {
      const key = t.dateStr;
      if (!map[key]) map[key] = { title: key, data: [], dateObj: t.dateObj };
      map[key].data.push(t);
    });
    const arr = Object.values(map);
    arr.sort((a, b) => a.dateObj - b.dateObj);
    // optional: sort items inside each section by title
    arr.forEach(s => s.data.sort((x, y) => x.title.localeCompare(y.title)));
    return arr;
  }, [tasks]);

  return (
    <View style={styles.container}>
      <Cabecalho />
      <Conteudo sections={sections} onAddTask={addTask} onRemoveTask={removeTask} />
      <Rodape />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6d8f6c',
    paddingTop: 30,
    paddingHorizontal: 18,
    justifyContent: 'space-between',
  },
});
