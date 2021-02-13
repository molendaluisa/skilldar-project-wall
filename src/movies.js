import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  movies: [],
  total: 0
}

export const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    getMovies: state => {
      state.loading = true
    },
    getMoviesSuccess: (state, { payload }) => {
      state.movies = payload.movies
      state.loading = false
      state.hasErrors = false
      state.total = payload.total
    },
    getMoviesFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
  },
});

export const { getMovies, getMoviesSuccess, getMoviesFailure, } = moviesSlice.actions;
export const selectMovies = state => state.movies
export default moviesSlice.reducer


export function fetchMovies(searchTearm) {
  const response = fetch('http://www.omdbapi.com/?s=' + searchTearm + '&page=2&apikey=41d60d7c')
  var info = {
    movies: [],
    total: 0
  }

  return async dispatch => {
    dispatch(getMovies())

    try {
      response
        .then(response => response.json())
        .then((data) => {
          let moviesInfoCalls = []
          info.total = data.totalResults
          data.Search.forEach(result => {
            moviesInfoCalls.push(fetch('https://www.omdbapi.com/?apikey=41d60d7c&i=' + result.imdbID))
          })


          Promise.all(moviesInfoCalls

          ).then(function (responses) {
            return responses
          }).then(responses => {
            let jsons = []
            responses.forEach(r => {
              jsons.push(r.json())
            })
            Promise.all(jsons).then(rs => {
            info.movies = rs
            dispatch(getMoviesSuccess(info))
          })
          }
          )

        })
    } catch (error) {
      dispatch(getMoviesFailure())
    }
  }
}