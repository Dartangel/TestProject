import React, { FC, useEffect, useMemo, useState } from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { getDriversList, getTotalDriversCount } from '../../modules/saga/selectors';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getDriverInformation } from './saga/actions';
import { getDrivers } from './saga/actions';
import styles from './styles';

interface Props {
}

export const HomeScreen: FC<Props> = () => {
    const dispatch = useDispatch();
    const [total, setTotal] = useState<number>(0);
    const drivers = useSelector(getDriversList, shallowEqual);
    const totalCount = useSelector(getTotalDriversCount, shallowEqual);

    useEffect(() => {
        total < totalCount
            ? dispatch(getDrivers(total))
            : null;
    }, [total]);

    const handlePress = (driverId: string): void => {
        dispatch(getDriverInformation(driverId));
    };

    const renderItem = useMemo(() => drivers.map((item: any, index: number) =>
        <TouchableOpacity
            key={`${item?.driverId} + ${index}`}
            style={styles.content}
            onPress={() => handlePress(item?.driverId)}>
            <Text style={styles.title}>{item?.familyName}</Text>
        </TouchableOpacity>
    ), [drivers]);

    return (
        <ScrollView
            contentContainerStyle={styles.contentContainer}
            style={styles.scrollView}>
            {renderItem}
            {total < totalCount
                ? <TouchableOpacity
                    onPress={() => setTotal(total + 30)}
                    style={styles.moreButton}>
                    <Text style={styles.moreTitle}>More...</Text>
                </TouchableOpacity>
                : <></>}
        </ScrollView>
    )
}