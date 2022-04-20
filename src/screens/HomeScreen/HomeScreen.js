import React from 'react';
import {View, Text} from 'react-native';

const HomeScreen = () => {
    const signOut = () => {
        console.warn("SignOut");
        //   Auth.signOut();
    };
    return (
        <View>
            <Text>Home, sweet home</Text>
        </View>
    );
};

export default HomeScreen;