import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/splash.jpg')}
        style={styles.splashImage}
        resizeMode="contain" 
      />
      <Text style={styles.text}>
        Aqui puedes agregar un componente de React
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4a90e2',
  },
  gradientContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
  }
});