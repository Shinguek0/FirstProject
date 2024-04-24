// App.js
import React from 'react';
import { View } from 'react-native';
import HomeScreen from './res/Homepage';
import FirstPage from './res/FirstPage';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/*<HomeScreen />*/}
      <FirstPage/>
    </View>
    
  );
};

export default App;
