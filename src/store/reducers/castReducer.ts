import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export interface Cast {
  cast: [];
  castFetching: boolean;
  castError: string | null;
}
export const fetchCast = createAsyncThunk(
  "Cast/get",
  async ({ id }: { id: string }) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9ca882c0d9271bac0450ebcb904575b0`
    );
    const data = await res.json();
    return data;
  }
);
const castSlice = createSlice({
  name: "Cast",
  initialState: {
    cast: [],
    castFetching: false,
    castError: null,
  } as Cast,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCast.fulfilled, (state, { payload }) => {
      state.castFetching = false;
      state.castError = null;
      state.cast = payload.cast;
    });
    builder.addCase(fetchCast.pending, (state) => {
      state.castFetching = true;
      state.castError = null;
    });
    builder.addCase(fetchCast.rejected, (state, { error }) => {
      state.castError = error.message || "faild to fetch cast";
      state.castFetching = false;
    });
  },
});
export default castSlice.reducer;
