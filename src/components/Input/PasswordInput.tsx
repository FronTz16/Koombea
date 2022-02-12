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
}                                     from 'react-native';
import { TouchableOpacity }           from 'react-native-gesture-handler';
import Ionicons                       from 'react-native-vector-icons/Ionicons';
import Colors                         from 'constants/Colors';
/* eslint-enable no-multi-spaces */

/**
 * Returns an Input password component.
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
const PasswordInput: React.FC<Props> = React.forwardRef(
    (
        {
            contentContainerStyle,
            editable = true,
            inputContainerStyle,
            inputStyle,
            testID,
            title,
            titleStyle,
            value,
            ...props
        },
        ref: React.Ref<TextInput>
    ) => {
        const [focused, setFocused] = useState<boolean>(false);
        const [secureEntry, setSecureEntry] = useState<boolean>(true);

        return (
            <View style={contentContainerStyle}>
                {!!title && <Text style={[styles.title, titleStyle]}>{title}:</Text>}
                <View
                    style={[
                        styles.container,
                        inputContainerStyle,
                        {
                            borderColor: focused ? Colors.primary : Colors.gray_80,
                            backgroundColor: editable ? Colors.white : Colors.gray_30,
                        },
                    ]}
                >
                    <TextInput
                        {...props}
                        autoCapitalize='none'
                        editable={editable}
                        onBlur={() => setFocused(false)}
                        onFocus={() => setFocused(true)}
                        ref={ref}
                        secureTextEntry={secureEntry}
                        selectionColor={Platform.OS === 'ios' ? Colors.primary : Colors.gray_80}
                        style={[
                            styles.input,
                            Platform.OS === 'android' && { height: 50 },
                            inputStyle,
                        ]}
                        testID={testID}
                        value={value}
                    />
                    {(!!value && editable) &&
                        <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
                            <Ionicons
                                name={secureEntry ? 'md-eye' : 'md-eye-off'}
                                size={22}
                                color={Colors.text_2}
                            />
                        </TouchableOpacity>
                    }
                </View>
            </View>
        );
    }
);

type Props = {
    contentContainerStyle?: StyleProp<ViewStyle>;
    editable?: boolean;
    inputContainerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<ViewStyle>;
    onBlur?: () => void;
    onFocus?: () => void;
    title: string;
    titleStyle?: StyleProp<TextStyle>;
} & TextInputProps;

const styles = StyleSheet.create({
    title: {
        color: Colors.text_2,
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        marginBottom: 5,
    },
    container: {
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 15,
    },
    input: {
        color: Colors.text_2,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        padding: 15,
    },
});


PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
