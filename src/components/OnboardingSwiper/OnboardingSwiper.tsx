/* eslint-disable no-multi-spaces */
import React             from 'react';
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    View,
}                         from 'react-native';
import { useDispatch }    from 'react-redux';
import Onboarding         from 'react-native-onboarding-swiper';
import Colors             from 'constants/Colors';
import { setWelcomeSeen } from 'store/actions/PersistedState';
import { Button, IconButton } from 'components/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';
/* eslint-enable no-multi-spaces */

const Title = ({ text }: { text: string}) => (
    <View style={styles.title_container}>
        <Text style={styles.text}>
            {text}
        </Text>
    </View>
);

const OnboardingSwiper: React.FC = () => {

    const dispatch = useDispatch();

    const dispatchDone = () => {
        dispatch(setWelcomeSeen());
    };

    const Done = () => (
        <View style={styles.done_button_container}>
            <TouchableOpacity onPress={dispatchDone}>
                <View style={styles.done_button}>
                    <IconButton
                        name={'arrow-forward'}
                        size={27}
                        onPress={dispatchDone}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <Onboarding
            bottomBarHighlight={false}
            allowFontScaling={false}
            showNext={false}
            showSkip={false}
            DoneButtonComponent={Done}
            showDone={true} // TODO turn this to false and create a custom dots component
            containerStyles={{
                justifyContent: 'flex-start',
            }}
            onDone={dispatchDone}
            imageContainerStyles={styles.image_container_style}
            pages={[
                {
                    backgroundColor: Colors.background_4,
                    image:
                        <Image
                            source={require('../../../assets/onboardingSwiper/lucas.png')}
                        />,
                    title: <Title text={'Access our \n Extended Catalog'} />,
                    subtitle: '',
                },
                {
                    backgroundColor: Colors.background_4,
                    image:
                    <Image
                        source={require('../../../assets/onboardingSwiper/sonic.png')}
                    />,
                    title: <Title text={'Filter Fighters'}/>,
                    subtitle: '',
                },
                {
                    backgroundColor: Colors.background_4,
                    image:
                    <Image
                        source={require('../../../assets/onboardingSwiper/mario.png')}
                    />,
                    title: <Title text={'And more...'}/>,
                    subtitle: '',
                },
            ]}
        />

    );

};


export default OnboardingSwiper;

const styles = StyleSheet.create({

    text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 25,
        textAlign: 'center',
        color: Colors.text_5,
    },
    title_container: {
        marginTop: Platform.OS === 'android' ? 80 : 5,
    },
    image_container_style: {
        marginTop: 144,
    },
    done_button: {
        backgroundColor: '#FFF',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.8,
        margin: 10,
    },
    done_button_container: {
        marginRight: 30,
        marginBottom: 50,
        // backgroundColor: 'red',
    },
});
