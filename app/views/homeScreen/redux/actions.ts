import { Driver, SetDrivers, SetDriversInformation, SetTotalDrivers } from "./types";

export const Constants = {
    SET_DRIVERS: 'SET_DRIVERS',
    SET_TOTAL_DRIVERS: 'SET_TOTAL_DRIVERS',
    SET_DRIVER_INFORMATION: 'SET_DRIVER_INFORMATION',
};

export const setDriverInformation = (data: Driver): SetDriversInformation => ({
    type: Constants.SET_DRIVER_INFORMATION,
    data,
});

export const setDrivers = (data: Array<Driver>): SetDrivers => ({
    type: Constants.SET_DRIVERS,
    data,
});

export const setTotalDrivers = (data: number): SetTotalDrivers => ({
    type: Constants.SET_TOTAL_DRIVERS,
    data,
});
