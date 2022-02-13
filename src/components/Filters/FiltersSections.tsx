/* eslint-disable no-multi-spaces */
import React              from 'react';
import {
    StyleSheet,
    Text,
    View,
    ViewStyle,
}                         from 'react-native';
import Colors             from 'constants/Colors';
/* eslint-enable no-multi-spaces */

type SectionProps = {
    label: string;
    style?: ViewStyle;
}

/**
 * Custom filters section separator
 *
 * @param {Object} params
 * @param {string} params.label - Section label
 * @param {Object} params.style - Container custom style
 *
 */
const FiltersSection: React.FC<SectionProps> = ({ label, style }) => (
    <View style={[styles.container, style]}>
        <Text style={styles.label}>
            {label}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.secondary_1,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    label: {
        color: Colors.text_3,
        fontFamily: 'Roboto-Medium',
        fontSize: 12,
    },
});


export default FiltersSection;
