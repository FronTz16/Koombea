/* eslint-disable no-multi-spaces */
import React                 from 'react';
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    TextStyle,
    View,
    ViewStyle,
}                            from 'react-native';
import Colors                from 'constants/Colors';
// import { ScreenHeader }                     from 'components/common';
import {
    AndroidHeader,
    IosHeader,
}                            from 'components/common/ScreenHeaders';
/* eslint-enable no-multi-spaces */

/**
 * Creates a screen template based on the req design using
 * SafeAreView to avoid notch issues
 *
 * @param {Object} params
 * @param {string} params.bodyBackgroundColor - Screen body background color
 * @param {Object} params.bodyScrollViewProps - Screen body scrollView props
 * @param {Object} params.bodyStyle - Screen body custom style
 * @param {ReactElement} params.children - Screen body wrapped inside a KeyboardAwareScrollView
 * @param {ReactElement} params.footerComponent - React component rendered as footer
 * @param {Object} params.footerStyle - Footer custom style
 * @param {Object} params.screenStyle - Main screen custom style
 * @param {string} params.statusBarBackgroundColor - Status bar background color (Android only)
 * @param {string} params.statusBarStyle - Status bar text color
 * @param {string} params.subtitle - Subtitle text
 * @param {Object} params.subtitleStyle - Subtitle text custom style
 * @param {string} params.title - Title text [Required]
 * @param {Object} params.titleBarStyle - Title bar custom style
 * @param {string} params.titleLabel - Optional label that goes before the title
 * @param {Object} params.titleStyle - Title text custom style
 * @param {string} params.toolbarAction - Either back button or drawer menu button.
 * @param {ReactElement} params.toolbarComponent - React component rendered as toolbar
 * @param {Object} params.toolbarStyle - Toolbar custom style
 *
 */
const SafeScreen: React.FC<Props> = ({
    bodyBackgroundColor = Colors.background_2,
    bodyStyle,
    children,
    footerComponent,
    footerStyle,
    leftToolbarAction,
    toolbarStyle,
    leftToolbarComponent,
    onPressRightIconButton,
    rightIconButton,
    screenStyle,
    statusBarBackgroundColor = Colors.background_2,
    statusBarStyle = 'dark-content',
    subtitle,
    subtitleStyle,
    title,
    titleBarStyle,
    titleLabel,
    titleStyle,
}) =>
    (
        <>
            <SafeAreaView style={styles.safeareaview} />

            <View style={[
                styles.screenContainer,
                screenStyle,
                { backgroundColor: bodyBackgroundColor },
            ]}>
                { Platform.OS === 'android' ?
                    <AndroidHeader
                        onPressRightIconButton={onPressRightIconButton}
                        rightIconButton={rightIconButton}
                        statusBarBackgroundColor={statusBarBackgroundColor}
                        statusBarStyle={statusBarStyle}
                        subtitle={subtitle}
                        subtitleStyle={subtitleStyle}
                        titleBarStyle={titleBarStyle}
                        titleLabel={titleLabel}
                        titleStyle={titleStyle}
                        title={title}
                        leftToolbarAction={leftToolbarAction}
                        toolbarStyle={toolbarStyle}
                        leftToolbarComponent={leftToolbarComponent}
                    />
                    :
                    <IosHeader
                        onPressRightIconButton={onPressRightIconButton}
                        rightIconButton={rightIconButton}
                        statusBarBackgroundColor={statusBarBackgroundColor}
                        statusBarStyle={statusBarStyle}
                        subtitle={subtitle}
                        subtitleStyle={subtitleStyle}
                        titleBarStyle={titleBarStyle}
                        titleLabel={titleLabel}
                        titleStyle={titleStyle}
                        title={title}
                        leftToolbarAction={leftToolbarAction}
                        toolbarStyle={toolbarStyle}
                        leftToolbarComponent={leftToolbarComponent}
                    />
                }

                {/* Body */}
                <View style={bodyStyle}>
                    {children}
                </View>

                {/* Footer */}
                {footerComponent &&
                    <SafeAreaView style={footerStyle} >{footerComponent}</SafeAreaView>
                }

            </View>
        </>
    )
;

type Props = {
    bodyBackgroundColor?: string,
    bodyStyle?: ViewStyle,
    children: React.ReactNode,
    footerComponent?: React.ReactNode,
    footerStyle?: ViewStyle,
    leftToolbarAction?: 'back',
    leftToolbarComponent?: React.ReactNode,
    toolbarStyle?: ViewStyle,
    onPressRightIconButton?: () => void,
    rightIconButton?: string,
    screenStyle?: ViewStyle,
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
    safeareaview: {
        backgroundColor: Colors.background_2,
        flex: 0,
    },
    screenContainer: {
        flex: 1,
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
    title_bar: {
        backgroundColor: Colors.background_2,
        borderBottomWidth: 2,
        borderColor: Colors.gray_20,
        paddingBottom: 20,
        paddingHorizontal: 15,
    },
    title_container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    toolbar: {
        alignItems: 'center',
        backgroundColor: Colors.background_2,
        flexDirection: 'row',
        height: 48,
        justifyContent: 'space-between',
        padding: 5,
    },
    toolbar_button: {
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
});

export default SafeScreen;
