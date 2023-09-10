import React, { FC, useEffect } from 'react';
import { View, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { navigationSplashScreen } from './saga/actions';
import { styles } from './styles';

interface Props {
    navigation: any;
}

export const SplashScreen: FC<Props> = ({ navigation }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(navigationSplashScreen(navigation));
    }, []);

    return (
        <View style={styles.container}>
            <Image resizeMode='stretch' style={styles.logo} source={require('../../assets/images/logo.jpg')} />
        </View>
    );
};