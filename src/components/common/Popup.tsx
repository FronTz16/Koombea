/* eslint-disable no-multi-spaces */
import React                        from 'react';
import { StyleSheet, Text }         from 'react-native';

import Modal                        from './Modal';
import { Button }                   from 'components/Button';
import Colors                       from 'constants/Colors';
/* eslint-enable no-multi-spaces */

/**
 * Creates a simple popup with a title, message and a single Button.
 *
 * @param {Object} params
 * @param {string} params.buttonTitle - Title text of the action Button
 * @param {string} params.message - Message to be displayed inside the popup
 * @param {function} params.onClose - Function called when the close Button is pressed
 * @param {function} params.onSubmit - Function called when the action Button is pressed
 * @param {string} params.title - Title text
 * @param {boolean} params.visible - Show or hide the popup
 *
 */

const Popup: React.FC<Props> = ({
    buttonTitle = 'Ok',
    message,
    onClose,
    onSubmit,
    title,
    visible = false,
    closable = true,
}) => (
    <Modal onClose={onClose} title={title} visible={visible} closable={closable}>
        <Text style={styles.message}>{message}</Text>
        <Button onPress={onSubmit} title={buttonTitle} />
    </Modal>
);

type Props = {
    buttonTitle?: string,
    message: string,
    onClose: () => void,
    onSubmit: () => void,
    title: string,
    visible?: boolean,
    closable?: boolean,
}

const styles = StyleSheet.create({
    message: {
        color: Colors.text_3,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        marginBottom: 30,
        marginTop: 10,
    },
});

export default Popup;
