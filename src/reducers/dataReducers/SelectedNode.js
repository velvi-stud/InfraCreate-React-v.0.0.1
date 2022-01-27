//https://www.youtube.com/watch?v=5jILq3ELhXg

const initialState = {}

const selectednode = (state = initialState, action) => {
    switch (action.type) {
        case 'selectednode':
            state = action.data;
            return action.data;
        default:
            return state;
    }
}

export default selectednode;