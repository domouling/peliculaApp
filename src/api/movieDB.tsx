import axios from 'axios';


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        language: 'es-ES',
    },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTUxMDg3MTNmMDQ0MjMyNDU1MDdkYTE0YjQ2ODE0MiIsInN1YiI6IjY0ZTAwOWZmMDc2Y2U4MDEzYTI5NTY2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7EfuboOEEZhqOSEK0dtWtuyzVKhPZP0B86qG4XxhFjY',
    },
});

export default movieDB;

