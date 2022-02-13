/* eslint-disable no-multi-spaces */
import React                  from 'react';
import { View, FlatList }     from 'react-native';
import { FighterModel }       from 'models/FighterModel';
import FighterItem            from './FighterItem';
import Separator              from 'components/Separator';
/* eslint-enable no-multi-spaces */

const FightersList: React.FC<Props> = ({ fighters, onItemPressed }) => {

    const keyExractor = (i:FighterModel) => String(i.imageURL);

    const renderItem = ({ item }: { item : FighterModel }) => (
        <FighterItem fighter={item} onPress={onItemPressed}/>
    );

    const ITEM_HEIGHT = 121; // fixed height of item component

    const getItemLayout = (
        data: FighterModel[] | null | undefined,
        index: number
    ) => {
        const height = data?.length ? data.length : 1;

        return {
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * height, // Separator Component included
            index,
        };
    };

    return (

        <View>

            <FlatList<FighterModel>
                data={fighters}
                // using imageURL as ID since some ObjectIds are duplicated
                keyExtractor={keyExractor}
                getItemLayout={getItemLayout}
                ItemSeparatorComponent={Separator}
                removeClippedSubviews={true}
                maxToRenderPerBatch={7}
                renderItem={renderItem}
            />

        </View>
    );
};

type Props = {
    fighters: FighterModel[];
    onItemPressed: ({ fighter }: { fighter: FighterModel}) => void;
}

export default FightersList;
