import React, { Component } from 'react';
import { connect } from 'react-redux';

class RegisterForm extends Component {
    state = {
        values: {
            id: '',
            studentId: '',
            fullName: '',
            email: '',
            phoneNumber: '',
        },
        errors: {
            id: '',
            studentId: '',
            fullName: '',
            email: '',
            phoneNumber: '',
        },

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

        for (const key in this.state.errors) {
            const erMessage = this.state.errors[key];

            if (erMessage) {
                return alert(`Please fill in required fill(s)`);
            }
        }

        this.props.dispatch({
            type: 'ADD_STUDENT',
            payload: this.state.values,
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
        });

    };


    render() {
        return (
            <div className="card p-0">
                <div className="card-header bg-dark text-white font-weight-bold">
                    Student Information
                </div>
                <div className="card-body">

                    <form
                        noValidate
                        onSubmit={this.handleOnSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Student ID</label>
                                    <input
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
                                    <input
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
                                    <input
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
                                    <input
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
                        <button className="btn btn-outline-success ">Add Student</button>
                    </form>
                </div>

            </div>

        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         ...state.formReducer
//     };
// };

export default connect()(RegisterForm);