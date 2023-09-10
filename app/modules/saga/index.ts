import { spawn } from 'redux-saga/effects';
import { watcherNavigationSplashScreen } from '../../views/splashScreen/saga';
import { watcherGetDrivers } from '../../views/homeScreen/saga';

export default function* rootSaga(): Generator {
    try {
        yield spawn(watcherNavigationSplashScreen);
        yield spawn(watcherGetDrivers);
    } catch (error) {
        console.log('error in rootSaga ', error);
    }
}
