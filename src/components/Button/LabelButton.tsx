/* eslint-disable no-multi-spaces */
import React                     from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    TextStyle,
    ViewStyle,
}                                 from 'react-native';
import Colors                     from 'constants/Colors';
import Ionicons                   from 'react-native-vector-icons/Ionicons';
/* eslint-enable no-multi-spaces */

/**
 * LabelButton
 * Button component that is rendered only as a text instead of a colored block
 *
 * @param {Object} params
 * @param {string} params.color - Text and optional icon color
 * @param {boolean} params.disabled - Whether the touchable is disabled or not
 * @param {string} params.iconRight - Name of the option Icon (from Signpost library only)
 * @param {string} params.label - Button text
 * @param {Object} params.labelStyle - Custom button text style
 * @param {function} params.onPress - Function called when the button is pressed
 * @param {number} params.size - Font size
 * @param {Object} params.style - Custom container style
 * @param {string} params.testID - TestID
 * @param {boolean} params.underline - Whether the text should be underlined or not
 *
 */
const LabelButton: React.FC<Props> = ({
    color = Colors.primary,
    disabled = false,
    iconRight,
    label,
    labelStyle,
    onPress,
    size = 18,
    style,
    underline = false,
}) => (
    <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[styles.container, style]}
    >
        <Text style={[
            {
                color,
                fontFamily: 'Roboto-Medium',
                fontSize: size,
                opacity: disabled ? 0.2 : 1,
            },
            labelStyle,
            underline && styles.underline,
        ]}>
            {label}
        </Text>

        {iconRight &&
            <Ionicons
                color={color}
                name={iconRight}
                size={12}
                style={styles.icon}
            />
        }
    </TouchableOpacity>
);


type Props = {
    color?: string,
    disabled?: boolean,
    iconRight?: keyof typeof Ionicons,
    label: string,
    labelStyle?: TextStyle,
    onPress: () => void,
    size?: number,
    style?: ViewStyle,
    underline?: boolean,
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        marginLeft: 5,
    },
    label: {
        marginRight: 10,
    },
    underline: {
        textDecorationLine: 'underline',
    },
});

export default LabelButton;
