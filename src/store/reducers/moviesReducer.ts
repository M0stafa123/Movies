import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
interface Url {
  id?: string;
  page?: number;
  search?: string;
}
interface Movie {
  title: string;
  backdrop_path: string;
  poster_path: string;
  homepage: string;
  overview: string;
  genres: [];
}
export interface Movies {
  movies: { results: []; total_pages: number } | Movie | null;
  isFetching: boolean;
  error: string | null;
}
export const fetchMovies = createAsyncThunk(
  "Movies/get",
  async ({ id, page = 1, search }: Url) => {
    let url;
    if (id) {
      url = `https://api.themoviedb.org/3/movie/${id}?api_key=9ca882c0d9271bac0450ebcb904575b0`;
    } else if (search) {
      url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=9ca882c0d9271bac0450ebcb904575b0&page=${page}`;
    } else {
      url = `https://api.themoviedb.org/3/movie/popular?api_key=9ca882c0d9271bac0450ebcb904575b0&page=${page}`;
    }
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
);
const moviesSlice = createSlice({
  name: "Movies",
  initialState: {
    movies: null,
    isFetching: false,
    error: null,
  } as Movies,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.error = null;
      state.movies = payload;
    });
    builder.addCase(fetchMovies.pending, (state) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(fetchMovies.rejected, (state, { error }) => {
      state.error = error.message || "faild to fetch movies";
      state.isFetching = false;
      state.movies = null;
    });
  },
});
export default moviesSlice.reducer;
