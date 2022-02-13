/* eslint-disable no-multi-spaces */
import React                    from 'react';
import OnboardingScreen         from 'screens/Onboarding';
import { RootState }            from 'store/store';
import { connect }              from 'react-redux';
import { MainStack }            from './Main';

/* eslint-enable no-multi-spaces */

type Props = {
    onboardingSeen: boolean;
}

const Koombea: React.FC<Props> = ({ onboardingSeen }) => {

    if (!onboardingSeen) {
        return (
            <OnboardingScreen/>
        );
    }

    return (
        <MainStack/>
    );

};

const mapStateToProps = (state:RootState) => {
    const {
        persistedState: {
            onboardingSeen,
        },
    } = state;

    return {
        onboardingSeen,
    };
};

export default connect(mapStateToProps)(Koombea);
