//https://www.youtube.com/watch?v=5jILq3ELhXg
import { modify } from "./actions/Actions";

const initialState = {
    type: '',
    name: '',
    description: ''
}

const datapass = (state = initialState, action) => {
    switch (action.type) {
        case 'datapass':
            state = action.data;
            return action.data;
        default:
            return state;
    }
}

export default datapass;