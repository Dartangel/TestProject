import { Constants } from "./actions"
import { DriversState, SetDrivers } from "./types"

const initialState: DriversState = {
    drivers: [],
    totalCount: 1,
    aboutDriver: {
        dateOfBirth: "",
        driverId: "",
        familyName: "",
        givenName: "",
        nationality: "",
        url: "",
    }
}

export const driversReducer = (state = initialState, action: SetDrivers) => {
    switch (action.type) {
        case Constants.SET_DRIVERS:
            return { ...state, drivers: [...state.drivers, ...action.data] }
        case Constants.SET_TOTAL_DRIVERS:
            return { ...state, totalCount: action.data }
        case Constants.SET_DRIVER_INFORMATION:
            return { ...state, aboutDriver: action.data }
        default: return state
    }
}
