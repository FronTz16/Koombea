/* eslint-disable no-multi-spaces */
import React                from 'react';
import {
    FlatList,
    StyleSheet,
    View,
}                           from 'react-native';
import {
    useDispatch,
    useSelector,
}                           from 'react-redux';
import UniverseButton       from './UniverseButton';
import {
    getActiveUniverse,
    getUniverses,
}                           from 'store/selectors/UniverseState';
import {
    fetchFighters,
    setActiveUniverse,
}                           from 'store/actions/UniverseState';
import { UniverseModel }    from 'models/UniverseModel';
import Colors               from 'constants/Colors';
import { useModalContext } from 'context/ModalContext';
/* eslint-enable no-multi-spaces */

type Props = {
    onIsLoading: (value:boolean) => void;
}

const UniverseList: React.FC<Props> = ({ onIsLoading }) => {

    const universes = useSelector(getUniverses);
    const activeFilter = useSelector(getActiveUniverse);
    const dispatch = useDispatch();
    const { showPopup } = useModalContext();


    const onPressUniverse = async ({ universe }: { universe: UniverseModel }) => {

        onIsLoading(true);

        try {
            await dispatch(setActiveUniverse({ universe }));
            await dispatch(fetchFighters());

        } catch(e) {
            showPopup({
                buttonTitle: 'Close',
                title: 'Something went wrong :(',
                message: String(e),
            });
        }

        onIsLoading(false);
    };

    const renderItem = ({ item }: { item : UniverseModel }) => (
        <UniverseButton
            text={item.name}
            active={item.objectID === activeFilter?.objectID}
            onPress={() => onPressUniverse({ universe: item })}
        />
    );

    const keyExractor = (i:UniverseModel) => String(i.name);

    return (
        <View style={styles.filter_list_container}>
            <FlatList<UniverseModel>
                horizontal
                showsHorizontalScrollIndicator={false}
                data={universes}
                keyExtractor={keyExractor}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    filter_list_container: {
        paddingLeft: 10,
        backgroundColor: Colors.background_2,
    },
});

export default UniverseList;
