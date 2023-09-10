import { call, delay,takeEvery } from "redux-saga/effects";
import navigationActions from "../../../services/navigationService";
import { navigationSplashScreen } from "./actions";
import { ActionType } from "./actions";

export function* watcherNavigationSplashScreen(): Generator {
    yield takeEvery(ActionType.NAVIGATION_SPLASH_SCREEN, workerNavigationSplashScreen);
};

export function* workerNavigationSplashScreen(action: ReturnType<typeof navigationSplashScreen>): Generator {
    yield call(navigationActions.setNavigator, action.data);
    yield delay(3000);
    yield call(navigationActions.reset, 0, 'HomeScreen');
};