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
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { BackButton, IconButton }       from 'components/Button';
import { Label }                        from '.';
import Colors                           from 'constants/Colors';
import LabelButton                      from 'components/Button/LabelButton';
/* eslint-enable no-multi-spaces */

const ScreenHeader: React.FC<Props> = ({
    leftToolbarAction = 'back',
    leftToolbarStyle,
    leftToolbarComponent,
    onPressRightToolbar,
    rightToolbarTitle,
    rightToolbar = false,
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

    const toggleDrawer = () => navigation.dispatch(DrawerActions.openDrawer());


    const getLeftToolbarActionComponent = () => {
        switch (leftToolbarAction) {
            case 'back':
                return <BackButton onPress={goBack} style={styles.toolbar_button}/>;
            case 'drawer':
                return (
                    <IconButton
                        name='menu'
                        onPress={toggleDrawer}
                        size={25}
                        style={styles.toolbar_button}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            {/* Status bar */}
            <StatusBar backgroundColor={statusBarBackgroundColor} barStyle={statusBarStyle} />

            {/* Tool bar */}
            <View style={[styles.toolbar, leftToolbarStyle]}>
                {leftToolbarComponent || getLeftToolbarActionComponent()}
                {rightToolbar && onPressRightToolbar && rightToolbarTitle &&
                    <LabelButton label={rightToolbarTitle} onPress={onPressRightToolbar}/>
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
    leftToolbarAction?: 'back' | 'drawer',
    leftToolbarComponent?: React.ReactNode,
    leftToolbarStyle?: ViewStyle,
    onPressRightToolbar?: () => void,
    rightToolbarTitle?: string,
    rightToolbar?: boolean,
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
    container: {
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
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
        // paddingHorizontal: 10,
        paddingVertical: 5,
    },
    toolbar: {
        alignItems: 'center',
        backgroundColor: Colors.background_2,
        flexDirection: 'row',
        height: 48,
        justifyContent: 'space-between',
        padding: 5,
        paddingHorizontal: 10,
    },
});

export default ScreenHeader;
