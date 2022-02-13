/* eslint-disable no-multi-spaces */
import React, {
    useCallback,
    useEffect,
    useState,
}                               from 'react';
import { StackScreenProps }     from '@react-navigation/stack';
import { SafeScreen }           from 'components/common';
import Colors                   from 'constants/Colors';
import { StackParamList }       from 'navigation/Main';
import { StyleSheet }           from 'react-native';
import {
    useDispatch,
    useSelector,
}                               from 'react-redux';
import {
    fetchFighters,
    fetchUniverses,
}                               from 'store/actions/UniverseState';

import { DashboardShimmer }     from 'components/Shimmer';
import { UniverseList }         from 'components/Universes';
import { getFighters }          from 'store/selectors/UniverseState';
import { FightersList }         from 'components/Fighters';
import { FighterModel }         from 'models/FighterModel';
import { useModalContext }      from 'context/ModalContext';
/* eslint-enable no-multi-spaces */

type Props = StackScreenProps<StackParamList, 'DashboardScreen'>;

const DashboardScreen: React.FC<Props> = ({
    navigation,
}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>();

    const fighters = useSelector(getFighters);

    const { showPopup } = useModalContext();


    const dispatch = useDispatch();

    const fetchData = useCallback(async () => {

        setIsLoading(true);

        try {
            await dispatch(fetchUniverses());
            await dispatch(fetchFighters());
        } catch(error) {
            console.log(error);
            setError(error);
        }

        setIsLoading(false);
    }, []);


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', fetchData);

        return () => {
            unsubscribe();
        };
    }, [fetchData]);

    const redirectDetailsScreen = ({ fighter }: { fighter: FighterModel}) => {
        navigation.navigate('FighterDetailsScreen', { fighter });
    };

    const redirectFilterScreen = () => {
        navigation.navigate('FiltersScreen');
    };

    if (isLoading) {
        return (
            <DashboardShimmer/>
        );
    }

    if (error) {
        showPopup({
            title: 'Oh no',
            message: `Something went wrong: ${error}`,
            buttonTitle: 'Dismiss',
        });
    }

    return (
        <SafeScreen
            title={'Fighters'}
            rightIconButton={'filter'}
            bodyStyle={styles.body_style}
            onPressRightIconButton={redirectFilterScreen}
            screenStyle={{ flex: undefined }}
        >

            <UniverseList onIsLoading={setIsLoading}/>

            <FightersList
                fighters={fighters}
                onItemPressed={redirectDetailsScreen}
            />

        </SafeScreen>
    );
};

const styles = StyleSheet.create({
    body_style: {
        backgroundColor: Colors.background_1,
    },
    text_style: {
        color: Colors.text_1,
        fontFamily: 'Roboto-Regular',
    },

});

export default DashboardScreen;
