import axios from 'axios';

//baseUrl to make requests to the movie database
const axiosRequest=axios.create({
    baseURL:"https://api.themoviedb.org/3/"
})

//axiosRequest.get('/url');

//https://api.themoviedb.org/3/url

export default axiosRequest