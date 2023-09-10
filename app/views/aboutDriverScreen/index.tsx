import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';
import { getAboutDriverDriver } from '../../modules/saga/selectors';
import MainHeader from '../../components/mainHeader';
import styles from './styles';

interface Props {
}

export const AboutDriverScreen: FC<Props> = () => {
    const driver = useSelector(getAboutDriverDriver, shallowEqual);

    return (
        <>
            <MainHeader title={`${driver.givenName} ${driver.familyName}`} isBack />
            <View style={styles.container}>
                <Text style={styles.title}>Name:  <Text style={styles.subtitle}>{driver.givenName} {driver.familyName}</Text></Text>
                <Text style={styles.title}>Nationality:  <Text style={styles.subtitle}>{driver.nationality}</Text></Text>
                <Text style={styles.title}>Birthday:  <Text style={styles.subtitle}>{driver.permanentNumber}</Text></Text>
                {driver?.permanentNumber
                    ? <Text style={styles.title}>Driver Number:  <Text style={styles.subtitle}>{driver.permanentNumber}</Text></Text>
                    : <></>}
            </View>
        </>
    )
}