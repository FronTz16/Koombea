/* eslint-disable no-multi-spaces */
import React                   from 'react';
import { TouchableOpacity }    from 'react-native';
import Ionicons                from 'react-native-vector-icons/Ionicons';

import Colors                  from 'constants/Colors';
/* eslint-enable no-multi-spaces */

/**
 * Floating Button
 * @param {Object} params
 * @param {string} params.backgroundColor - Button background color
 * @param {string} params.color - Icon color
 * @param {boolean} params.disabled - Disable flag (default: false)
 * @param {string} params.name - Icon name
 * @param {function} params.onPress - On Press callback
 */
const FloatingButton: React.FC<Props> = ({
    backgroundColor = Colors.primary,
    color = Colors.text_5,
    disabled = false,
    name,
    onPress,
}) => (
    <TouchableOpacity
        activeOpacity={0.8}
        disabled={disabled}
        onPress={onPress}
        style={{
            alignItems: 'center',
            backgroundColor,
            borderRadius: 30,
            bottom: 35,
            elevation: 10,
            height: 60,
            justifyContent: 'center',
            position: 'absolute',
            right: 30,
            width: 60,
        }}
    >
        <Ionicons name={name} size={25} color={color} />
    </TouchableOpacity>
);

type Props = {
    backgroundColor?: string,
    color?: string,
    disabled?: boolean,
    name: keyof typeof Ionicons,
    onPress: () => void,
};

export default FloatingButton;
