import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Home from './src/screens/Home';
import RegisterMessage from './src/screens/RegisterMessage';
import Confirmation from './src/screens/Confirmation';


const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider style={{backgroundColor: '#B73058'}}>
      <NavigationContainer
        style={styles.container}
        onReady={() => RNBootSplash.hide()}>
        <StatusBar animated={true} backgroundColor="#B73058" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            presentation: 'modal'
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RegisterMessage" component={RegisterMessage} />
          <Stack.Screen name="Confirmation" component={Confirmation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B73058',
  },
});

export default App;
