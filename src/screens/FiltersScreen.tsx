/* eslint-disable no-multi-spaces */
import React, { useState }        from 'react';
import { StyleSheet, View }       from 'react-native';
import {
    useDispatch,
    useSelector,
}                                 from 'react-redux';
import { StackScreenProps }       from '@react-navigation/stack';
import { useNavigation }          from '@react-navigation/native';

import { SafeScreen }             from 'components/common';
import { FiltersSections }        from 'components/Filters';
import Filter                     from 'components/Filters/Filter';
import { Button }                 from 'components/Button';

import { StackParamList }         from 'navigation/Main';
import Colors                     from 'constants/Colors';
import { AirbnbRating }           from 'react-native-ratings';

import {
    setSortBy,
    wipeFilters,
    setRateFilter,
}                                 from 'store/actions/FiltersState';
import { getActiveRateFilter, getActiveSortByFilter }  from 'store/selectors/FiltersState';


/* eslint-enable no-multi-spaces */


type Props = StackScreenProps<StackParamList, 'FiltersScreen'>;

const FiltersScreen: React.FC<Props> = () => {

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const goBack = () => navigation.goBack();

    let activeFilter = useSelector(getActiveSortByFilter);

    activeFilter = activeFilter ? activeFilter : '';

    let activeRate = useSelector(getActiveRateFilter);

    activeRate = activeRate ? activeRate : '';

    const [sortType, setSortType] = useState<string>(activeFilter);
    const [rateFilter, setFilter] = useState<string>(activeRate);

    const setSortByOption = () => {
        dispatch(setRateFilter({ rate: rateFilter }));
        dispatch(setSortBy({ sortBy: sortType }));
        goBack();
    };

    const wipeActiveFilters = () => {
        dispatch(wipeFilters());
        goBack();
    };

    return (
        <SafeScreen
            title={'Filters'}
            leftToolbarAction={'back'}
            bodyStyle={styles.body_container}
            bodyBackgroundColor={Colors.background_1}
        >
            <FiltersSections label={'SORT BY'} />

            {/* Sorts Container */}
            <View style={styles.section_container}>
                <Filter
                    text={'Name'}
                    isPressed={sortType === 'Name'}
                    onPress={() => setSortType('Name')}
                />
                <Filter
                    text={'Price'}
                    isPressed={sortType === 'Price'}
                    onPress={() => setSortType('Price')}
                />
                <Filter
                    text={'Rate'}
                    isPressed={sortType === 'Rate'}
                    onPress={() => setSortType('Rate')}
                />
                <Filter
                    text={'Downloads'}
                    isPressed={sortType === 'Downloads'}
                    onPress={() => setSortType('Downloads')}
                />
            </View>

            <FiltersSections label={'FILTER BY'} />

            {/* Filter By Container */}
            <View style={[styles.section_container, { height: 80 }]}>
                <AirbnbRating
                    // For some this property is not typed but it is working
                    unSelectedColor={'#979797'}
                    count={5}
                    defaultRating={rateFilter}
                    size={35}
                    showRating={false}
                    selectedColor={Colors.yellow}
                    onFinishRating={setFilter}
                />
            </View>

            <View style={styles.footer_container}>
                <Button
                    onPress={wipeActiveFilters}
                    title={'Reset'}
                    containerStyle={styles.button_style}
                    backgroundColor={Colors.koombea_grey}
                    textStyle={{ color: Colors.text_6 }}
                />
                <Button
                    onPress={setSortByOption}
                    disabled={!(rateFilter || sortType)}
                    title={'Apply'}
                    containerStyle={styles.button_style}
                />
            </View>

        </SafeScreen>
    );
};

const styles = StyleSheet.create({
    body_container: {
        flex: 1,
    },
    footer_container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-evenly',
        width: '100%',
        bottom: 50,
        position: 'absolute',
    },
    button_style: {
        width: '40%',
        borderRadius: 25,
    },
    container: {
        backgroundColor: Colors.secondary_1,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    label: {
        color: Colors.text_3,
        fontFamily: 'Roboto-Medium',
        fontSize: 12,
    },
    section_container: {
        backgroundColor: Colors.background_2,
        justifyContent: 'center',
        alignContent: 'center',
    },
});

export default FiltersScreen;
