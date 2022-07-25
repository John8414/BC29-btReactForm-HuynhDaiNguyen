import React, { Component } from 'react';
import { connect } from 'react-redux';

class StudentManagement extends Component {

    renderStudentList = () => {

        return this.props.studentList.map((ele, idx) => {
            const {
                id,
                studentId,
                fullName,
                email,
                phoneNumber, } = ele;
            return (
                <tr
                    key={id}
                    className={`${idx % 2 === 0 && 'bg-light '}`}>
                    <td>{idx + 1}</td>
                    <td>{studentId}</td>
                    <td>{fullName}</td>
                    <td>{email}</td>
                    <td>{phoneNumber}</td>
                    <td>
                        <button
                            onClick={() => {
                                this.props.dispatch({
                                    type: 'SET_SELECTED_STUDENT',
                                    payload: ele,
                                });
                            }}
                            className="btn btn-info mr-2">EDIT</button>
                        <button className="btn btn-danger">DELETE</button>
                    </td>
                </tr>
            );
        });

    };

    render() {
        return (
            < div className="card p-0 mt-3" >
                <div className="card-header bg-dark text-white font-weight-bold">STUDENT MANAGEMENT</div>
                <div className="row mt-4 px-3 ">
                    <div className="col-4">
                        <div className="form-group mb-0">
                            <input
                                type="text"
                                placeholder="Search by full name..."
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Student ID</th>
                                <th>Full Name</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderStudentList()}
                        </tbody>
                    </table>
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.formReducer,
    };
};

export default connect(mapStateToProps)(StudentManagement);
