import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logOutUser from '../actions/logOutUser';

const Header = ({
    isAuthenticated,
    user,
    logOutUser,
}) =>{
    return (
        <nav className="navbar navbar-dark bg-dark justify-content-between">
            <span className="navbar-brand ml-2">
                { isAuthenticated ? 'HomePage' : 'Login Form' }
            </span>
            {
                isAuthenticated && (
                    <React.Fragment>
                        <span className="navbar-brand"> Logged In As: {user} </span>
                        <span className="pointer navbar-brand p-2-l" href="#" onClick={logOutUser}> Logout </span>
                    </React.Fragment>
                )    
            }
        </nav>
    );
}

Header.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logOutUser: PropTypes.func.isRequired,
    user: PropTypes.string,
}
  
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.login.isAuth,
        user: state.login.loggedInUser,
    }
};

const mapDispatchToProps = {
    logOutUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);