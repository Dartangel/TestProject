import React, { FC } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { store } from './modules/redux/store';
import { Provider } from 'react-redux';
import { RootNavigator } from './modules/navigation';


const App: FC<{}> = () => {

  return (
    <Provider store={store} >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar hidden />
        <RootNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
