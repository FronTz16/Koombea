/* eslint-disable no-multi-spaces */
import React                            from 'react';
import {
    StatusBar,
    StyleSheet,
    View,
    Text,
    TextStyle,
    ViewStyle,
}                                       from 'react-native';
import { useNavigation }                from '@react-navigation/native';
import { BackButton, IconButton }       from 'components/Button';
import Colors                           from 'constants/Colors';
import { Label }                        from '..';
import { useSelector } from 'react-redux';
import { hasActiveFilters } from 'store/selectors/FiltersState';
/* eslint-enable no-multi-spaces */

const IosHeader: React.FC<Props> = ({
    leftToolbarAction,
    leftToolbarComponent,
    toolbarStyle,
    onPressRightIconButton,
    rightIconButton,
    statusBarBackgroundColor,
    statusBarStyle,
    subtitle,
    subtitleStyle,
    titleBarStyle,
    titleLabel,
    titleStyle,
    title,
}) => {
    const navigation = useNavigation();

    const goBack = () => navigation.goBack();

    const hasFilters = useSelector(hasActiveFilters);

    const getLeftToolbarActionComponent = () => {
        switch (leftToolbarAction) {
            case 'back':
                return <BackButton onPress={goBack} style={styles.toolbar_button}/>;
            default:
                return null;
        }
    };

    return (
        <View>
            {/* Status bar */}
            <StatusBar backgroundColor={statusBarBackgroundColor} barStyle={statusBarStyle} />

            {/* Tool bar */}
            <View style={[styles.toolbar, toolbarStyle]}>

                <View style={{ alignSelf: 'flex-start' }}>
                    {leftToolbarComponent || getLeftToolbarActionComponent()}
                </View>

                {rightIconButton && onPressRightIconButton &&
                    <View style={{ alignSelf: 'flex-end' }}>
                        <IconButton
                            name={rightIconButton}
                            onPress={onPressRightIconButton}
                            color={hasFilters ? Colors.primary : '#000' }
                        />
                    </View>
                }
            </View>

            {/* Title bar */}
            <View style={[styles.title_bar, titleBarStyle]}>

                {/* Title */}
                <View style={styles.title_container}>
                    {titleLabel && <Label text={titleLabel} style={styles.label} />}
                    <Text numberOfLines={2} style={[styles.title, titleStyle]}>{title}</Text>
                </View>

                {/* Subtitle */}
                {subtitle && <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>}

            </View>

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
    statusBarStyle?: 'default' | 'dark-content' | 'light-content',
    subtitle?: string,
    subtitleStyle?: TextStyle,
    title: string,
    titleBarStyle?: ViewStyle,
    titleLabel?: string,
    titleStyle?: TextStyle,
};

const styles = StyleSheet.create({
    label: {
        marginRight: 10,
    },
    subtitle: {
        color: Colors.gray_100,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        lineHeight: 20,
        marginTop: 10,
    },
    title: {
        color: Colors.text_1,
        fontFamily: 'Roboto-Medium',
        fontSize: 26,
    },
    title_container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    title_bar: {
        backgroundColor: Colors.background_2,
        borderBottomWidth: 2,
        borderColor: Colors.gray_20,
        paddingBottom: 20,
        paddingHorizontal: 15,
    },
    toolbar_button: {
        borderRadius: 50,
        paddingVertical: 5,
    },
    toolbar: {
        alignItems: 'center',
        backgroundColor: Colors.background_2,
        height: 48,
        padding: 5,
        paddingHorizontal: 10,
    },
});

export default IosHeader;
