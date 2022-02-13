/* eslint-disable no-multi-spaces */
import React                from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
}                           from 'react-native';
import Colors               from 'constants/Colors';
import { FighterModel }     from 'models/FighterModel';
import FastImage            from 'react-native-fast-image';
/* eslint-enable no-multi-spaces */

const FighterItem: React.FC<Props> = ({ fighter, onPress }) => (

    <TouchableOpacity onPress={() => onPress({ fighter })}>
        <View style={styles.fighter_container}>

            {/* Image container */}
            <View style={{ flex: 1.1, paddingHorizontal: 5, paddingVertical: 10 }}>
                <FastImage
                    style={{ height: '85%', width: '100%' }}
                    source={{ uri: fighter.imageURL }}
                />
            </View>

            {/* Name & Universe container */}
            <View style={styles.name_container}>
                <Text style={styles.name_text}>{fighter.name}</Text>
                <Text style={styles.regular_text}>{fighter.universe}</Text>
            </View>

            {/* Price & additional info container */}
            <View style={styles.additional_info_container}>
                <Text
                    style={[styles.regular_text, styles.additional_info_text]}
                >
                    Price: ${fighter.price}
                </Text>
                <Text
                    style={[styles.regular_text, styles.additional_info_text]}
                >
                    Rate: {fighter.rate}
                </Text>
                <Text
                    style={[styles.regular_text, styles.additional_info_text]}
                >
                    Downloads: {fighter.downloads}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
);

type Props = {
    fighter: FighterModel;
    onPress: ({ fighter }: { fighter: FighterModel}) => void;
}


const styles = StyleSheet.create({
    fighter_container: {
        flexDirection: 'row',
        height: 120,
        backgroundColor: Platform.OS === 'android' ? Colors.background_2 : Colors.background_1,
        paddingHorizontal: 20,
    },
    name_container: {
        flex: 1.6,
        justifyContent: 'center',
    },
    name_text: {
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        color: Colors.text_1,
    },
    regular_text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        color: Colors.text_1,
    },
    additional_info_container: {
        flex: 1.5,
        justifyContent: 'center',
    },
    additional_info_text: {
        textAlign: 'right',
        color: Colors.text_1,
    },
});

export default React.memo(FighterItem);
