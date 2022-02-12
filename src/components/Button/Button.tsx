/* eslint-disable no-multi-spaces */
import React                             from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableOpacity,
    StyleProp,
    ViewStyle,
    TextStyle,
}                                        from 'react-native';
import Colors                            from 'constants/Colors';
/* eslint-enable no-multi-spaces */

/**
 * Returns a Button
 *
 * @param {Object} params
 * @param {string} params.backgroundColor - Background color of the Button
 * @param {string} params.color - Text color of the Button
 * @param {Object} params.containerStyle - Object with view style
 * @param {boolean} params.disabled - Enable/disable flag Button
 * @param {boolean} params.loading - Loading flag, will show a loading spinner
 * @param {function} params.onPress - Callback function triggered when the Button is pressed
 * @param {Object} params.textStyle - Title text custom style
 * @param {string} params.title - Button title text
 *
 */
const CustomButton: React.FC<Props> = ({
    backgroundColor = Colors.primary,
    color = Colors.text_5,
    containerStyle,
    disabled = false,
    loading = false,
    onPress,
    textStyle,
    title,
}) => (
    <TouchableOpacity
        activeOpacity={0.7}
        disabled={disabled || loading}
        onPress={onPress}
        style={[
            styles.button,
            {
                backgroundColor,
                opacity: disabled ? 0.6 : 1,
            },
            containerStyle,
        ]}
    >
        {loading && <ActivityIndicator color={color} />}
        {!loading &&
            <Text style={[styles.text, { color }, textStyle]}>
                {title}
            </Text>
        }
    </TouchableOpacity>
);

type Props = {
    backgroundColor?: string,
    color?: string,
    containerStyle?: StyleProp<ViewStyle>,
    disabled?: boolean,
    loading?: boolean,
    onPress: () => void,
    textStyle?: StyleProp<TextStyle>,
    title: string,
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        height: 45,
        justifyContent: 'center',
        padding: 10,
        width: '100%',
    },
    text: {
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
    },
});

export default CustomButton;
