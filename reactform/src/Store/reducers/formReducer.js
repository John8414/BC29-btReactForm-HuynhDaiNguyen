
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
        }
    ],

    selectedStudent: null,

};

export const formReducer = (state = DEFAULT_STATE, { type, payload }) => {


    switch (type) {
        case 'ADD_STUDENT': {

            const data = [...state.studentList];
            data.push({ ...payload, id: Date.now(), });
            state.studentList = data;

            return { ...state };
        }
        case 'SET_SELECTED_STUDENT': {
            return { ...state, selectedStudent: payload };
        }
        default:
            return state;
    }
};