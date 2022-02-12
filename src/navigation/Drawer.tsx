/* eslint-disable no-multi-spaces */
import React                         from 'react';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
}                                    from '@react-navigation/drawer';
import {
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
}                                    from 'react-native';
import DashboardScreen               from 'screens/Dashboard';
import Colors                        from 'constants/Colors';
/* eslint-enable no-multi-spaces */

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerItem = ({ onPress, title }:DrawerItemProps) => (

    <TouchableOpacity onPress={onPress} style={styles.drawer_option_container}>
        {/* Title */}
        <Text style={styles.drawer_option_text}>{title}</Text>
    </TouchableOpacity>
);

const CustomDrawer = ({ ...props }) => (

    <DrawerContentScrollView {...props} style={styles.container}>

        <View style={styles.name_container}>
            <Image
                resizeMode='stretch'
                source={require('../../assets/splash_screen_logo.png')}
                style={styles.trendmx_logo}
            />
            <Text style={styles.name}>TrendMX</Text>
        </View>

        <DrawerItem
            onPress={() => props.navigation.navigate('Dashboard')}
            title='Dashboard'
        />

    </DrawerContentScrollView>
);


export const MainDrawer = () => (
    <Drawer.Navigator
        screenOptions={{
            headerShown: false,
        }}
        drawerContent={ props => <CustomDrawer {...props}/>}
    >
        <Drawer.Screen name ="Dashboard" component={DashboardScreen} />
    </Drawer.Navigator>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background_2,
        paddingTop: 30,
    },
    trendmx_logo: {
        height: 50,
        width: 50,
    },
    name_container: {
        marginBottom: 20,
        marginTop: 30,
        paddingRight: 65,
        paddingLeft: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    name: {
        color: Colors.primary,
        fontFamily: 'Roboto-Regular',
        fontSize: 26,
    },
    location_address: {
        color: Colors.primary,
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
    },
    drawer_option_container: {
        padding: 15,
        paddingLeft: 35,
        flexDirection: 'row',
    },
    drawer_option_text: {
        color: Colors.text_1,
        fontFamily: 'Roboto-Regular',
        fontSize: 26,
    },
});

export type DrawerParamList = {
    Dashboard: undefined;
};

type DrawerItemProps = {
    onPress: () => void;
    title: string;
};
