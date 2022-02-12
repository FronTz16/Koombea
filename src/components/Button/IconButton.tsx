/* eslint-disable no-multi-spaces */
import React                from 'react';
import {
    TouchableOpacity,
    StyleProp,
    ViewStyle,
} from 'react-native';
import Ionicons             from 'react-native-vector-icons/Ionicons';
import Colors               from 'constants/Colors';
/* eslint-enable no-multi-spaces */

/**
 * Clickable Icon Button
 * @param {Object} params
 * @param {string} params.color - Icon color
 * @param {boolean} params.disabled - Disable flag (default: false)
 * @param {string} params.name - Icon name
 * @param {function} params.onPress - On Press callback
 * @param {number} params.size - Icon size
 * @param {Object} params.style - Icon style
 * @constructor
 */
const IconButton: React.FC<Props> = ({
    color = Colors.primary,
    disabled = false,
    name,
    onPress,
    size = 18,
    style,
}) => (
    <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[
            style,
            {
                justifyContent: 'center',
                alignItems: 'center',
            },
        ]}
    >
        <Ionicons name={name} size={size} color={color}/>
    </TouchableOpacity>
);

type Props = {
    color?: string,
    disabled?: boolean,
    name: keyof typeof Ionicons;
    onPress: () => void,
    size?: number,
    style: StyleProp<ViewStyle>
}

export default IconButton;
