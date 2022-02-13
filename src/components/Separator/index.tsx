/* eslint-disable no-multi-spaces */
import React                   from 'react';
import { View, ViewStyle }                from 'react-native';
import Colors                  from 'constants/Colors';
/* eslint-enable no-multi-spaces */

const Separator = ({ style }: SeparatorProps) => (
    <View style={[
        {
            backgroundColor: Colors.gray_20,
            height: 1,
            width: '100%',
            paddingVertical: 1,
            // borderColor: Colors.secondary_1,
        }, style,
    ]}/>
);

type SeparatorProps = {
    style?: ViewStyle,
};

export default Separator;
