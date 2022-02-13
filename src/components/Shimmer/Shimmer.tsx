/* eslint-disable no-multi-spaces */

import React, { useState }     from 'react';
import {
    Animated,
    Dimensions,
    Easing,
    StyleSheet,
    View,
    ViewStyle,
}                              from 'react-native';
import LinearGradient          from 'react-native-linear-gradient';
import Colors                  from 'constants/Colors';
/* eslint-enable no-multi-spaces */

const SCREEN_WIDTH = Dimensions.get('screen').width;
const START = -1;
const END = 1;
const DURATION = 2000;
const COLORS = [Colors.shimmer_1, Colors.shimmer_2, Colors.shimmer_1];
const LOCATIONS = [0.1, 0.5, 0.9];
const ANIMATION = new Animated.Value(START);

const runAnimation = () => {
    ANIMATION.setValue(START);
    Animated.timing(ANIMATION, {
        toValue: END,
        duration: DURATION,
        easing: Easing.linear,
        useNativeDriver: true,
    }).start(runAnimation);
};

const linear = ANIMATION.interpolate({
    inputRange: [START, END],
    outputRange: [-SCREEN_WIDTH, SCREEN_WIDTH],
});

runAnimation();

const Shimmer = ({ style }: ShimmerProps) => {

    const [positionX, setPositionX] = useState<number | null>(null);

    let viewRef: View | null = null;

    return (
        <View
            style={[styles.shimmer, style]}
            ref={ref => (viewRef = ref)}
            onLayout={() => {
                if (viewRef) {
                    viewRef.measure((_x, _y, _width, _height, pageX) => {
                        setPositionX(pageX);
                    });
                }
            }}>
            {(typeof positionX === 'number') && (
                <Animated.View
                    style={{
                        flex: 1,
                        left: -positionX,
                        transform: [{ translateX: linear }],
                    }}>
                    <LinearGradient
                        style={{ flex: 1, width: SCREEN_WIDTH }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        locations={LOCATIONS}
                        colors={COLORS}
                    />
                </Animated.View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    shimmer: {
        backgroundColor: Colors.shimmer_1,
        overflow: 'hidden',
    },
});

type ShimmerProps = {
    style: ViewStyle;
}
export default Shimmer;
