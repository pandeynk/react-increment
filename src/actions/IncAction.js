export function incrementAction(data) {
    return {
        type: "INCREMENT",
        data
    }
}

export function decrementAction(data) {
    return {
        type: "DECREMENT",
        data
    }
}

export function resetAction(data) {
    return {
        type: "RESET",
        data
    }
}
