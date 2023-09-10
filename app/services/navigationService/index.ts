import { CommonActions } from '@react-navigation/native';

interface NavigationActionsType {
    navigator: any;
    goBack: () => void;
    setNavigator: (data: any) => void;
    navigate: (route: string, params?: object) => void;
    reset: (index: number, navigator: string, routeName?: string, params?: object) => void;
}

const navigationActions: NavigationActionsType = { setNavigator, navigate, reset, goBack, navigator: {} };

export function setNavigator(nav: any) {
    if (nav) {
        navigationActions.navigator = nav;
    }
}

export function navigate(routeName: any, params: any) {
    if (navigationActions.navigator && routeName) {
        navigationActions.navigator.navigate(routeName, params);
    }
}

export function reset(index: any, navigator: any, routeName: any, params: any) {
    if (navigationActions.navigator && navigator) {
        const resetActions = [{ name: navigator }];
        routeName && resetActions.push({
            name: routeName,
            params,
        })
        const action = CommonActions.reset({
            index, routes: resetActions
        });
        navigationActions.navigator.dispatch(action);
    }
}

export function goBack() {
    if (navigationActions.navigator) {
        navigationActions.navigator.back({});
    }
}
export default navigationActions;