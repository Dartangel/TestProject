import { AppState } from "../redux/store";

export const getDriversList = (state: AppState) => state.driversReducer.drivers;
export const getTotalDriversCount = (state: AppState) => state.driversReducer.totalCount;
export const getAboutDriverDriver = (state: AppState) => state.driversReducer.aboutDriver;
