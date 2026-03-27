import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const menuItems = [
  { id: '1', title: 'Appointments', icon: 'https://img.icons8.com/ios-filled/50/4A90E2/calendar.png' },
  { id: '2', title: 'Trips', icon: 'https://img.icons8.com/ios-filled/50/4A90E2/airplane-take-off.png' },
  { id: '3', title: 'Passwords', icon: 'https://img.icons8.com/ios-filled/50/4A90E2/fingerprint.png' },
  { id: '4', title: 'Pitches', icon: 'https://img.icons8.com/ios-filled/50/4A90E2/megaphone.png' },
  { id: '5', title: 'Updates', icon: 'https://img.icons8.com/ios-filled/50/4A90E2/sync.png' },
];

const tabButtons = [
  { id: 'home', icon: 'https://img.icons8.com/ios-filled/50/4A90E2/home.png' },
  { id: 'people', icon: 'https://img.icons8.com/ios-filled/50/4A90E2/conference-call.png' },
  { id: 'stats', icon: 'https://img.icons8.com/ios-filled/50/4A90E2/bar-chart.png' },
  { id: 'money', icon: 'https://img.icons8.com/ios-filled/50/4A90E2/finance.png' },
  { id: 'more', icon: 'https://img.icons8.com/ios-filled/50/4A90E2/menu.png' },
];

const footerProfiles = [
  {
    id: 'amy',
    name: 'Amy Farha',
    subtitle: 'Vice President',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: 'chris',
    name: 'Chris Jackson',
    subtitle: 'Vice Chairman',
    avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
  },
  {
    id: 'amanda',
    name: 'Amanda Martin',
    subtitle: 'CEO',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 'christy',
    name: 'Christy Thomas',
    subtitle: 'Lead Developer',
    avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
  },
];

export default function App() {
  const menuRows = [];
  for (let i = 0; i < menuItems.length; i += 1) {
    const item = menuItems[i];
    menuRows.push(
      <View key={item.id} style={styles.row}>
        <Image source={{ uri: item.icon }} style={styles.rowIcon} />
        <Text style={styles.rowText}>{item.title}</Text>
        <Text style={styles.rowArrow}>›</Text>
      </View>
    );
  }

  const tabImages = [];
  for (let i = 0; i < tabButtons.length; i += 1) {
    const button = tabButtons[i];
    tabImages.push(
      <View key={button.id} style={styles.tabButton}>
        <Image source={{ uri: button.icon }} style={styles.tabIcon} />
      </View>
    );
  }

  const profileRows = [];
  for (let i = 0; i < footerProfiles.length; i += 1) {
    const profile = footerProfiles[i];
    profileRows.push(
      <View key={profile.id} style={styles.profileRow}>
        <Image source={{ uri: profile.avatar }} style={styles.avatar} />
        <View style={styles.profileText}>
          <Text style={styles.profileName}>{profile.name}</Text>
          <Text style={styles.profileSubtitle}>{profile.subtitle}</Text>
        </View>
        <Text style={styles.rowArrow}>›</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.logoTop}>REACTNATIVE</Text>
          <Text style={styles.logoBottom}>ELEMENTS</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.menuContainer}>{menuRows}</View>
          <View style={styles.divider} />
          <View style={styles.footerContainer}>{profileRows}</View>
        </View>
      </View>
      <View style={styles.tabBar}>{tabImages}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3F7',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  screen: {
    width: '94%',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 12,
  },
  logoTop: {
    color: '#3C4A85',
    fontSize: 12,
    letterSpacing: 2,
    fontWeight: '700',
  },
  logoBottom: {
    color: '#232F6E',
    fontSize: 24,
    fontWeight: '900',
    marginTop: 4,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    paddingVertical: 18,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 10,
  },
  menuContainer: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F8',
  },
  rowIcon: {
    width: 24,
    height: 24,
    marginRight: 14,
  },
  rowText: {
    flex: 1,
    color: '#2C3E70',
    fontSize: 16,
    fontWeight: '600',
  },
  rowArrow: {
    color: '#BCC3D6',
    fontSize: 22,
    marginLeft: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F3F8',
    marginVertical: 10,
  },
  footerContainer: {
    marginTop: 4,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F8',
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 12,
    marginRight: 12,
  },
  profileText: {
    flex: 1,
  },
  profileName: {
    color: '#26314F',
    fontSize: 15,
    fontWeight: '600',
  },
  profileSubtitle: {
    color: '#8C97B7',
    fontSize: 13,
    marginTop: 2,
  },
  tabBar: {
    width: '94%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 8,
  },
  tabButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#F6F7FB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
});
