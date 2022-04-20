import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUp from "../screens/SingUp"
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const [user, setUser] = useState(undefined);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <>
                    <Stack.Screen name="SignUp" component={SignUp} />
                </>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
