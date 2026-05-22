import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';

const groups = require('./assets/data/kpop_girl_groups.json');
const bannerLocal = require('./assets/images/south_korea_flag.png');
const localImages = {
  twice: require('./assets/images/twice.jpg'),
  blackpink: require('./assets/images/blackpink.png'),
  gidle: require('./assets/images/gidle.png'),
  ive: require('./assets/images/ive.png'),
  itzy: require('./assets/images/itzy.png'),
  red_velvet: require('./assets/images/red_velvet.jpg'),
  mamamoo: require('./assets/images/mamamoo.png'),
  aespa: require('./assets/images/aespa.jpg'),
  loona: require('./assets/images/loona.png'),
  oh_my_girl: require('./assets/images/oh_my_girl.png'),
  stayc: require('./assets/images/stayc.jpg'),
  apink: require('./assets/images/apink.jpg'),
};

export default function App() {
  const RemoteImage = ({ uri, style }) => {
    const [src, setSrc] = React.useState(uri);
    const triedOriginal = React.useRef(false);

    const handleError = () => {
      if (!triedOriginal.current && src.includes('/thumb/')) {
        triedOriginal.current = true;
        const backup = src.replace('/thumb/', '/').replace(/\/[^\/]+px-[^\/]+$/, '');
        setSrc(backup);
        return;
      }
      setSrc('https://via.placeholder.com/300.png?text=No+image');
    };

    return <Image source={{ uri: src }} style={style} onError={handleError} />;
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {localImages[item.id] ? (
        <Image source={localImages[item.id]} style={styles.avatar} />
      ) : (
        <RemoteImage uri={item.image} style={styles.avatar} />
      )}
      <View style={styles.cardText}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.meta}>{item.agency} • Debut: {item.debut}</Text>
        <Text style={styles.bio}>{item.members} membros</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={bannerLocal}
        style={styles.banner}
        resizeMode="contain"
      />

      <Text style={styles.title}>Grupos de K-pop femininos</Text>

      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

      <Image
        source={bannerLocal}
        style={[styles.banner, { height: 40 }]}
        resizeMode="contain"
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  banner: {
    width: '100%',
    height: 60,
    marginVertical: 8,
  },
  list: {
    paddingHorizontal: 12,
    paddingBottom: 24,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#bfe0f5',
    borderRadius: 12,
    padding: 12,
    marginVertical: 6,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 12,
  },
  cardText: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#12345a',
    marginVertical: 6,
  },
  meta: {
    fontSize: 12,
    color: '#1f4068',
    marginBottom: 2,
  },
  bio: {
    fontSize: 12,
    color: '#12345a',
  },
});
