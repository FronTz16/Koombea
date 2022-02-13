/* eslint-disable no-multi-spaces */
import React                     from 'react';
import { StyleSheet, View }            from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Shimmer                   from './Shimmer';
/* eslint-enable no-multi-spaces */

const DashboardShimmer = () => (
    <SafeAreaView>
        <View style={{ flexDirection: 'row', marginTop: 100 }}>
            <Shimmer style={styles.filter_shimmer}/>
            <Shimmer style={styles.filter_shimmer}/>
            <Shimmer style={styles.filter_shimmer}/>
        </View>
        <Shimmer style={styles.shimmer}/>
        <Shimmer style={styles.shimmer}/>
        <Shimmer style={styles.shimmer}/>
        <Shimmer style={styles.shimmer}/>
        <Shimmer style={styles.shimmer}/>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    shimmer: {
        width: '100%',
        height: '15%',
        marginBottom: 10,
        borderRadius: 15,
    },
    filter_shimmer: {
        width: '25%',
        height: 30,
        margin: 10,
    },
});

export default DashboardShimmer;
