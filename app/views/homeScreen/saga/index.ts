
import { call, put, takeEvery } from '@redux-saga/core/effects';
import { ActionTypes, getDriverInformation, getDrivers } from './actions';
import requestApi from '../../../services/fetchRequests';
import { setDriverInformation, setDrivers, setTotalDrivers } from '../redux/actions';
import { Driver } from '../redux/types';
import navigationActions from '../../../services/navigationService';

export function* watcherGetDrivers(): Generator {
    yield takeEvery(ActionTypes.GET_DRIVERS, workerGetDrivers);
    yield takeEvery(ActionTypes.GET_DRIVER_INFORMATION, workerGetDriverInformation);
}

export function* workerGetDrivers({ data }: ReturnType<typeof getDrivers>): Generator {
    try {
        const url = data ? `.json?limit=30&offset=${data}` : ".json";
        const response = yield call(requestApi.get, url);

        const { DriverTable: { Drivers }, total } = response?.data?.MRData;

        yield put(setDrivers(Drivers));
        if (!data) {
            yield put(setTotalDrivers(total));
        }

    } catch (error) {
        console.warn(`Error in workerGetDrivers`, error);
    }
};

export function* workerGetDriverInformation({ data }: ReturnType<typeof getDriverInformation>): Generator {
    try {
        const response = yield call(requestApi.get, `/${data}.json`);

        yield put(setDriverInformation(response?.data.MRData.DriverTable.Drivers[0] as Driver));
        yield call(navigationActions.navigate, 'AboutDriverScreen');
    } catch (error) {
        console.warn(`Error in workerGetDriverInformation`, error);
    }
};
