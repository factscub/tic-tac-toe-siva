import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const usePostData = () => {

    const [data, setData] = useState({
        loading: false,
        error: '',
        data: '',
        status: ''

    })
    const navigate = useNavigate()

    const postData = async ({ gotoUrl, url, state, dispatch } = {}) => {
        setData({
            loading: false,
            error: '',
            data: '',
            status: ''
        })
        try {
            // console.log(state)
            const empty = Object.values(state).some(value => value === '')

            if (empty) {
                setData(prev => ({ ...prev, error: 'Fill all fields.' }))
                return
            }

            if (!!url) {
                setData(prev => ({ ...prev, loading: true }))

                const fetchedData = await axios.post(`http://localhost:3000/${url}`, state);
                // console.log(fetchedData)

                dispatch({ type: 'EMPTY_STATE' })

                localStorage.setItem('user', fetchedData.data ? JSON.stringify(fetchedData.data) : null)

                setData(prev => ({ ...prev, loading: false, data: fetchedData.data, status: url === 'register' ? 'Congratulations!!! Account created' : '' }))
            }
            setTimeout(() => {
                navigate(gotoUrl)
            }, 2000);

        } catch (error) {
            console.log(error.response.data.error)

            setData(prev => ({ ...prev, loading: false, error: error.response.data.error }))
        }
    }
    return { ...data, postData }
}
