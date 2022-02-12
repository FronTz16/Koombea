/* eslint-disable no-multi-spaces */
import React, { useState }                    from 'react';
import {
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    View,
}                                             from 'react-native';
import { connect }                            from 'react-redux';
import { AppDispatch, RootState }             from 'store/store';
import { TextInput, PasswordInput }           from 'components/Input';
import Colors                                 from 'constants/Colors';
import { Button }                             from 'components/Button';
/* eslint-enable no-multi-spaces */

const LoginScreen = ({ dispatch, loggingIn }: LoginScreenProps) => {

    const [email, setEmail] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();

    const onLogin = () => {
        if (!email || !password) {
            return;
        }

        console.log('dispatching login');
        // dispatch(login({ email, password }));
    };

    console.log('dispatching login');

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            {/* <StatusBar backgroundColor="transparent" barStyle='dark-content' translucent /> */}

            <ScrollView contentContainerStyle={styles.container}>
                <View style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Image
                        resizeMode='stretch'
                        source={require('../../assets/images/logo.png')}
                        style={{ height: 120, width: 120 }}
                    />
                </View>

                <View style={{ flex: 4 }}>
                    <View style={styles.email_container}>
                        <TextInput
                            autoCapitalize='none'
                            editable={!loggingIn}
                            enablesReturnKeyAutomatically
                            keyboardType='email-address'
                            onChangeText={text => setEmail(text)}
                            returnKeyType='next'
                            testID='username'
                            title='Email'
                        />
                    </View>

                    <View style={styles.password_container}>
                        <PasswordInput
                            editable={!loggingIn}
                            enablesReturnKeyAutomatically
                            onChangeText={text => setPassword(text)}
                            onSubmitEditing={() => console.log('Onlogin')}
                            returnKeyType='done'
                            title='Contraseña'
                            value={password}
                        />
                    </View>

                    <View style={styles.button_container}>
                        <Button
                            disabled={!email || !password}
                            loading={loggingIn}
                            onPress={onLogin}
                            title='Continuar'
                        />
                    </View>
                </View>
            </ScrollView>

        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background_1,
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 30,
    },
    email_container: {
        marginBottom: 10,
        marginTop: 40,
    },
    password_container: {
        marginBottom: 10,
        marginTop: 10,
    },
    forgot: {
        color: Colors.primary,
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        textDecorationLine: 'underline',
    },
    button_container: {
        flexDirection: 'row',
        marginTop: 30,
    },
});

type LoginScreenProps = {
    dispatch: AppDispatch;
    loggingIn: boolean;
}

const mapStateToProps = (state: RootState) => {
    const {
        appState: { loggingIn },
    } = state;

    return {
        loggingIn,
    };
};

export default connect(mapStateToProps)(LoginScreen);
