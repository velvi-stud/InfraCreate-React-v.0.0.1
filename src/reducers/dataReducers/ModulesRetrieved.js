//https://www.youtube.com/watch?v=5jILq3ELhXg

const modulesTop = [];

const modulesretrieved = (state = modulesTop, action) => {
    switch (action.type) {
        case 'modulesobtained':
            state = action.data;
            return action.data;
        default:
            return state;
    }
}

export default modulesretrieved;