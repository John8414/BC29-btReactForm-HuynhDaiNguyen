import { ADD_STUDENT, DELETE_STUDENT, SET_SELECTED_STUDENT, UPDATE_STUDENTS } from "../types/studentForm";

export {
    addStudentAction,
    updateStudentAction,
    setSelectedStudentAction,
    deleteStudentAction,
};
const addStudentAction = (values) => {
    return {
        type: ADD_STUDENT,
        payload: values,
    };
};
const updateStudentAction = (values) => {
    return {
        type: UPDATE_STUDENTS,
        payload: values,
    };
};
const setSelectedStudentAction = (ele) => {
    return {
        type: SET_SELECTED_STUDENT,
        payload: ele,
    };
};
const deleteStudentAction = (id) => {
    return {
        type: DELETE_STUDENT,
        payload: id,
    };
};