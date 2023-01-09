export const CreateGameReducer = (state, { type, data }) => {
    switch (type) {
        case 'EMAIL':
            return { email: data }

        default:
            return state
    }

}