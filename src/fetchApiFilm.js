import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTA4YjAwOGIzZDJiNThhNDI5YjdhMzllZjMxNDNlYyIsInN1YiI6IjY1ZjA4YTIyMWY3NDhiMDE4NDUyNjU2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3oeN-DD6y1fWxNLZ7qmrC2hvaY5DSiULcqfEPInfKhg'
    }
});

export const getTrendingMovies = async () => {
    const response = await axiosInstance.get(`trending/movie/day?language=en-US`);
    return response.data;
};


export const getInfoById = async (movieId) => {
    const response = await axiosInstance.get(`movie/${movieId}?language=en-US`);
    return response.data;
};

export const getCast = async (movieId) => {
    const response = await axiosInstance.get(`movie/${movieId}/credits?language=en-US`);
    return response.data;
};

export const getReviews = async (movieId) => {
    const response = await axiosInstance.get(`movie/${movieId}/reviews?language=en-US&page=1`);
    return response.data;
};

export const searchByQuery = async (query) => {
    const response = await axiosInstance.get(`search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
    return response.data;
};

















// const getTrendingMovies = async () => {
//     const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
//     const options = {
//         headers: {
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTA4YjAwOGIzZDJiNThhNDI5YjdhMzllZjMxNDNlYyIsInN1YiI6IjY1ZjA4YTIyMWY3NDhiMDE4NDUyNjU2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3oeN-DD6y1fWxNLZ7qmrC2hvaY5DSiULcqfEPInfKhg',
//             accept: 'application/json'
//         }
//     };
//     const response = await axios.get(url, options);
//     return response.data;
// };
// export default getTrendingMovies;


// export const getInfoById = async (movieId) => {
//     const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTA4YjAwOGIzZDJiNThhNDI5YjdhMzllZjMxNDNlYyIsInN1YiI6IjY1ZjA4YTIyMWY3NDhiMDE4NDUyNjU2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3oeN-DD6y1fWxNLZ7qmrC2hvaY5DSiULcqfEPInfKhg'
//         }
//     };
//     const response = await axios.get(url, options);
//     return response.data;
// };

// export const getCast = async (movieId) => {
//     const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTA4YjAwOGIzZDJiNThhNDI5YjdhMzllZjMxNDNlYyIsInN1YiI6IjY1ZjA4YTIyMWY3NDhiMDE4NDUyNjU2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3oeN-DD6y1fWxNLZ7qmrC2hvaY5DSiULcqfEPInfKhg'
//         }
//     };
//     const response = await axios.get(url, options);
//     return response.data;
// };