import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const backgroundColor = '#F3F6FF';
const headerBackground = '#2A5BA8';
const screenTextColor = '#1F2940';
const subtitleTextColor = '#5F6C88';
const cardBackground = '#FFFFFF';
const cardAccent = '#D8E8FF';
const sectionTitleText = 'Tecnologia';
const headerTitleText = 'Categorias';
const headerDescriptionText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt.';
const cardDescriptionText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh.';
const fontSizeTitle = 22;
const fontSizeSubtitle = 14;
const fontSizeCardTitle = 16;
const fontSizeCardText = 13;

const imageCards = [
  {
    id: '1',
    image: {
      uri: 'https://images.unsplash.com/photo-1512499617640-c2f99958a6c4?auto=format&fit=crop&w=220&q=80',
    },
    title: 'Notificação importante',
  },
  {
    id: '2',
    image: {
      uri: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=220&q=80',
    },
    title: 'Novidade do dia',
  },
  {
    id: '3',
    image: {
      uri: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=220&q=80',
    },
    title: 'Dica importante',
  },
];

export default function App() {
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>      
      <StatusBar style="light" />
      <View style={styles.screen}>
        <View style={[styles.header, { backgroundColor: headerBackground }]}>          
          <View style={styles.topRow}>
            <View style={styles.profileWrapper}>
              <View style={styles.profileCircle} />
            </View>
            <View style={styles.badgeWrapper}>
              <View style={styles.badgeDot} />
            </View>
          </View>

          <View style={styles.headerContent}>
            <Text style={[styles.headerTitle, { color: '#FFFFFF', fontSize: fontSizeTitle }]}>App</Text>
            <Text style={[styles.headerDescription, { color: '#E8EEFF', fontSize: fontSizeSubtitle }]}>
              {headerDescriptionText}
            </Text>
          </View>
        </View>

        <View style={[styles.card, { backgroundColor: cardBackground }]}>          
          <Text style={[styles.sectionTitle, { color: screenTextColor, fontSize: fontSizeTitle }]}> {headerTitleText}</Text>

          <View style={styles.categoriesRow}>
            <View style={styles.categoryItem}>
              <Text style={styles.categoryIcon}>📱</Text>
            </View>
            <View style={styles.categoryItem}>              
              <Text style={styles.categoryIcon}>🐾</Text>
            </View>
            <View style={styles.categoryItem}>              
              <Text style={styles.categoryIcon}>📅</Text>
            </View>
          </View>

          <Text style={[styles.sectionSubtitle, { color: screenTextColor, marginTop: 12, fontSize: fontSizeCardTitle }]}>
            {sectionTitleText}
          </Text>

          {imageCards.map((item) => (
            <View key={item.id} style={styles.itemCard}>
              <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
              <View style={styles.itemTextBlock}>
                <Text style={[styles.itemTitle, { color: screenTextColor, fontSize: fontSizeCardTitle }]}>              
                  {item.title}
                </Text>
                <Text style={[styles.itemDescription, { color: subtitleTextColor, fontSize: fontSizeCardText }]}>                  
                  {cardDescriptionText}
                </Text>
                <View style={styles.progressBarBackground}>
                  <View style={styles.progressBarFill} />
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  screen: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 28,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.18)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#FFFFFF',
  },
  badgeWrapper: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255,255,255,0.18)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FF4A5F',
  },
  headerContent: {
    marginTop: 20,
  },
  headerTitle: {
    fontWeight: '700',
    marginBottom: 10,
  },
  headerDescription: {
    lineHeight: 20,
  },
  card: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 20,
    padding: 18,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 6,
  },
  sectionTitle: {
    fontWeight: '700',
  },
  sectionSubtitle: {
    marginTop: 18,
    marginBottom: 14,
    fontWeight: '700',
  },
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  categoryItem: {
    width: 90,
    height: 90,
    borderRadius: 22,
    backgroundColor: '#F5F7FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryIcon: {
    fontSize: 32,
  },
  itemCard: {
    flexDirection: 'row',
    marginTop: 14,
    padding: 14,
    borderRadius: 20,
    backgroundColor: '#F8F9FF',
    alignItems: 'center',
  },
  itemImage: {
    width: 68,
    height: 68,
    borderRadius: 16,
    marginRight: 14,
  },
  itemTextBlock: {
    flex: 1,
  },
  itemTitle: {
    fontWeight: '700',
    marginBottom: 6,
  },
  itemDescription: {
    lineHeight: 18,
    marginBottom: 10,
  },
  progressBarBackground: {
    height: 7,
    borderRadius: 4,
    backgroundColor: '#E3ECFF',
  },
  progressBarFill: {
    width: '72%',
    height: '100%',
    borderRadius: 4,
    backgroundColor: '#4B7CFF',
  },
});
