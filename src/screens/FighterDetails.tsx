/* eslint-disable no-multi-spaces */
import React                     from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
}                                from 'react-native';
import { SafeScreen }            from 'components/common';
import Colors                    from 'constants/Colors';
import { StackScreenProps }      from '@react-navigation/stack';
import { StackParamList }        from 'navigation/Main';
import { AirbnbRating }          from 'react-native-ratings';
import FastImage                 from 'react-native-fast-image';

/* eslint-enable no-multi-spaces */

type Props = StackScreenProps<StackParamList, 'FighterDetailsScreen'>;

const FighterDetailsScreen: React.FC<Props> = ({ route }) => {

    const { fighter } = route.params;

    console.log(parseInt(fighter.rate, 10));

    return (
        <SafeScreen
            title={fighter.name}
            leftToolbarAction={'back'}
            bodyStyle={styles.body_container}
            bodyBackgroundColor={
                Platform.OS === 'android'
                    ? Colors.background_2
                    : Colors.background_1
            }
        >
            {/* General Info Container */}
            <View style={styles.general_info_container}>
                {/* Info Container */}
                <View style={{ flex: 1 }}>

                    <Text style={styles.name_text}>{fighter.name}</Text>

                    <Text style={styles.universe_text}>{fighter.universe}</Text>

                    <View style={styles.rating_container}>
                        <AirbnbRating
                            count={5}
                            defaultRating={parseInt(fighter.rate, 10)}
                            size={20}
                            showRating={false}
                            selectedColor={Colors.yellow}
                            isDisabled={true}
                        />
                    </View>

                    <Text style={styles.downloads_text}>Downloads: {fighter.downloads}</Text>

                    {/* Price Badge */}
                    <View style={styles.price_container}>
                        <Text style={styles.price_text}>${fighter.price}</Text>
                    </View>
                </View>
                {/* Image Container */}
                <View style={styles.section_container}>
                    <FastImage
                        style={{ height: '100%', width: '100%' }}
                        source={{ uri: fighter.imageURL }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
            </View>

            {/* Description Container */}
            <View style={styles.description_container}>
                <Text style={styles.description_text}>
                    {fighter.description}
                </Text>
            </View>
        </SafeScreen>
    );
};

const styles = StyleSheet.create({
    body_container: {
        paddingHorizontal: 10,
    },
    general_info_container: {
        flexDirection: 'row',
        height: 200,
        marginTop: 20,
    },
    section_container: {
        flex: 1,
    },
    price_container: {
        backgroundColor: Colors.background_5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        padding: 10,
        marginTop: 5,
    },
    price_text: {
        color: Colors.text_5,
        fontFamily: 'Roboto-Bold',
        fontSize: 23,
    },
    name_text: {
        fontFamily: 'Roboto-Bold',
        fontSize: 24,
        color: Colors.text_1,
    },
    universe_text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: Colors.text_1,
    },
    downloads_text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: Colors.text_2,
    },
    rating_container: {
        marginTop: 30,
        alignSelf: 'flex-start',
        marginVertical: 10,
        padding: 0,
    },
    description_text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 30,
        color: Colors.text_1,
    },
    description_container: {
        marginVertical: 20,
    },
});

export default FighterDetailsScreen;
