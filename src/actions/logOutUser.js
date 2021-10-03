import { LOG_OUT } from "../constants";

const logOutUser = () => (dispatch) => {
    dispatch({
        type: LOG_OUT,
    })
}

export default logOutUser;