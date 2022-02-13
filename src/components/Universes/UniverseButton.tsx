/* eslint-disable no-multi-spaces */
import React                     from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
}                                from 'react-native';
import Colors                    from 'constants/Colors';
/* eslint-enable no-multi-spaces */


const UniverseButton: React.FC<Props> = ({
    text,
    active,
    onPress,
}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={[
            styles.universe_container,
            { backgroundColor: active ? Colors.background_3 : Colors.background_5 },
        ]}>
            <Text style={styles.universe_text}>{text}</Text>
        </View>
    </TouchableOpacity>
);

type Props = {
    text: string,
    active: boolean,
    onPress: () => void,
};

const styles = StyleSheet.create({
    universe_container: {
        padding: 10,
        marginVertical: 10,
        marginRight: 10,
        minWidth: 65,
        justifyContent: 'center',
        alignItems: 'center',
    },
    universe_text: {
        fontFamily: 'Roboto-Regular',
        color: Colors.background_2,
        fontSize: 14,
    },
});

export default React.memo(UniverseButton);
