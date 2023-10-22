import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"

import Home from './screens/Home';
import About from './screens/About';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: 'Welcome!',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </GluestackUIProvider>
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
