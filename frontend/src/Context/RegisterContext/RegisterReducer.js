export const RegisterReducer = (state, { type, data }) => {

    switch (type) {
        case 'USERNAME':
            return {
                ...state,
                username: data
            }

        case 'YOURNAME':
            return {
                ...state,
                yourName: data
            }

        case 'EMAIL':
            return {
                ...state,
                email: data
            }

        case 'PASSWORD':
            return {
                ...state,
                password: data
            }

        case 'EMPTY_STATE':
            return {
                username: '',
                password: '',
                yourName: '',
                email: ''
            }

        default:
            return state;
    }
}