/* eslint-disable no-multi-spaces */
import { SafeScreen } from 'components/common';
import Colors from 'constants/Colors';
import React                 from 'react';
import {
    StyleSheet,
    Text,
}                            from 'react-native';
/* eslint-enable no-multi-spaces */

const DashboardScreen = () => (
    <SafeScreen
        title='Dashboard'
        leftToolbarAction='drawer'
        bodyStyle={styles.body_container}
        bodyBackgroundColor={Colors.background_1}
    >
        <Text style={styles.text_style}>
            Dashboard
        </Text>
    </SafeScreen>

);

const styles = StyleSheet.create({
    body_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_style: {
        color: Colors.text_1,
        fontFamily: 'Roboto-Regular',
    },

});

export default DashboardScreen;
