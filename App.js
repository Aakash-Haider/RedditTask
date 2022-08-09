import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home/Home';
import DetailScreen from './src/screens/detail/Detail';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/store/Store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;
