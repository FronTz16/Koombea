/* eslint-disable no-multi-spaces */
import React, { useState }            from 'react';
import {
    Platform,
    StyleProp,
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    TextStyle,
    View,
    ViewStyle,
}                                      from 'react-native';
import Colors                          from 'constants/Colors';
/* eslint-enable no-multi-spaces */

/**
 * Returns an input text component
 *
 * @param {Object} params
 * @param {Object} params.contentContainerStyle - Style for the view that wraps the text input.
 * @param {boolean} params.editable - Boolean flag to enable or disable the input.
 * @param {Object} params.inputStyle - Text input style.
 * @param {function} params.onBlur - Function triggered onBlur.
 * @param {function} params.onFocus - Function triggered onFocus.
 * @param {string} params.title - Text input label.
 * @param {Object} params.titleStyle - Label style.
 *
 */
const CustomTextInput: React.FC<Props> = React.forwardRef(
    (
        {
            contentContainerStyle,
            editable = true,
            inputStyle,
            onBlur,
            onFocus,
            title,
            titleStyle,
            ...props
        },
        ref: React.Ref<TextInput>
    ) => {
        const [focused, setFocused] = useState<boolean>(false);

        return (
            <View style={contentContainerStyle}>
                {!!title && <Text style={[styles.title, titleStyle]}>{title}:</Text>}
                <TextInput
                    {...props as TextInputProps}
                    editable={editable}
                    onBlur={() => {
                        setFocused(false);

                        if (onBlur) {
                            onBlur();
                        }
                    }}
                    onFocus={() => {
                        setFocused(true);

                        if (onFocus) {
                            onFocus();
                        }
                    }}
                    ref={ref}
                    selectionColor={Platform.OS === 'ios' ? Colors.primary : Colors.gray_80}
                    style={[
                        styles.input,
                        Platform.OS === 'android' && { height: 50 },
                        inputStyle,
                        {
                            backgroundColor: editable ? Colors.white : Colors.gray_30,
                            borderColor: focused ? Colors.primary : Colors.gray_80,
                        },
                    ]}
                />
            </View>
        );
    }
);

type Props = {
    contentContainerStyle?: StyleProp<ViewStyle>;
    editable?: boolean;
    inputStyle?: StyleProp<TextStyle>;
    onBlur?: () => void;
    onFocus?: () => void;
    title: string;
    titleStyle?: StyleProp<TextStyle>;
} & TextInputProps;

const styles = StyleSheet.create({
    title: {
        color: Colors.primary,
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        marginBottom: 5,
    },
    input: {
        borderRadius: 10,
        borderWidth: 2,
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        color: Colors.text_2,
        padding: 15,
    },
});

CustomTextInput.displayName = 'CustomTextInput';

export default CustomTextInput;
