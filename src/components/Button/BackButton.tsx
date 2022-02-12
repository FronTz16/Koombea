/* eslint-disable no-multi-spaces */

import React                   from 'react';
import {
    Platform,
    Text,
    TouchableOpacity,
    View,
    ViewStyle,
}                              from 'react-native';
import Ionicons                from 'react-native-vector-icons/Ionicons';
import Colors                  from 'constants/Colors';
/* eslint-enable no-multi-spaces */

const BackButton: React.FC<Props> = ({
    color = Colors.primary,
    disabled = false,
    onPress,
    style,
}) => (
    <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[
            {
                justifyContent: 'center',
                alignItems: 'center',
            },
            style,
        ]}
    >
        {Platform.OS === 'ios' ?
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons
                    name='ios-chevron-back'
                    size={24}
                    color={color}
                    style={{ opacity: disabled ? 0.2 : 1 }}
                />
                <Text style={{
                    color,
                    fontFamily: 'Roboto-Medium',
                    fontSize: 18,
                }}>
                    Back
                </Text>
            </View>
            :
            <Ionicons
                name='md-arrow-back'
                size={25}
                color={color}
                style={{ opacity: disabled ? 0.2 : 1 }}
            />
        }
    </TouchableOpacity>
);

type Props = {
    color?: string,
    disabled?: boolean,
    onPress?: () => void,
    style?: ViewStyle,
};

export default BackButton;
