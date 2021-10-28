import { DEPARTMENTS,  STAFFS } from '../shared/staffs';


export const initialState = {
    staffs: STAFFS,
    deparment: DEPARTMENTS
};

export const Reducer = (state = initialState, action) => {
    return state;
};