import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import validateLogin from '../actions/validateLogin';
import HomePage from './HomePage';

const LoginForm = ({
  isAuthenticated,
  actionValidateLogin,
}) => {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const inputOnchange = ({ target: {
      id: fieldId,
      value: fieldValue,
  } }) => {
      if (fieldId === 'email') {
          setUserName(fieldValue);
      }

      if (fieldId === 'password') {
          setPassword(fieldValue);
      }
  }

  const onFormSubmit = (event) => {
      event.preventDefault();
      actionValidateLogin({
        userName,
        password
      })
  }

  return (
    isAuthenticated ? <HomePage /> : (
      <div className="container w-25 pt-3">
        <form onSubmit={onFormSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label" > UserName </label >
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  onChange={inputOnchange}
                />
            </div >
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={inputOnchange}
                />
            </div>
            <button type="submit" className="btn btn-primary" data-testid='loginFormBtn'>Submit</button>
        </form >
      </div >
    )
  )
}

LoginForm.propTypes = {
  actionValidateLogin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.login.isAuth
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionValidateLogin: (form) => dispatch(validateLogin(form))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);