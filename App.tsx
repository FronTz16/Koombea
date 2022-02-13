/* eslint-disable no-multi-spaces */
import 'react-native-gesture-handler';
import React, { useEffect }     from 'react';
import { StatusBar }            from 'react-native';
import { Provider }             from 'react-redux';
import { NavigationContainer }  from '@react-navigation/native';
import RNBootSplash             from 'react-native-bootsplash';

import ModalContextProvider     from 'context/ModalContext';
import Store                    from 'store/store';
import Koombea                  from './src/navigation';
import { PersistGate }          from 'redux-persist/integration/react';

/* eslint-enable no-multi-spaces */

const { store, persistor } = Store();

const App = () => {

    useEffect(() => {
        // TimeOut set up due to the app initialize time was to short
        setTimeout(() => {
            RNBootSplash.hide();
        }, 2000);
    }, []);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ModalContextProvider>
                    <NavigationContainer>
                        <StatusBar barStyle={'default'}/>
                        <Koombea/>
                    </NavigationContainer>
                </ModalContextProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
