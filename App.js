import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Components/Card';
// import { useMediaQuery } from 'react-native-media-query';

export default function App() {
  // const { mql } = useMediaQuery();
  return (
    <View style={styles.container}>
      {/* <View style={[styles.container, mql]}> */}
      <Card />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
