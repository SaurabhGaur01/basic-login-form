import { SAVE_POST } from "../constants";

const logOutUser = posts => (dispatch) => {
    dispatch({
        type: SAVE_POST,
        posts
    })
    return null;
}

export default logOutUser;