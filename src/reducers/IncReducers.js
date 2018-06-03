export default function(state = {counter: 0}, action) {
    switch(action.type) {
        case "INCREMENT":
            return Object.assign({}, state, {counter: state.counter+parseInt(action.data)})
        case "DECREMENT":
            return Object.assign({}, state, {counter: state.counter-parseInt(action.data)})
        case "RESET":
            return Object.assign({}, state, {counter: 0})
    };
    return state;
}
