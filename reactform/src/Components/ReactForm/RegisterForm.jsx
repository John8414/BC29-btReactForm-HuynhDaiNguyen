import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { addStudentAction, updateStudentAction } from '../../Store/actions/studentAction';

const DEFAULT_VALUES = {
    id: '',
    studentId: '',
    fullName: '',
    email: '',
    phoneNumber: '',
};

class RegisterForm extends Component {
    state = {
        values: DEFAULT_VALUES,
        errors: DEFAULT_VALUES,

    };

    formRef = createRef;

    static getDerivedStateFromProps(nextProps, currentState) {
        if (nextProps.selectedStudent
            && currentState.values.id
            !== nextProps.selectedStudent.id) {
            currentState.values = nextProps.selectedStudent;

        }

        return currentState;
    };



    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            values: {
                ...this.state.values,
                [name]: value,
            }
        });

    };

    handleOnSubmit = (event) => {
        event.preventDefault();



        if (!event.target.checkValidity()) {
            return alert(`Please fill in required fill(s)`);
        }

        // this.props.dispatch({
        //     type: this.props.selectedStudent ? 'UPDATE_STUDENTS' : 'ADD_STUDENT',
        //     payload: this.state.values,
        // });

        if (this.props.selectedStudent) {
            this.props.dispatch(updateStudentAction(this.state.values));
        } else {
            this.props.dispatch(addStudentAction(this.state.values));
        }

        this.setState({
            values: DEFAULT_VALUES,
        }, () => {
            this.forceUpdate();
        });

    };

    handleOnBlur = (event) => {
        const { name,
            title,
            minLength,
            maxLength,
            validity: {
                valueMissing,
                patternMismatch,
                tooShort,
                tooLong, }
        } = event.target;

        let erMessage = '';

        if (patternMismatch) {
            erMessage = `${title} email must be in a proper format eg: nguyen@gmail.com`;
        }

        if (tooShort || tooLong) {
            erMessage = `${title} need to be from ${minLength} to ${maxLength} characters`;
        }

        if (valueMissing) {
            erMessage = `${title} is required`;
        }

        this.setState({
            errors: {
                ...this.state.errors,
                [name]: erMessage,
            }
        }, () => {
            this.forceUpdate();
        });
    };



    render() {
        const { studentId,
            fullName,
            phoneNumber,
            email,
        } = this.state.values || {};

        return (
            <div className="card p-0">
                <div className="card-header bg-dark text-white font-weight-bold">
                    Student Information
                </div>
                <span className='text-danger'>(*) are required fills</span>
                <div className="card-body">

                    <form
                        ref={this.formRef}
                        noValidate
                        onSubmit={this.handleOnSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Student ID</label>
                                    <span className='text-danger'>*</span>
                                    <input
                                        value={studentId}
                                        type="text"
                                        className="form-control"
                                        name='studentId'
                                        title='Student ID'
                                        required
                                        minLength={8}
                                        maxLength={12}
                                        onChange={this.handleOnChange}
                                        onBlur={this.handleOnBlur}
                                    />
                                    {
                                        this.state.errors.studentId && (
                                            <span className='text-danger'>
                                                {this.state.errors.studentId}
                                            </span>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <span className='text-danger'>*</span>
                                    <input
                                        value={fullName}
                                        type="text"
                                        className="form-control"
                                        name='fullName'
                                        title='Full Name'
                                        required
                                        minLength={8}
                                        maxLength={20}
                                        onChange={this.handleOnChange}
                                        onBlur={this.handleOnBlur}

                                    />
                                    {
                                        this.state.errors.fullName && (
                                            <span className='text-danger'>
                                                {this.state.errors.fullName}
                                            </span>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <span className='text-danger'>*</span>
                                    <input
                                        value={phoneNumber}
                                        type="text"
                                        className="form-control"
                                        name='phoneNumber'
                                        title='Phone Number'
                                        required
                                        minLength={10}
                                        maxLength={11}
                                        onChange={this.handleOnChange}
                                        onBlur={this.handleOnBlur}

                                    />
                                    {
                                        this.state.errors.phoneNumber && (
                                            <span className='text-danger'>
                                                {this.state.errors.phoneNumber}
                                            </span>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <span className='text-danger'>*</span>
                                    <input
                                        value={email}
                                        type="text"
                                        className="form-control"
                                        name='email'
                                        title='Email'
                                        required
                                        onChange={this.handleOnChange}
                                        onBlur={this.handleOnBlur}
                                        pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$'

                                    />
                                    {
                                        this.state.errors.email && (
                                            <span className='text-danger'>
                                                {this.state.errors.email}
                                            </span>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <button
                            //đã có validation và quăng lỗi nên nghĩ không cần thiết disable
                            // disabled={this.handleOnBlur.erMessage !== ''}
                            className="btn btn-outline-success ">Save Student
                        </button>
                    </form>
                </div>

            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.formReducer
    };
};

export default connect(mapStateToProps)(RegisterForm);