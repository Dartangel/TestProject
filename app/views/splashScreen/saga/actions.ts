export enum ActionType {
    NAVIGATION_SPLASH_SCREEN = 'NAVIGATION_SPLASH_SCREEN',
};

export const navigationSplashScreen = (navigation: any) => ({
    type: ActionType.NAVIGATION_SPLASH_SCREEN,
    data: navigation,
});