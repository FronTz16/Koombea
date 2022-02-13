/* eslint-disable no-multi-spaces */
import React              from 'react';
import {
    StyleSheet,
    Text,
    View,
}                         from 'react-native';
import Colors             from 'constants/Colors';
import Separator          from 'components/Separator';
import CheckBox           from '@react-native-community/checkbox';
/* eslint-enable no-multi-spaces */

type FilterProps = {
    text: string;
    onPress: () => void;
    isPressed: boolean;
}

/**
 * Custom filters section separator
 *
 * @param {Object} params
 * @param {string} params.label - Section label
 * @param {Object} params.style - Container custom style
 *
 */
const Filter: React.FC<FilterProps> = ({
    text,
    onPress,
    isPressed,
}) => (
    <View>
        <View style={styles.container}>

            <Text style={styles.label}>
                {text}
            </Text>

            <CheckBox
                value={isPressed}
                onValueChange={onPress}
                onFillColor={Colors.primary}
                onCheckColor={'#FFF'}
            />
        </View>
        <Separator/>
    </View>
);

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    // container_ios: {

    // },
    label: {
        color: Colors.text_1,
        fontFamily: 'Roboto-Regular',
        fontSize: 17,
    },
    checkbox: {
        width: 10,
    },
});


export default Filter;
