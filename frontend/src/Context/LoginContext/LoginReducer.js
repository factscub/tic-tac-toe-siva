export const LoginReducer = (state, { type, data }) => {

    switch (type) {
        case 'USERNAME':
            return {
                ...state,
                username: data
            }

        case 'PASSWORD':
            return {
                ...state,
                password: data
            }

        case 'EMPTY_STATE':
            return {
                username: '',
                password: ''
            }

        default:
            return state;
    }
}