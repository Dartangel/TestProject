export enum ActionTypes {
  GET_DRIVERS = 'GET_DRIVERS',
  GET_DRIVER_INFORMATION = 'GET_DRIVER_INFORMATION',
};

export const getDrivers = (data: number) => ({
  type: ActionTypes.GET_DRIVERS,
  data
});

export const getDriverInformation = (data: string) => ({
  type: ActionTypes.GET_DRIVER_INFORMATION,
  data
});
