import axiosWithAuth from './axiosWithAuth';

export const getColors = () => {
    return axiosWithAuth().get('/api/colors').then(res => res)
}