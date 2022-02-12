/* eslint-disable no-multi-spaces */
import React                        from 'react';
import {
    Dimensions,
    KeyboardAvoidingView,
    Modal,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
    StyleProp,
    ViewStyle,
    TextStyle,
}                                   from 'react-native';
import { IconButton }               from 'components/Button';

import Colors                       from 'constants/Colors';
/* eslint-enable no-multi-spaces */

/**
 * Creates a modal container with optional title and a scrollable body.
 *
 * @param {Object} params
 * @param {Object} params.bodyScrollViewProps - Screen body scrollView props
 * @param {Object} params.bodyStyle - Screen body custom style
 * @param {ReactElement} params.children - Screen body wrapped inside a ScrollView
 * @param {boolean} params.closable - Enable/disable the close Button
 * @param {function} params.onClose - Function called when the close Button is pressed
 * @param {Object} params.style - Main modal container custom style
 * @param {string} params.title - Title text
 * @param {Object} params.titleStyle - Title text custom style
 * @param {boolean} params.visible - Show or hide the modal component
 *
 */

const CustomModal: React.FC<Props> = ({
    bodyScrollViewProps,
    bodyStyle,
    children,
    closable = true,
    onClose,
    viewStyle,
    title,
    titleStyle,
    visible,
}) => (

    <Modal
        animationType='fade'
        onRequestClose={onClose}
        statusBarTranslucent
        transparent
        visible={visible}
    >
        {/* Background */}
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.background}
        >
            {/* Modal container*/}
            <View style={[styles.container, viewStyle]}>

                {/* Close Button */}
                <IconButton
                    color={Colors.gray_80}
                    disabled={!closable}
                    name="close"
                    onPress={onClose}
                    style={styles.close}
                />

                {/* Title */}
                {title &&
                    <Text style={[styles.title, titleStyle]}>
                        {title}
                    </Text>
                }

                {/* Body */}
                <ScrollView
                    alwaysBounceVertical={false}
                    contentContainerStyle={[styles.body, bodyStyle]}
                    {...bodyScrollViewProps}
                >
                    {children}
                </ScrollView>

            </View>
        </KeyboardAvoidingView>

    </Modal>
);

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: Colors.black_a_60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        marginHorizontal: 25,
    },
    close: {
        alignSelf: 'flex-end',
        marginRight: 25,
        marginBottom: 5,
    },
    container: {
        borderRadius: 5,
        backgroundColor: Colors.background_1,
        elevation: 5,
        maxHeight: Dimensions.get('window').height * 0.8,
        paddingVertical: 20,
        width: Dimensions.get('window').width * 0.9,
    },
    title: {
        color: Colors.text_1,
        fontFamily: 'Roboto-Regular',
        fontSize: 26,
        marginHorizontal: 25,
        marginBottom: 10,
    },
});

type Props = {
    bodyScrollViewProps?: StyleProp<ViewStyle>;
    bodyStyle?: StyleProp<ViewStyle>;
    children: React.ReactNode;
    visible: boolean;
    closable?: boolean;
    onClose: () => void;
    viewStyle?: StyleProp<ViewStyle>;
    title: string;
    titleStyle?: StyleProp<TextStyle>;
}

export default CustomModal;
