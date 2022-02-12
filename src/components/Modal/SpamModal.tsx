/* eslint-disable no-multi-spaces */
import React                           from 'react';
import { Text, StyleSheet }            from 'react-native';
import { Modal }                       from 'components/common';
import { Button }                      from 'components/Button';
import Colors                          from 'constants/Colors';
/* eslint-enable no-multi-spaces */

const SpamModal = ({
    loading,
    onClose,
    onSubmit,
    title = 'Estas Seguro?',
    visible,
}: SpamModalProps) => (
    <Modal onClose={onClose} visible={visible} title={title}>
        <Text style={styles.message}>
            Modal prueba spam
        </Text>

        <Button
            backgroundColor={Colors.secondary}
            color={Colors.secondary_text}
            containerStyle={{ marginBottom: 10 }}
            disabled={loading}
            onPress={onClose}
            title="Cancel"
        />

        <Button
            loading={loading}
            onPress={onSubmit}
            title="Mark as Spam"
        />
    </Modal>
);

interface SpamModalProps {
    loading?: boolean,
    onClose: () => void,
    onSubmit: () => void,
    title: string,
    visible: boolean,
}

const styles = StyleSheet.create({
    title: {
        color: Colors.text_1,
        fontFamily: 'Roboto-Regular',
        fontSize: 26,
    },
    message: {
        color: Colors.text_3,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        marginBottom: 40,
        marginTop: 15,
        lineHeight: 25,
    },
});

export default SpamModal;
