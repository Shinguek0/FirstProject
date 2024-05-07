// App.js
import React from 'react';
import { View } from 'react-native';
import HomeScreen from './res/Homepage';
import FirstPage from './res/FirstPage';
import Banp from './res/Banp';
import Imc from './res/Imc';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/*<HomeScreen />*/}
      {/*<FirstPage/>*/}
      {/*<Banp/>*/}
      <Imc/>
    </View>
    
  );
};

export default App;
