import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, SafeAreaView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Codigo de suscripción de nuevo tema</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <form>
        <label>
          Name:
          <input type="text" name="Codigo" />
        </label>
        <input type="submit" value="Suscribirme" />
      </form>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8F1F2'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
