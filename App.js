import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Components/Card';
// import { useMediaQuery } from 'react-native-media-query';
import { useFonts } from 'expo-font';
export default function App() {
  // const { mql } = useMediaQuery();
  // useFonts({
  //   "londrina" : require("./assets/Fonts/Londrina_Shadow/LondrinaShadow-Regular.ttf")
  // })
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
