import { Constants } from "./actions";

export interface Driver {
    permanentNumber: number;
    dateOfBirth: string;
    driverId: string;
    familyName: string;
    givenName: string;
    nationality: string;
    url: string;
};

export interface DriversState {
    drivers: Array<Driver>
    totalCount: number;
    aboutDriver: Driver;
}

export type SetDrivers = {
    type: typeof Constants.SET_DRIVERS;
    data: Array<Driver>;
};

export type SetTotalDrivers = {
    type: typeof Constants.SET_TOTAL_DRIVERS;
    data: number;
};

export interface DriverInformationState {
    aboutDriver: Driver;
}

export type SetDriversInformation = {
    type: typeof Constants.SET_DRIVER_INFORMATION;
    data: Driver;
};

export type Action =
    | SetDrivers
    | SetDriversInformation
    | SetTotalDrivers;