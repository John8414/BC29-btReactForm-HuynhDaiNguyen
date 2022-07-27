import { ADD_STUDENT, DELETE_STUDENT, SET_SELECTED_STUDENT, UPDATE_STUDENTS } from "../types/studentForm";

const DEFAULT_STATE = {
    studentList: [
        {
            id: '1',
            studentId: 'NguyenHD1007',
            fullName: 'Huynh Dai Nguyen',
            email: 'nguyenhd1007@gmail.com',
            phoneNumber: '0909246357'

        },
        {
            id: '2',
            studentId: 'HuuNT1508',
            fullName: 'Nguyen Trong Huu',
            email: 'xoaappdiba@gmail.com',
            phoneNumber: '0909123456'
        },
        {
            id: '3',
            studentId: 'Hai8008',
            fullName: 'Nguyen Viet Hai',
            email: 'caigidabainoi@gmail.com',
            phoneNumber: '0937808808'
        },
        {
            id: '4',
            studentId: 'Thanh9001',
            fullName: 'Pham Hong Thanh',
            email: 'lamduocthihannoinhaba@gmail.com',
            phoneNumber: '0909123456'
        },
    ],

    selectedStudent: null,

};

export const formReducer = (state = DEFAULT_STATE, { type, payload }) => {


    switch (type) {
        case ADD_STUDENT: {

            const data = [...state.studentList];
            data.push({ ...payload, id: Date.now(), });
            state.studentList = data;

            return { ...state };
        }
        case UPDATE_STUDENTS: {
            state.studentList = state.studentList.map(
                ele => ele.id === payload.id ? payload : ele
            );
            state.selectedStudent = null;

            return { ...state };
        }
        case SET_SELECTED_STUDENT: {
            return { ...state, selectedStudent: payload };
        }
        case DELETE_STUDENT: {
            const data = [...state.studentList];
            const idx = data.findIndex((ele) => ele.id === payload);
            if (idx !== -1) {
                data.splice(idx, 1);
            }

            state.studentList = state.studentList.filter((ele) => ele.id !== payload);

            return { ...state };
        }
        default:
            return state;
    }
};