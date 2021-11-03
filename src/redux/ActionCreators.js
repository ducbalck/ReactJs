import * as ActionTypes from "./ActionTypes";

import { baseUrl } from "../shared/baseUrl";


export const deleteStaff =(staffId)=>(dispatch)=>{
  dispatch(staffsLoading());
  
  return fetch(baseUrl + "staffs/"+staffId, {
    method: "DELETE",
   
    headers: {
      "Content-Type": "application/json",
    },
   
  })
      .then((response) => response.json())
      .then((response) => dispatch(addStaffs(response)));
  };

export const postStaff =
  ({ name, doB, salaryScale, startDate, departmentId, annualLeave, overTime }) =>
  (dispatch) => {
    const newstaff = {
      name: name,
      doB: doB,
      salaryScale: salaryScale,
      startDate: startDate,
      departmentId: departmentId,
      annualLeave: annualLeave,
      overTime: overTime,
    };

    return fetch(baseUrl + "staffs", {
      method: "POST",
      body: JSON.stringify(newstaff),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((response) => dispatch(addStaffs(response)));
  };

export const fetchStaffs = () => (dispatch) => {
  dispatch(staffsLoading(true));

  return fetch(baseUrl + "staffs")
    .then((response) => response.json())
    .then((staffs) => dispatch(addStaffs(staffs)));
};

export const staffsLoading = () => ({
  type: ActionTypes.STAFFS_LOADING,
});

export const staffFailed = (errmess) => ({
  type: ActionTypes.STAFFS_FAILED,
  payload: errmess,
});

export const addStaffs = (staffs) => ({
  type: ActionTypes.ADD_STAFFS,
  payload: staffs,
});

export const fetchDepartments = () => (dispatch) => {
  dispatch(departmentsLoading(true));

  return fetch(baseUrl + "departments")
    .then((response) => response.json())
    .then((departments) => dispatch(addDepartments(departments)));
};

export const departmentsLoading = () => ({
  type: ActionTypes.DEPARTMENTS_LOADING,
});

export const departmentsFailed = (errmess) => ({
  type: ActionTypes.DEPARTMENTS_FAILED,
  payload: errmess,
});

export const addDepartments = (departments) => ({
  type: ActionTypes.ADD_DEPARTMENTS,
  payload: departments,
});
export const editStaff =
 ({id, name, doB, salaryScale, startDate, departmentId, annualLeave, overTime }) =>
  (dispatch) => {
    const staff = {
      id:id,
      name: name,
      doB: doB,
      salaryScale: salaryScale,
      startDate: startDate,
      departmentId: departmentId,
      annualLeave: annualLeave,
      overTime: overTime,
    };

    return fetch(baseUrl + "staffs", {
      method: "PATCH",
      body: JSON.stringify(staff),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((response) => dispatch(addStaffs(response)));
};