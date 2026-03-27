import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const screenOption = 'Tela1';

const colors = {
  background: '#F9FAFF',
  card: '#FFFFFF',
  header: '#4E9BFF',
  primaryText: '#17234D',
  secondaryText: '#5B6B94',
  accent: '#35C57F',
  badge: '#D3E9FF',
  inputBorder: '#DDE6FF',
  button: '#06A96C',
};

const fontSizes = {
  title: 22,
  subtitle: 14,
  small: 12,
  label: 16,
  button: 16,
};

const texts = {
  searchPlaceholder: 'Pesquisar',
  resultsCount: '300 Resultados',
  newsLabel: 'Notícias',
  education: 'Educação',
  screenTitle: 'Lorem ipsum dolor',
  screenDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt.',
  donateButton: 'DOAR',
  amountValue: '$120.00',
  inputPlaceholder: 'Digite algo aqui...',
};

const tela1Data = {
  cards: [
    {
      id: '1',
      icon: '👤',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      progress: '72%',
    },
    {
      id: '2',
      icon: '👤',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      progress: '48%',
    },
  ],
  footerA: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  footerB: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

const tela2Data = {
  avatar: '👦',
  title: 'Lorem ipsum dolor',
  description:
    'Lorem ipsum dolor sit amet, consectetur diam adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
};

function Tela1() {
  return (
    <View style={styles.screenCard}>
      <View style={styles.headerBar}>
        <View style={styles.searchInput}>
          <Text style={styles.searchText}>{texts.searchPlaceholder}</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: colors.badge }]}>          
          <Text style={styles.badgeText}>🔎</Text>
        </View>
      </View>

      <View style={styles.sectionRow}>
        <View style={[styles.button, styles.educationButton]}>
          <Text style={styles.buttonText}>{texts.education}</Text>
        </View>
        <View style={styles.actionIcons}>
          <Text style={styles.iconButton}>➕</Text>
          <Text style={styles.iconButton}>📍</Text>
        </View>
      </View>

      <Text style={styles.resultsText}>{texts.resultsCount}</Text>

      {tela1Data.cards.map((card) => (
        <View key={card.id} style={styles.listCard}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarEmoji}>{card.icon}</Text>
          </View>
          <View style={styles.listTextBlock}>
            <Text style={styles.listTitle}>{card.title}</Text>
            <View style={styles.progressBarBackground}>
              <View style={[styles.progressBarFill, { width: card.progress }]} />
            </View>
          </View>
        </View>
      ))}

      <View style={styles.largeCard}>
        <View style={styles.iconBox}>🎓</View>
      </View>

      <View style={styles.footerRow}>
        <Text style={styles.footerText}>{tela1Data.footerA}</Text>
        <Text style={styles.footerText}>{tela1Data.footerB}</Text>
      </View>
    </View>
  );
}

function Tela2() {
  return (
    <View style={styles.screenCard}>      
      <View style={styles.avatarBox}>
        <Text style={styles.avatarLarge}>{tela2Data.avatar}</Text>
      </View>
      <Text style={styles.screenTitle}>{tela2Data.title}</Text>
      <Text style={styles.screenDescription}>{tela2Data.description}</Text>

      <View style={styles.amountBox}>
        <Text style={styles.amountText}>{texts.amountValue}</Text>
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.inputLabel}>{texts.inputPlaceholder}</Text>
      </View>

      <TouchableOpacity style={styles.donateButton}>
        <Text style={styles.donateButtonText}>{texts.donateButton}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  const showTela1 = screenOption === 'Tela1';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>      
      <StatusBar style="dark" />
      {showTela1 ? <Tela1 /> : <Tela2 />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  screenCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 28,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 6,
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  searchInput: {
    flex: 1,
    height: 42,
    borderRadius: 16,
    backgroundColor: '#E8EEFF',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  searchText: {
    color: colors.secondaryText,
    fontSize: fontSizes.subtitle,
  },
  badge: {
    width: 42,
    height: 42,
    borderRadius: 14,
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 18,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  button: {
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  educationButton: {
    backgroundColor: colors.accent,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: fontSizes.small,
    fontWeight: '700',
  },
  actionIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  iconButton: {
    fontSize: 20,
    marginHorizontal: 4,
  },
  resultsText: {
    color: colors.secondaryText,
    fontSize: fontSizes.small,
    marginBottom: 14,
  },
  listCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F8FF',
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
  },
  avatarCircle: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: '#D6E6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarEmoji: {
    fontSize: 24,
  },
  listTextBlock: {
    flex: 1,
  },
  listTitle: {
    color: colors.primaryText,
    fontSize: fontSizes.subtitle,
    marginBottom: 8,
  },
  progressBarBackground: {
    height: 6,
    width: '100%',
    borderRadius: 6,
    backgroundColor: '#D9E8FF',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 6,
    backgroundColor: colors.accent,
  },
  largeCard: {
    height: 170,
    borderRadius: 24,
    backgroundColor: '#D9E8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 18,
  },
  iconBox: {
    width: 82,
    height: 82,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    width: '48%',
    color: colors.secondaryText,
    fontSize: fontSizes.small,
  },
  avatarBox: {
    height: 200,
    borderRadius: 28,
    backgroundColor: colors.header,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarLarge: {
    fontSize: 72,
  },
  screenTitle: {
    color: colors.primaryText,
    fontSize: fontSizes.title,
    fontWeight: '700',
    marginBottom: 12,
  },
  screenDescription: {
    color: colors.secondaryText,
    fontSize: fontSizes.subtitle,
    lineHeight: 20,
    marginBottom: 20,
  },
  amountBox: {
    borderRadius: 18,
    backgroundColor: '#F2F7FF',
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 18,
  },
  amountText: {
    color: colors.button,
    fontSize: fontSizes.title,
    fontWeight: '700',
  },
  inputBox: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    padding: 16,
    marginBottom: 22,
  },
  inputLabel: {
    color: colors.secondaryText,
    fontSize: fontSizes.subtitle,
  },
  donateButton: {
    backgroundColor: colors.button,
    borderRadius: 18,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  donateButtonText: {
    color: '#FFFFFF',
    fontSize: fontSizes.button,
    fontWeight: '700',
  },
});
