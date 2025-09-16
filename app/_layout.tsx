import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="welcome" 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="auth" 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="home" 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
          name="addexpense" 
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
