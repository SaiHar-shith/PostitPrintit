import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import UploadScreen from './screens/UploadScreen';
import PaymentScreen from './screens/PaymentScreen';
import OrderPlacedScreen from './screens/OrderPlacedScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Upload" component={UploadScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="OrderPlaced" component={OrderPlacedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
