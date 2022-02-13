/* eslint-disable no-multi-spaces */
import React                            from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextStyle,
    ViewStyle,
}                                       from 'react-native';
import { useNavigation }                from '@react-navigation/native';
import { BackButton, IconButton }       from 'components/Button';
import Colors                           from 'constants/Colors';
import { useSelector } from 'react-redux';
import { hasActiveFilters } from 'store/selectors/FiltersState';
/* eslint-enable no-multi-spaces */

const AndroidHeader: React.FC<Props> = ({
    leftToolbarAction,
    leftToolbarComponent,
    onPressRightIconButton,
    rightIconButton,
    titleStyle,
    title,
}) => {

    const navigation = useNavigation();

    const hasFilters = useSelector(hasActiveFilters);

    const goBack = () => navigation.goBack();

    const getLeftToolbarActionComponent = () => {
        switch (leftToolbarAction) {
            case 'back':
                return <BackButton
                    onPress={goBack}
                    color={'#FFF'}
                />;
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            {/* Status bar */}

            {/* Backbutton */}
            {leftToolbarComponent || getLeftToolbarActionComponent() &&
                <View style={styles.icon_container}>
                    {leftToolbarComponent || getLeftToolbarActionComponent()}
                </View>
            }

            <View style={styles.title_container}>
                <Text numberOfLines={1} style={[styles.title, titleStyle]}>{title}</Text>
            </View>

            {rightIconButton && onPressRightIconButton &&
                <View style={styles.icon_container}>
                    <IconButton
                        name={rightIconButton}
                        onPress={onPressRightIconButton}
                        color={hasFilters ? '#FFF' : '#000' }
                    />
                </View>
            }

        </View>
    );
};

type Props = {
    leftToolbarAction?: 'back',
    leftToolbarComponent?: React.ReactNode,
    toolbarStyle?: ViewStyle,
    onPressRightIconButton?: () => void,
    rightIconButton?: string,
    statusBarBackgroundColor?: string,
    title: string,
    titleStyle?: TextStyle,
};

const styles = StyleSheet.create({
    container: {
        elevation: 5,
        height: 70,
        backgroundColor: Colors.primary,
        flexDirection: 'row',
    },
    label: {
        marginRight: 10,
    },
    title: {
        color: Colors.text_5,
        fontFamily: 'Roboto-Regular',
        fontSize: 20,
    },
    title_container: {
        flex: 5,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    icon_container: {
        flex: 1,
        justifyContent: 'center',
    },

});

export default AndroidHeader;
