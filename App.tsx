/* eslint-disable no-multi-spaces */
import React, { useEffect }     from 'react';
import { Provider }             from 'react-redux';
import RNBootSplash             from 'react-native-bootsplash';

import ModalContextProvider     from 'context/ModalContext';
import { store }                from 'store/store';
import Koombea                  from './src/navigation';
import { NavigationContainer }  from '@react-navigation/native';
import { StatusBar }            from 'react-native';

/* eslint-enable no-multi-spaces */

// import { LogBox } from 'react-native';

// // Ignoring this log file due an error in react-native-gesture-handler
// // Link
// LogBox.ignoreLogs([
//     '[react-native-gesture-handler] Seems like you\'re ' +
//    'using an old API with gesture components, check out new Gestures system!',
// ]);

const App = () => {

    useEffect(() => {
        setTimeout(() => {
            RNBootSplash.hide();
        }, 2000);
    }, []);

    return (
        <Provider store={store}>
            <ModalContextProvider>
                <NavigationContainer>
                    <StatusBar barStyle={'default'}/>
                    <Koombea/>
                </NavigationContainer>
            </ModalContextProvider>
        </Provider>
    );
};

export default App;
