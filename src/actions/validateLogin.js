import users from '../fake/users'
import { LOGIN, LOGGED_IN_USERNAME } from "../constants";

const validateLogin = (form) => (dispatch) => {
    const { userName, password } = form;
    const user = users.find(user => user.username.includes(userName));
    const isAuth = user.password.toLowerCase() === password;
    dispatch({
        type: LOGIN,
        isAuth
    })

    if(isAuth) {
        dispatch({
            type: LOGGED_IN_USERNAME,
            user: userName
        })
    }
}

export default validateLogin;