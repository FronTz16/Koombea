/* eslint-disable no-multi-spaces */
import React                        from 'react';
import {
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle }                     from 'react-native';

import Colors                       from 'constants/Colors';
/* eslint-enable no-multi-spaces */

/**
 * Creates a colored text label
 *
 * @param {Object} params
 * @param {string} params.backgroundColor - Label background color
 * @param {Object} params.style - Label custom style
 * @param {string} params.text - Label text [Required]
 * @param {Object} params.textStyle - Label text custom style
 * @param {boolean} params.uppercase - Whether the label text is uppercase or not (true by default)
 *
 */
const Label: React.FC<Props> = ({
    backgroundColor = Colors.primary,
    style,
    text,
    textStyle,
    uppercase = true,
}) => (
    <View style={[styles.container, { backgroundColor }, style]}>
        <Text
            style={[
                styles.text,
                { textTransform: uppercase ? 'uppercase' : 'none' },
                textStyle,
            ]}
        >
            {text}
        </Text>
    </View>
);


type Props = {
    backgroundColor?: string;
    style?: ViewStyle;
    text: string;
    textStyle?: TextStyle;
    uppercase?: boolean;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        borderRadius: 5,
        paddingVertical: 3,
        paddingHorizontal: 5,
    },
    text: {
        color: Colors.text_2,
        fontFamily: 'Roboto-Bold',
        fontSize: 10,
    },
});

export default Label;
